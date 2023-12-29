import type { NextApiRequest, NextApiResponse } from 'next'
export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    // const body = await request.json();
    console.log({request})
 
  return Response.json({ s:"s" })
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log({body})
 
  return Response.json({ s:"success" })
}