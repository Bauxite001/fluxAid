// pages/Contact.jsx

import { useState } from "react";
import { ORG_NAME, CONTACT } from "../constants";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Partnership & Collaboration",
  "Media & Press",
  "DANGA Award Nomination",
  "Volunteer Enquiry",
  "Donation Enquiry",
  "Programme Information",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organisation: "",
    enquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real submission logic — Formspree, EmailJS, backend API, etc.
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  const inputClass = `
    bg-[#161616] border border-[#2A2A2A]
    font-body font-light text-[14px] text-[#F5F5F5]
    px-5 py-4 rounded-sm outline-none
    placeholder:text-[#3A3A3A]
    focus:border-[#9A9A9A] transition-colors duration-200
    w-full
  `;

  const labelClass = `
    font-condensed font-bold uppercase
    text-[9px] tracking-[2.5px] text-[#9A9A9A]
  `;

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative px-4 lg:px-16 py-20 lg:py-28 bg-[#0F0F0F] border-b border-white/[0.07] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-[680px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]" />
            <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3.5px] text-[#9A9A9A]">
              Get In Touch
            </span>
          </div>
          <h1 className="font-display font-bold text-[#F5F5F5] text-[52px] lg:text-[80px] leading-[0.95] tracking-[-2px] mb-6">
            Let's <em className="italic font-normal text-[#E8E0D0]">talk</em>
          </h1>
          <p className="font-body font-light text-[15px] leading-[1.8] text-[#9A9A9A] max-w-[500px]">
            Whether you want to partner, nominate someone for the DANGA Award,
            ask about our programmes, or just say hello — we want to hear from
            you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────── */}
      <section className="px-4 lg:px-16 py-16 lg:py-24 border-b border-white/[0.07]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* ── FORM ───────────────────────────── */}
          {submitted ? (
            <div className="bg-[#161616] border border-white/[0.07] p-12 flex flex-col items-center justify-center text-center min-h-[400px] gap-6">
              <span className="text-[48px] opacity-60">✉️</span>
              <h3 className="font-display font-bold text-[#F5F5F5] text-[28px] leading-[1.2]">
                Message received
              </h3>
              <p className="font-body font-light text-[14px] leading-[1.8] text-[#9A9A9A] max-w-[360px]">
                Thank you for reaching out to {ORG_NAME}. We will get back to
                you within 3–5 working days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="
                  font-condensed font-bold uppercase text-[10px] tracking-[2.5px]
                  text-[#9A9A9A] border border-[#2A2A2A] px-6 py-3 rounded-sm
                  hover:border-[#9A9A9A] hover:text-[#C8C8C8]
                  transition-all duration-200 cursor-pointer bg-transparent
                "
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="First name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              {/* Organisation */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Organisation / Company</label>
                <input
                  type="text"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Optional — your organisation or company name"
                />
              </div>

              {/* Enquiry type */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>
                  What Is Your Enquiry About? *
                </label>
                <select
                  name="enquiryType"
                  required
                  value={form.enquiryType}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Your Message *</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="
                    w-full bg-[#F5F5F5] text-[#080808]
                    font-condensed font-bold uppercase text-[12px] tracking-[3px]
                    py-5 rounded-sm border-0 cursor-pointer
                    hover:bg-[#C8C8C8] transition-colors duration-200
                    active:scale-[0.99]
                  "
                >
                  Send Message →
                </button>
                <p className="font-body font-light text-[11px] text-[#2A2A2A] text-center mt-3">
                  We respond within 3–5 working days · No spam ever
                </p>
              </div>
            </form>
          )}

          {/* ── SIDEBAR ────────────────────────── */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-[100px]">
            {/* Abuja office */}
            <div className="bg-[#161616] border border-white/[0.07] p-7">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-5">
                Abuja Office
              </h5>
              <div className="flex flex-col gap-3">
                <p className="font-body font-light text-[13px] leading-[1.8] text-[#C8C8C8]">
                  {CONTACT.abuja}
                </p>
                <a
                  href={`tel:${CONTACT.phone1}`}
                  className="font-body font-light text-[13px] text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-200 no-underline"
                >
                  {CONTACT.phone1}
                </a>
                <a
                  href={`tel:${CONTACT.phone2}`}
                  className="font-body font-light text-[13px] text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-200 no-underline"
                >
                  {CONTACT.phone2}
                </a>
              </div>
            </div>

            {/* Lagos office */}
            <div className="bg-[#161616] border border-white/[0.07] p-7">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-5">
                Lagos Office
              </h5>
              <div className="flex flex-col gap-3">
                <p className="font-body font-light text-[13px] leading-[1.8] text-[#C8C8C8]">
                  {CONTACT.lagos}
                </p>
                <a
                  href={`tel:${CONTACT.phone3}`}
                  className="font-body font-light text-[13px] text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-200 no-underline"
                >
                  {CONTACT.phone3}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#161616] border border-white/[0.07] p-7">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-5">
                Email Us
              </h5>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT.email1}`}
                  className="font-body font-light text-[13px] text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-200 no-underline break-all"
                >
                  {CONTACT.email1}
                </a>
                <a
                  href={`mailto:${CONTACT.email2}`}
                  className="font-body font-light text-[13px] text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-200 no-underline"
                >
                  {CONTACT.email2}
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="bg-[#161616] border border-white/[0.07] p-7">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-5">
                Follow Us
              </h5>
              <div className="flex items-center gap-2">
                {[
                  { label: "𝕏", href: "#" },
                  { label: "in", href: "#" },
                  { label: "IG", href: "#" },
                  { label: "YT", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="
                      w-10 h-10 flex items-center justify-center
                      border border-[#2A2A2A] rounded-sm
                      font-condensed font-bold text-[12px] text-[#9A9A9A]
                      hover:border-[#9A9A9A] hover:text-[#F5F5F5]
                      transition-all duration-200 no-underline
                    "
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="font-body font-light text-[12px] text-[#9A9A9A] mt-3">
                {CONTACT.social}
              </p>
            </div>

            {/* Response time */}
            <div className="bg-[#0F0F0F] border border-white/[0.07] p-6">
              <div className="flex items-start gap-4">
                <span className="text-[20px] opacity-40 flex-shrink-0">⏱</span>
                <div>
                  <div className="font-condensed font-bold uppercase text-[9px] tracking-[2px] text-[#9A9A9A] mb-2">
                    Response Time
                  </div>
                  <p className="font-body font-light text-[12px] leading-[1.7] text-[#9A9A9A]">
                    We aim to respond to all enquiries within 3–5 working days.
                    For urgent matters, please call our offices directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
