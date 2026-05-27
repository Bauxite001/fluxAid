// pages/Volunteer.jsx

import { useState } from "react";
import { ORG_NAME } from "../constants";
import Button from "../components/Button";

const ROLES = [
  {
    icon: "⚖️",
    title: "Advocacy & Legal Support",
    desc: "Help us champion human rights, draft advocacy materials, and support legal awareness campaigns in communities.",
    skills: ["Law", "Policy", "Writing", "Research"],
  },
  {
    icon: "🏥",
    title: "Health & Medical Outreach",
    desc: "Join our mobile health units providing free consultations, screenings, and health education in underserved areas.",
    skills: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
  },
  {
    icon: "💻",
    title: "Digital & Tech Skills",
    desc: "Train youth in coding, design, and digital marketing through our Digital Skills Africa programme.",
    skills: ["Coding", "Design", "Marketing", "Data"],
  },
  {
    icon: "📢",
    title: "Communications & Media",
    desc: "Help us tell our stories — through photography, writing, social media, and community radio.",
    skills: ["Photography", "Writing", "Social Media", "Video"],
  },
  {
    icon: "🤝",
    title: "Community Mobilisation",
    desc: "Work directly with communities to organise events, facilitate workshops, and build local networks.",
    skills: ["Community Work", "Events", "Facilitation", "Languages"],
  },
  {
    icon: "📊",
    title: "Research & Monitoring",
    desc: "Help us measure impact, collect data, and produce reports that sharpen our programming.",
    skills: ["Research", "Data Analysis", "Evaluation", "Writing"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Apply",
    desc: "Fill in the volunteer form below. Tell us who you are, where you are, and how you want to help.",
  },
  {
    step: "02",
    title: "Review",
    desc: "Our team reviews your application and matches you to a role and location that fits your skills.",
  },
  {
    step: "03",
    title: "Onboard",
    desc: "You receive an orientation pack, your Flux Aid field shirt, and an introduction to your team lead.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "You hit the ground — attending events, running sessions, or supporting field activities in your area.",
  },
];

const Volunteer = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    country: "",
    role: "",
    availability: "",
    motivation: "",
    skills: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real form submission logic — API call, Formspree, etc.
    console.log("Volunteer form submitted:", form);
    setSubmitted(true);
  };

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
        <div className="relative z-10 max-w-[700px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]" />
            <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3.5px] text-[#9A9A9A]">
              Get Involved
            </span>
          </div>
          <h1 className="font-display font-bold text-[#F5F5F5] text-[52px] lg:text-[80px] leading-[0.95] tracking-[-2px] mb-6">
            Give your
            <br />
            <em className="italic font-normal text-[#E8E0D0]">time</em> to
            Africa
          </h1>
          <p className="font-body font-light text-[15px] leading-[1.8] text-[#9A9A9A] max-w-[520px] mb-8">
            Volunteering with {ORG_NAME} means going where it matters — into
            communities, clinics, classrooms, and fields across Nigeria and
            Africa. We need people who are ready to show up.
          </p>
          <div className="flex items-center gap-4">
            <Button href="#apply" variant="primary">
              Apply Now
            </Button>
            <Button href="#roles" variant="ghost">
              See Roles
            </Button>
          </div>
        </div>
      </section>

      {/* ── FIELD SHIRT ──────────────────────── */}
      <section className="px-4 lg:px-16 py-16 border-b border-white/[0.07] bg-[#161616]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3px] text-[#9A9A9A] block mb-5">
              You'll Represent Us in the Field
            </span>
            <h2 className="font-display font-bold text-[#F5F5F5] text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.5px] mb-5">
              Wear the{" "}
              <em className="italic font-normal text-[#E8E0D0]">shirt.</em>
              <br />
              Be accountable.
            </h2>
            <p className="font-body font-light text-[14px] lg:text-[15px] leading-[1.85] text-[#9A9A9A] mb-4">
              Every {ORG_NAME} volunteer receives our official field shirt on
              onboarding. It is more than branding — it is a commitment.
              Communities know who we are because they can see us. That
              visibility comes with responsibility.
            </p>
            <p className="font-body font-light text-[14px] leading-[1.85] text-[#9A9A9A]">
              When you put on that shirt, you represent every person this
              organisation has ever served — and every person it is still trying
              to reach.
            </p>
          </div>

          {/* Shirt image */}
          <div
            className="w-full h-[300px] bg-[#1E1E1E] border border-white/[0.07] rounded-sm flex items-center justify-center overflow-hidden relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            {/* Replace with: <img src="/images/gallery/team-shirt.jpg" alt="Flux Aid volunteer shirt" className="w-full h-full object-contain" /> */}
            <div className="flex flex-col items-center gap-3 opacity-20">
              <span className="text-[64px]">👕</span>
              <span className="font-condensed font-semibold uppercase text-[9px] tracking-[2px] text-[#9A9A9A]">
                Volunteer shirt photo here
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER ROLES ──────────────────── */}
      <section
        id="roles"
        className="px-4 lg:px-16 py-20 lg:py-24 border-b border-white/[0.07]"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]" />
          <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3.5px] text-[#9A9A9A]">
            Where You Can Help
          </span>
        </div>
        <h2 className="font-display font-bold text-[#F5F5F5] text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.5px] mb-12">
          Volunteer <em className="italic font-normal text-[#E8E0D0]">Roles</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/[0.07] border border-white/[0.07]">
          {ROLES.map((role, i) => (
            <div
              key={role.title}
              className={`
                bg-[#161616] p-8 lg:p-10 flex flex-col gap-5
                hover:bg-[#1E1E1E] transition-colors duration-200
                ${i < 3 ? "border-b lg:border-b border-white/[0.07]" : ""}
              `}
            >
              <span className="text-[28px] grayscale brightness-[0.65]">
                {role.icon}
              </span>
              <div>
                <h4 className="font-display font-bold text-[#F5F5F5] text-[20px] leading-[1.2] mb-3">
                  {role.title}
                </h4>
                <p className="font-body font-light text-[13px] leading-[1.8] text-[#9A9A9A]">
                  {role.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.07]">
                {role.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-condensed font-semibold uppercase text-[8px] tracking-[1.5px] text-[#9A9A9A] border border-[#2A2A2A] px-3 py-[4px] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section className="px-4 lg:px-16 py-20 lg:py-24 bg-[#0F0F0F] border-b border-white/[0.07]">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]" />
          <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3.5px] text-[#9A9A9A]">
            How It Works
          </span>
        </div>
        <h2 className="font-display font-bold text-[#F5F5F5] text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.5px] mb-12">
          The <em className="italic font-normal text-[#E8E0D0]">Process</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[1px] bg-white/[0.07] border border-white/[0.07]">
          {PROCESS.map((step) => (
            <div
              key={step.step}
              className="bg-[#161616] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#1E1E1E] transition-colors duration-200"
            >
              <span className="font-condensed font-bold text-[10px] tracking-[3px] text-[#2A2A2A]">
                {step.step}
              </span>
              <h4 className="font-display font-bold text-[#F5F5F5] text-[22px] leading-[1.2]">
                {step.title}
              </h4>
              <p className="font-body font-light text-[13px] leading-[1.8] text-[#9A9A9A]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLICATION FORM ─────────────────── */}
      <section
        id="apply"
        className="px-4 lg:px-16 py-20 lg:py-24 border-b border-white/[0.07]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-[100px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]" />
              <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3.5px] text-[#9A9A9A]">
                Apply
              </span>
            </div>
            <h2 className="font-display font-bold text-[#F5F5F5] text-[36px] lg:text-[48px] leading-[1.05] tracking-[-0.5px] mb-6">
              Ready to{" "}
              <em className="italic font-normal text-[#E8E0D0]">join us?</em>
            </h2>
            <p className="font-body font-light text-[14px] leading-[1.85] text-[#9A9A9A] mb-6">
              Fill in the form and our team will be in touch within 5 working
              days to discuss your role, location, and availability.
            </p>
            <p className="font-body font-light text-[13px] leading-[1.75] text-[#9A9A9A]">
              No experience is too little. If you are willing, we will train
              you. What matters most is commitment and a genuine desire to
              serve.
            </p>
          </div>

          {/* Right — Form */}
          {submitted ? (
            <div className="bg-[#161616] border border-white/[0.07] p-12 flex flex-col items-center justify-center text-center min-h-[400px] gap-6">
              <span className="text-[48px] opacity-60">🙌🏾</span>
              <h3 className="font-display font-bold text-[#F5F5F5] text-[28px] leading-[1.2]">
                Application received
              </h3>
              <p className="font-body font-light text-[14px] leading-[1.8] text-[#9A9A9A] max-w-[360px]">
                Thank you for applying to volunteer with {ORG_NAME}. Our team
                will review your application and be in touch within 5 working
                days.
              </p>
              <Button href="/" variant="ghost">
                Back to Home
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                    placeholder="First name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              {/* Location + Country */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                    City / State *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                    className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                    placeholder="e.g. Lagos, Lagos State"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={form.country}
                    onChange={handleChange}
                    className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                    placeholder="e.g. Nigeria"
                  />
                </div>
              </div>

              {/* Role interest */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                  Area of Interest *
                </label>
                <select
                  name="role"
                  required
                  value={form.role}
                  onChange={handleChange}
                  className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none focus:border-[#9A9A9A] transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {ROLES.map((r) => (
                    <option key={r.title} value={r.title}>
                      {r.title}
                    </option>
                  ))}
                  <option value="General">
                    General — I'll help wherever needed
                  </option>
                </select>
              </div>

              {/* Availability */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                  Availability *
                </label>
                <select
                  name="availability"
                  required
                  value={form.availability}
                  onChange={handleChange}
                  className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none focus:border-[#9A9A9A] transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select availability
                  </option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends only</option>
                  <option value="flexible">Flexible</option>
                  <option value="fulltime">Full-time (dedicated period)</option>
                </select>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                  Relevant Skills or Experience
                </label>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200"
                  placeholder="e.g. Nursing, Writing, Community work"
                />
              </div>

              {/* Motivation */}
              <div className="flex flex-col gap-2">
                <label className="font-condensed font-bold uppercase text-[9px] tracking-[2.5px] text-[#9A9A9A]">
                  Why Do You Want to Volunteer? *
                </label>
                <textarea
                  name="motivation"
                  required
                  value={form.motivation}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#161616] border border-[#2A2A2A] font-body font-light text-[14px] text-[#F5F5F5] px-5 py-4 rounded-sm outline-none placeholder:text-[#3A3A3A] focus:border-[#9A9A9A] transition-colors duration-200 resize-none"
                  placeholder="Tell us what drives you and what you hope to contribute..."
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
                  Submit Application →
                </button>
                <p className="font-body font-light text-[11px] text-[#2A2A2A] text-center mt-3">
                  We will respond within 5 working days · No spam ever
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────── */}
      <section className="px-4 lg:px-16 py-16 bg-[#0F0F0F]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-[#F5F5F5] text-[28px] lg:text-[36px] leading-[1.1] tracking-[-0.5px] mb-3">
              Prefer to support us{" "}
              <em className="italic font-normal text-[#E8E0D0]">
                financially?
              </em>
            </h3>
            <p className="font-body font-light text-[14px] text-[#9A9A9A]">
              Every gift — big or small — goes directly to the communities we
              serve.
            </p>
          </div>
          <Button href="/donate" variant="ghost" className="flex-shrink-0">
            Donate Instead →
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
