import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// This is for users you know have access to specific email address
// not meant for SAAS where user emails need to be validated to prevent email
// theft.

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    // Confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check for duplicates
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        { message: "This email address has already been used" },
        { status: 409 }
      );
    }

    // NOTE: lower case EMAIL address before storing to database to remove case sensitivity?
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await User.create(userData);
    return NextResponse.json({ message: "User created." }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
