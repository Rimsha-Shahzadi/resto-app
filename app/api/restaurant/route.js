// import { restaurantSchema } from "@/app/lib/restaurantModel";
// import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import { connectionStr } from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose  from "mongoose";
export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const data= await restaurantSchema.find()
    console.log(data);
return NextResponse.json({result:true})
}

