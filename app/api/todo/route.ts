import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {field} = await req.json();

    const res = await prismadb.todos.create({
        data: {
            remarks: field,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });
    return new NextResponse("VAL", { status: 200 });
  } catch (error) {
    return new NextResponse("INTERNAL_ERROR", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  console.log('delete guest cart offer');
  try {
    const {id} = await req.json();
    console.log(id);
    
    const deleteUser = await prismadb.todos.delete({
      where: {id: id},
    })

    if(!deleteUser) return new NextResponse("INTERNAL_ERROR", { status: 500 });

    return new NextResponse("VAL", { status: 200 });
  } catch (error) {
    return new NextResponse("INTERNAL_ERROR", { status: 500 });
  }
}