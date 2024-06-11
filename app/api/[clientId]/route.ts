import { dbConfig } from "@/app/utils/dbConfig";
import Client from "@/app/utils/model/clientModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, params: any, res: NextResponse) => {
  await dbConfig();
  const { Id } = params.params;
  const getD = await Client.findById(Id);
  return NextResponse.json({
    message: "Hey",
    data: getD,
  });
};
