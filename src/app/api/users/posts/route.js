//`${API}/posts`

import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json({ success: true, posts });
}
