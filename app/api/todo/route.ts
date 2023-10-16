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
