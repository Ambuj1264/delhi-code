import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../(connection)";
import Blogs from "../../(models)/blog";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      await connectDB()
      const findCreateDemo = await Blogs.findOne({
        _id: params?.id,
        isDeleted: false,
      });
      return NextResponse.json({
        success: true,
        message: "find successfully",
        data: findCreateDemo,
      });
    } catch (error: any) {
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    }
  }