import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();
  const receivedMessage = body.message;

  console.log(`サーバーで受信しました: ${receivedMessage}`)

  const replyMessage = `サーバーからの返信: 「${receivedMessage}」を受け取りました`;

  return NextResponse.json({ reply: replyMessage })
}