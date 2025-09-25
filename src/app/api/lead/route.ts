import { NextResponse } from "next/server";
import { z } from "zod";

import { sendLeadEmail } from "@/lib/resend";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid payload",
        issues: parsed.error.issues,
      },
      { status: 400 },
    );
  }

  const result = await sendLeadEmail(parsed.data);

  if (!result.ok) {
    console.warn("Lead email not sent", result.error);
    return NextResponse.json({ success: true, sent: false });
  }

  return NextResponse.json({ success: true, sent: true, id: result.id });
}
