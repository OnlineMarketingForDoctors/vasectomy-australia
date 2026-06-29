"use client";

import { useState } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  half?: boolean;
};

export function LeadForm({
  kind,
  fields,
  submitLabel = "Send enquiry",
}: {
  kind: string;
  fields: Field[];
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [captcha, setCaptcha] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (captcha.trim() !== "12") {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, data }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
      form.reset();
      setCaptcha("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[2px] border border-line bg-paper p-8 text-center">
        <p className="font-display text-2xl text-teal">Thank you.</p>
        <p className="mt-2 text-ink-soft">
          We&apos;ve received your enquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  const base =
    "w-full rounded-[2px] border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.half ? "sm:col-span-1" : "sm:col-span-2"}>
          <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-ink">
            {f.label}
            {f.required ? <span className="text-clay"> *</span> : null}
          </label>
          {f.type === "textarea" ? (
            <textarea id={f.name} name={f.name} required={f.required} rows={4} className={base} />
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              className={base}
            />
          )}
        </div>
      ))}

      <div className="sm:col-span-2">
        <label htmlFor="captcha" className="mb-1.5 block text-sm font-medium text-ink">
          Quick check: what is 8 + 4?<span className="text-clay"> *</span>
        </label>
        <input
          id="captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          required
          className={`${base} max-w-32`}
        />
      </div>

      {status === "error" ? (
        <p className="sm:col-span-2 text-sm text-clay">
          Please check the form (including the quick-check answer) and try again.
        </p>
      ) : null}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center rounded-full bg-teal px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-teal-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
