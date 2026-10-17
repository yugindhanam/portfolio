"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCopy,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { supabase } from "@/lib/supabaseClient";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    type: "email",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    type: "phone",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: personalInfo.location,
    href: null,
    type: "location",
  },
];
const socials = [
  { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: personalInfo.twitter, label: "Twitter" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [focused, setFocused] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setErrorMsg(
        "Could not copy. Please select the contact details to copy them manually.",
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // If Supabase credentials are environments variables
      if (
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project-ref") &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ) {
        const { error } = await supabase.from("contact_messages").insert([
          {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
      } else {
        throw new Error("Contact service is not configured");
      }

      setSubmitted(true);
      setTimeout(() => {
        setForm({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error("Supabase submission error:", err);
      setErrorMsg(
        "Your message could not be sent. Please contact me directly by email.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-8 relative [perspective:1000px]"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="05"
          label="START A CONVERSATION"
          title="Let?s build something meaningful."
          description="Have an opportunity or a project in mind? I?d be glad to hear from you."
        />

        <div className="contact-grid grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div className="contact-panel p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                I am actively seeking software engineering internships, web
                development opportunities, and freelance projects. Feel free to
                contact me directly!
              </p>
            </div>

            {/* Contact Cards with Copy Button */}
            <div className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, value, href, type }) => (
                <div
                  key={label}
                  className="contact-panel flex items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] group"
                >
                  <div className="contact-item-inner flex items-center gap-4">
                    <div className="contact-info-icon w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400 text-base shrink-0 bg-indigo-500/10 border border-indigo-500/25">
                      <Icon />
                    </div>
                    <div className="contact-details">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-slate-200 text-xs font-semibold no-underline hover:text-indigo-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-200 text-xs font-semibold">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>

                  {href && (
                    <button
                      type="button"
                      onClick={() => handleCopy(value, type)}
                      title={`Copy ${label}`}
                      aria-label={`Copy ${label}`}
                      className="contact-copy p-2 text-slate-400 hover:text-indigo-400 bg-slate-800/60 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer border border-slate-700/50"
                    >
                      {copiedField === type ? (
                        <FaCheck className="text-emerald-400 text-xs" />
                      ) : (
                        <FaCopy className="text-xs" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="contact-social w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400 no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                  style={{
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.25)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "linear-gradient(135deg, #6366f1, #8b5cf6)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(99,102,241,0.08)")
                  }
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-6 p-7 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-cyan-500/40"
            onSubmit={handleSubmit}
          >
            {["name", "email", "subject"].map((field) => (
              <div
                key={field}
                className={`field-group ${focused === field || form[field] ? "has-value" : ""}`}
              >
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={`contact-${field}`}
                  value={form[field]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                  required
                  autoComplete={field === "subject" ? "off" : field}
                />
                <label htmlFor={`contact-${field}`}>
                  Your {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <div className="field-glow"></div>
              </div>
            ))}

            <div
              className={`field-group ${focused === "message" || form.message ? "has-value" : ""}`}
            >
              <textarea
                name="message"
                id="contact-message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
              ></textarea>
              <label htmlFor="contact-message">Your Message</label>
              <div className="field-glow"></div>
            </div>

            {errorMsg && (
              <p role="alert" className="text-xs text-rose-400 font-medium">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              aria-live="polite"
              disabled={loading || submitted}
              className={`w-full py-4 rounded-full font-semibold text-white border-none cursor-pointer transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2 ${
                submitted || loading
                  ? "cursor-not-allowed"
                  : "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              }`}
              style={{
                background: submitted
                  ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                  : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                boxShadow: submitted
                  ? "0 4px 20px rgba(16,185,129,0.35)"
                  : "0 4px 20px rgba(99,102,241,0.35)",
              }}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending message...
                </>
              ) : submitted ? (
                "Message sent. Thank you!"
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
