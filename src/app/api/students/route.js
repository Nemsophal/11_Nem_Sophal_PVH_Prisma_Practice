import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const students = await prisma.studentTable.findMany(); 
    return NextResponse.json({
      status: 200,
      message: "Students retrieved successfully",
      payload: students
    });
}

export async function POST(req) {
    const body = await req.json();
    const student = await prisma.studentTable.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });
    return NextResponse.json({
      status: 201,
      message: "Student created successfully",
      payload: student
    });
  }