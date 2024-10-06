"use server";

import { NextResponse } from "next/server";
import Contact from "@/utils/models/contact";
import db from "@/services/mongo";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing fields",
      },
      { status: 400 },
    );
  }
  const contact = new Contact(name, email, message);
  try {
    if (!db) {
      return NextResponse.json(
        {
          success: false,
          message: "Error connecting to database",
        },
        { status: 500 },
      );
    }
    const resDb = await db.collection("contacts").insertOne(contact);
    console.log(resDb);
    return NextResponse.json(
      {
        success: true,
        message: "Contact created",
        id: resDb.insertedId,
      },
      { status: 201 },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    NextResponse.json(
      {
        success: false,
        message: "Error creating contact",
      },
      { status: 500 },
    );
  }
}
