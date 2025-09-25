import { Resend } from "resend";

type LeadPayload = {
  name: string;
  email: string;
  message: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const leadsTo = process.env.LEADS_TO;
const fromAddress = process.env.LEADS_FROM ?? "Leads <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendLeadEmail(payload: LeadPayload) {
  if (!resend || !resendApiKey) {
    return {
      ok: false as const,
      error: "RESEND_API_KEY missing",
    };
  }

  if (!leadsTo) {
    return {
      ok: false as const,
      error: "LEADS_TO missing",
    };
  }

  const subject = `New lead from ${payload.name}`;

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: [leadsTo],
    replyTo: payload.email,
    subject,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nMessage:\n${payload.message}`,
  });

  if (error) {
    return {
      ok: false as const,
      error: error.message,
    };
  }

  return {
    ok: true as const,
    id: data?.id ?? null,
  };
}
