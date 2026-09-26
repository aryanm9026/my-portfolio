"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const isConfigured = Boolean(FORMSPREE_ID && FORMSPREE_ID !== "your_formspree_id_here");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isConfigured) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 border-t hairline">
      <div className="container-page grid md:grid-cols-12 gap-10 md:gap-6">
        <div className="md:col-span-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="num-tag mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl text-paper mb-8"
          >
            Building something worth talking about?
          </motion.h2>

          <div className="space-y-3 text-sm">
            <a href={`mailto:${profile.email}`} className="block text-bone hover:text-paper transition-colors focus-ring">
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-bone hover:text-paper transition-colors focus-ring"
            >
              {profile.githubHandle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-bone hover:text-paper transition-colors focus-ring"
            >
              {profile.linkedinHandle}
            </a>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {!isConfigured && (
              <p className="text-xs font-mono text-graphite border hairline rounded-lg px-4 py-3">
                Form isn&apos;t wired up yet — add a Formspree ID in .env.local (see README) to accept
                submissions. Until then this button opens your email client instead.
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" type="text" />
            <div>
              <label className="text-xs font-mono text-graphite" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full bg-transparent border-b hairline focus:border-paper outline-none py-2 text-paper placeholder:text-graphite resize-none transition-colors focus-ring"
                placeholder="What are you building, and where do I fit in?"
              />
            </div>

            {isConfigured ? (
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-flare transition-colors disabled:opacity-50 focus-ring"
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
              </button>
            ) : (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-flare transition-colors focus-ring"
              >
                Email me instead
              </a>
            )}

            {status === "sent" && (
              <p className="text-sm text-flare">Thanks — I&apos;ll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-bone">
                Something went wrong. Try again, or email {profile.email} directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-mono text-graphite" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b hairline focus:border-paper outline-none py-2 text-paper placeholder:text-graphite transition-colors focus-ring"
      />
    </div>
  );
}
