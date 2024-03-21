import { NextRequest, NextResponse } from "next/server";
import connectDB from "../(connection)";
import Blogs from "../(models)/blog";


export async function GET(req: NextRequest) {
    try {
      await connectDB();
      const findCreateDemo = await Blogs.find({
        isDeleted: false,
      });
      return NextResponse.json({
        success: true,
        message: "Fetched successfully",
        data: findCreateDemo,
      });
    } catch (error: any) {
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    }
  }