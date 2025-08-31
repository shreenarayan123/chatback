import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  try {
    const { fileId } = body;

    if (!fileId) {
      return NextResponse.json({ error: "Missing fileId" }, { status: 400 });
    }

    await db.docs.delete({
      where: { id: fileId },
    });

    return NextResponse.json(
      { message: "File deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
}
