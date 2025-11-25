import { NextRequest, NextResponse } from "next/server";
import type { LeadFormData, ApiResponse } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, and phone are required",
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Log the lead (in production, you would save to database)
    console.log("New Lead Received:", {
      name,
      email,
      phone,
      message: message || "No message provided",
      timestamp: new Date().toISOString(),
    });

    // Here you would typically save to database
    // Example: await Lead.create({ name, email, phone, message });

    return NextResponse.json(
      {
        success: true,
        message: "Lead saved successfully",
        data: {
          name,
          email,
          phone,
          message: message || null,
        },
      } as ApiResponse<LeadFormData>,
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      } as ApiResponse,
      { status: 500 }
    );
  }
}

