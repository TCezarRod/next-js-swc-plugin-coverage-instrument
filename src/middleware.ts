import { NextResponse } from "next/server";

export const middleware = async () => {
    console.log("Running middleware")
    return NextResponse.next()
}