import { NextRequest, NextResponse } from "next/server";
import { generateHash } from "../../../utility/commonMethod";
import Users from "../(models)/user";
import connectDB from "../(connection)";
import { UserRequestBody } from "@/types/interface";
const jwt = require("jsonwebtoken");
interface UserDuplicationResult {
  emailIsDuplicated: boolean;
  errorMessage?: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const requestBody = await req?.json();
    const { email, password, name }: UserRequestBody = requestBody;
    if (!email || !password || !name) {
      return NextResponse.json({
        success: false,
        message: "Please provide email, password, and name.",
      });
    }
    const sanitizedEmail = email.trim().toLowerCase();
    const hashedPassword = await generateHash(password);
    const checkEmail = await checkEmailDuplication(sanitizedEmail);
    if (checkEmail.emailIsDuplicated) {
      return NextResponse.json({
        success: false,
        message: checkEmail.errorMessage,
        data: [],
      });
    }

    const newUser = await Users.create({
      email: sanitizedEmail,
      password: hashedPassword,
      name,
    });
    const token = jwt.sign({ newUser }, process.env.JWT_SECRET!, { expiresIn: "7d" });

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data: newUser,
      token: token,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while processing your request.",
      data: [],
    });
  }
}

const checkEmailDuplication = async (email: string): Promise<UserDuplicationResult> => {
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return {
        emailIsDuplicated: true,
        errorMessage: "Email already exists.",
      };
    } else {
      return {
        emailIsDuplicated: false,
      };
    }
  } catch (error) {
    throw new Error("Error checking email duplication.");
  }
};
