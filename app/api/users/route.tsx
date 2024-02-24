import { connectdb } from "@/utils/db";
import { NextResponse } from "next/server"

connectdb();

export async function GET(){
    const users=[
        {
            name:"abhay",
            address:"kalol",
            company:"dolphin software technologies"
        }
    ]

    return NextResponse.json(users);
}