import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      status: "OK",
      message: "Server is running",
    } as ApiResponse,
    { status: 200 }
  );
}

