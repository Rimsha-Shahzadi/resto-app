// import { restaurantSchema } from "@/app/lib/restaurantModel";
// import { connectionStr } from "@/app/lib/db";
// import { NextResponse } from "next/server";
// import mongoose  from "mongoose";
// export async function GET(){
//     // await mongoose.connect(connectionStr,{useNewUrlParser:true})
//     await mongoose.connect(connectionStr, { useNewUrlParser: true })
//     await mongoose.connect(connectionStr)
//     const data= await restaurantSchema.find()
//     console.log(data);
// return NextResponse.json({result:true})
// }

import { restaurantScheme } from "@/app/lib/restaurantModel";
import { connectionStr } from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    await mongoose.connect(connectionStr);

    const data = await restaurantScheme.find();
    console.log(data);

    return NextResponse.json({
        result: data,
        success: true
    });
}