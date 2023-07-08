import { NextResponse } from "next/server";
import { DeliverooData } from "../../../../data.types";

// API GET ROUTE

export async function GET(req: Request) {
    try {    
        const response = await fetch(`${process.env.DELIVEROO_PAGE_URL}`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        })
        if(response.ok) {
            const data: DeliverooData = await response.json();
            // add CORS setting to allow outside request
            return new Response(JSON.stringify(data), {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            })
        } else {
            throw new Error("Unable to get data or token expired")
        }     
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { message: "Internal Error please try again later." },
            { status: 500 }
        );  
    }
}