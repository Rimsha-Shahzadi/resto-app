import { restaurantSchema } from "@/app/lib/restaurantModel";
import { connectionStr } from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose  from "mongoose";
export async function GET(){
    // await mongoose.connect(connectionS.tr,{useNewUrlParser:true})
    await mongoose.connect(connectionStr, { useNewUrlParser: true })
    await mongoose.connect(connectionStr)
    const data= await restaurantSchema.find()
    console.log(data);
return NextResponse.json({result:true})
}

import { restaurantScheme } from "@/app/lib/restaurantModel";
import { connectionStr } from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    await mongoose.connect(connectionStr);
    const data = await restaurantScheme.find();
    console.log(data);
return NextResponse.json({result: data})
}
export async function POST() {
   return NextResponse.json({result:true})
}


// import mongoose from 'mongoose';
// import restaurantScheme from '@/models/restaurantModel'; // adjust path

// const connectionStr = process.env.MONGODB_URI;

// export async function GET() {
//     if (!connectionStr) {
//         return Response.json({ error: "MONGODB_URI is not defined" }, { status: 500 });
//     }

//     try {
//         await mongoose.connect(connectionStr);   // No second argument needed in modern Mongoose
//         const data = await restaurantScheme.find();
//         console.log(data);
        
//         return Response.json(data);
//     } catch (error) {
//         console.error(error);
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }

// import { connectToDatabase } from '@/lib/mongodb';

// export async function GET() {
//     await connectToDatabase();
//     const data = await restaurantScheme.find();
//     return Response.json(data);
// }