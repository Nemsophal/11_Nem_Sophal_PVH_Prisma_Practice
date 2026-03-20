import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = await params; 
    const body = await req.json();
    const updated = await prisma.studentTable.update({
      where: { id: parseInt(id) }, 
      data: body,
    });
    return NextResponse.json({
      status: 200,
      message: "Student updated successfully",
      payload: updated
    });
  } 

export async function DELETE(req, { params }) {
  const { id } = await params; 
    await prisma.studentTable.delete({
      where: { id: parseInt(id) }, 
    });
    return NextResponse.json({
      status: 200,
      message: "Student deleted successfully"
    });
  } 
