"use server";

import { NextResponse, NextRequest } from "next/server";
import Contact from "@/utils/models/contact";
import db from "@/services/mongo";

export async function POST(request: Request) {
  console.log(NextRequest);
  const { name, email, message } = await request.json();
  console.log(name, email, message);
  const contact = new Contact(name, email, message);
  try {
    if (!db) {
      return NextResponse.json(
        {
          message: "Error connecting to database",
        },
        { status: 500 },
      );
    }
    const resDb = await db.collection("contacts").insertOne(contact);
    console.log(resDb);
    return NextResponse.json(
      {
        message: "Contact created",
        id: resDb.insertedId,
      },
      { status: 201 },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    NextResponse.json(
      {
        message: "Error creating contact",
      },
      { status: 500 },
    );
  }
}
