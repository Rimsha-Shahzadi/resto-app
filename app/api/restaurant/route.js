import { restaurantScheme } from "@/app/lib/restaurantModel";
import { connectionStr } from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const data = await restaurantScheme.find();
    console.log(data);
return NextResponse.json({result: data})
}
export async function POST() {
   return NextResponse.json({result:true})
}
