import { NextRequest, NextResponse } from "next/server";
import connectDB from "../(connection)";
import { UserRequestBody } from "@/types/interface";
import Users from "../(models)/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const requestBody = await req?.json();
    const { email, password }: UserRequestBody = requestBody;
    const lowercaseLoginName = email.toLowerCase().trim();

    let isPasswordMatch;
    if (email && password) {
      const login: any = await Users.findOne({ email: lowercaseLoginName, isDeleted:false });
      if (login) {
        isPasswordMatch = await bcrypt.compare(password, login.password);
        if (!isPasswordMatch) {
          return NextResponse.json({
            success: false,
            message: "Email and password do not match",
            data: [],
          });
        }
        const token = jwt.sign({ login }, process.env.JWT_SECRET!, { expiresIn: "7d" });

        return NextResponse.json({
          success: true,
          message: "Login successful",
          data: login,
          token: token,
        });
      }
      if (!login || !isPasswordMatch) {
        return NextResponse.json({
          success: false,
          message: "Email and password do not match",
          data: [],
        });
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while processing your request.",
      data: [],
    });
  }
}
