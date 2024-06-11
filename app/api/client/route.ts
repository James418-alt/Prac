import clientModel from "@/app/utils/model/clientModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConfig } from "@/app/utils/dbConfig";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { name, email, password, homeAddress, phoneNumber } =
      await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const getD = await clientModel.create({
      name,
      email,
      password: hashed,
      homeAddress,
      phoneNumber,
    });
    return NextResponse.json({
      message: "User Created!",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
    });
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { email } = await req.json();
    console.log(email);
    const getD = await clientModel.findOne(email);
    return NextResponse.json({
      message: "All Users",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 404,
    });
  }
};
