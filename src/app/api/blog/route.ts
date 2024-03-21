import { NextRequest, NextResponse } from "next/server";
import connectDB from "../(connection)";
import { BlogRequestBody } from "@/types/interface";
import Blogs from "../(models)/blog";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const requestBody = await req?.json();
    const { name, blogDetails }: BlogRequestBody = requestBody;
    const nameofBlog = name.toLowerCase().trim();

    const createBlog = await Blogs.create({
        name: nameofBlog,
        blogDetails
    })
        return NextResponse.json({
          success: true,
          message: "Created blog",
          data: createBlog
        });
     
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while processing your request.",
      data: [],
    });
  }
}

  
