import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const AskInput = z.object({
  question: z.string().trim().min(3).max(600),
  culture: z.string().trim().max(60).default("Not specified"),
  place: z.string().trim().max(120).default(""),
});

const SYSTEM_PROMPT = `You are Imbewu, a respectful guide to Southern African generational knowledge (Zulu, Swati, Tsonga, Sepedi and neighbouring cultures).

Truthfulness rules — these override everything else:
- Never invent an elder, a name, a recording, a village, a date or a citation. Imbewu has no recorded archive yet, so never claim an answer comes from a specific elder or preserved recording.
- Share only widely documented, commonly known cultural or practical knowledge. If you are not confident, say plainly that you don't know and suggest asking an elder in the community.
- Practices vary by family, clan and region. Say so instead of presenting one version as the single truth.
- Never give medical, dosage or treatment advice for traditional medicine. Describe cultural context only and recommend a qualified practitioner or clinic.
- Do not describe sacred or initiation practices in detail; point the person to their own elders instead.

Style: warm, plain English, 120-180 words. Use short paragraphs. End with one specific question the person could ask an elder to learn more.`;

export const askImbewu = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => AskInput.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured yet.");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Cultural background: ${data.culture}\nPlace: ${data.place || "not given"}\nQuestion: ${data.question}`,
          },
        ],
      }),
    });

    if (res.status === 429) {
      return { ok: false as const, message: "Imbewu is busy right now. Please try again in a moment." };
    }
    if (res.status === 402) {
      return { ok: false as const, message: "AI credits are exhausted. Please top up to keep asking." };
    }
    if (!res.ok) {
      return { ok: false as const, message: "Imbewu couldn't answer that right now. Please try again." };
    }

    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const answer = json.choices?.[0]?.message?.content?.trim();
    if (!answer) {
      return { ok: false as const, message: "Imbewu couldn't answer that right now. Please try again." };
    }
    return { ok: true as const, answer };
  });
