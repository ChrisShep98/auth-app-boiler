import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/Users";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(req: any){
    try{
        const { userName, email, password } = await req.json()

        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDB();

        const existingUser = await User.findOne({email})

        if(existingUser){
            return new NextResponse("Email is already in use", {status: 400})
        }

        await User.create({userName, email, password: hashedPassword})

        return NextResponse.json({message: "User registered"}, {status: 201})
    } catch (error){
        return NextResponse.json({message: "An error occurred while registering"}, {status: 500})
    }
}