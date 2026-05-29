// pages/Volunteer.jsx

import { useState } from "react"
import { ORG_NAME } from "../constants"

const ROLES = [
  { icon: "⚖️", color: "#2F8AC9", title: "Advocacy & Legal Support",   desc: "Help us champion human rights, draft advocacy materials, and support legal awareness campaigns in communities.",          skills: ["Law", "Policy", "Writing", "Research"]              },
  { icon: "🏥", color: "#6C609E", title: "Health & Medical Outreach",   desc: "Join our mobile health units providing free consultations, screenings, and health education in underserved areas.",         skills: ["Medicine", "Nursing", "Public Health", "Pharmacy"]   },
  { icon: "💻", color: "#2F8AC9", title: "Digital & Tech Skills",       desc: "Train youth in coding, design, and digital marketing through our Digital Skills Africa programme.",                          skills: ["Coding", "Design", "Marketing", "Data"]              },
  { icon: "📢", color: "#6C609E", title: "Communications & Media",      desc: "Help us tell our stories — through photography, writing, social media, and community radio.",                                skills: ["Photography", "Writing", "Social Media", "Video"]    },
  { icon: "🤝", color: "#2F8AC9", title: "Community Mobilisation",      desc: "Work directly with communities to organise events, facilitate workshops, and build local networks.",                          skills: ["Community Work", "Events", "Facilitation", "Languages"] },
  { icon: "📊", color: "#6C609E", title: "Research & Monitoring",       desc: "Help us measure impact, collect data, and produce reports that sharpen our programming.",                                    skills: ["Research", "Data Analysis", "Evaluation", "Writing"] },
]

const PROCESS = [
  { step: "01", color: "#2F8AC9", title: "Apply",   desc: "Fill in the volunteer form below. Tell us who you are, where you are, and how you want to help."              },
  { step: "02", color: "#6C609E", title: "Review",  desc: "Our team reviews your application and matches you to a role and location that fits your skills."               },
  { step: "03", color: "#2F8AC9", title: "Onboard", desc: "You receive an orientation pack, your Flux Aid field shirt, and an introduction to your team lead."            },
  { step: "04", color: "#6C609E", title: "Deploy",  desc: "You hit the ground — attending events, running sessions, or supporting field activities in your area."         },
]

const Volunteer = () => {
  const [form, setForm]           = useState({ firstName: "", lastName: "", email: "", phone: "", location: "", country: "", role: "", availability: "", skills: "", motivation: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); console.log("Volunteer:", form); setSubmitted(true) }

  const inp = {
    width: "100%", padding: "14px 16px",
    background: "#F8F9FB", border: "1.5px solid #E5E7EB",
    borderRadius: "8px", outline: "none",
    fontFamily: "'Barlow', sans-serif", fontSize: "14px",
    color: "#0D1117", boxSizing: "border-box", transition: "border-color 0.2s",
  }

  const lbl = {
    fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px",
    fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase",
    color: "#9CA3AF", display: "block", marginBottom: "6px",
  }

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────── */}
      <section style={{ background: "#0F1E35", padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px) clamp(56px,7vw,80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(47,138,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-80px", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(108,96,158,0.22) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "200px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />

        {/* Africa watermark */}
        <svg style={{ position: "absolute", top: "50%", right: "80px", transform: "translateY(-50%)", width: "340px", opacity: 0.04, pointerEvents: "none" }} viewBox="0 0 400 500" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 15 C240 15 290 35 330 80 C370 125 380 185 365 240 C350 295 320 335 300 375 C280 415 265 455 240 480 C220 498 200 498 180 490 C160 482 140 460 120 430 C100 400 85 365 65 325 C45 285 20 240 18 190 C16 140 35 90 75 55 C115 20 160 15 200 15Z" />
        </svg>

        <div style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2F8AC9", display: "inline-block" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "3.5px", textTransform: "uppercase", color: "#2F8AC9" }}>Get Involved</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px,8vw,88px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-2px", color: "#F0F6FF", marginBottom: "22px" }}>
            Give your<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}>time</em> to Africa
          </h1>

          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85, color: "rgba(200,214,232,0.6)", maxWidth: "520px", marginBottom: "36px" }}>
            Volunteering with {ORG_NAME} means going where it matters — into communities, clinics, classrooms, and fields across Nigeria and Africa. We need people who are ready to show up.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#apply" style={{ background: "#2F8AC9", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", padding: "14px 32px", borderRadius: "4px", textDecoration: "none" }}>
              Apply Now
            </a>
            <a href="#roles" style={{ background: "transparent", color: "rgba(200,214,232,0.7)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", padding: "13px 24px", border: "1px solid rgba(200,214,232,0.2)", borderRadius: "4px", textDecoration: "none" }}>
              See Roles
            </a>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "#0F1E35", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0,0 C480,50 960,50 1440,0 L1440,50 L0,50 Z" fill="#F8F9FB" />
        </svg>
      </div>

      {/* ── FIELD SHIRT ──────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(40px,6vw,72px) clamp(20px,5vw,80px)", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px,5vw,60px)", alignItems: "center" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6C609E", display: "inline-block" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#6C609E" }}>You'll Represent Us in the Field</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#0D1117", marginBottom: "20px" }}>
              Wear the{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6C609E" }}>shirt.</em><br />
              Be accountable.
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85, color: "#6B7280", marginBottom: "16px" }}>
              Every {ORG_NAME} volunteer receives our official field shirt on onboarding. It is more than branding — it is a commitment. Communities know who we are because they can see us. That visibility comes with responsibility.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", fontWeight: 300, lineHeight: 1.85, color: "#6B7280" }}>
              When you put on that shirt, you represent every person this organisation has ever served — and every person it is still trying to reach.
            </p>
          </div>

          {/* Shirt image */}
          <div style={{ width: "100%", minHeight: "300px", background: "#0F1E35", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            {/*
              ── DROP SHIRT PHOTO HERE ──────────────────
              Replace with:
              <img src="/images/gallery/team-shirt.jpg"
                   alt="Flux Aid volunteer shirt"
                   style={{ width:"100%", height:"100%", objectFit:"contain" }} />
              ────────────────────────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", opacity: 0.2, position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "72px" }}>👕</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#9CA3AF" }}>Volunteer shirt photo here</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROLES ────────────────────────────── */}
      <section id="roles" style={{ background: "#F8F9FB", padding: "clamp(48px,7vw,80px) clamp(20px,5vw,80px)", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2F8AC9", display: "inline-block" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "3.5px", textTransform: "uppercase", color: "#2F8AC9" }}>Where You Can Help</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#0D1117", marginBottom: "40px" }}>
            Volunteer <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6C609E" }}>Roles</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {ROLES.map((role, i) => (
              <div
                key={role.title}
                style={{
                  background: i % 3 === 1 ? "#0F1E35" : "#FFFFFF",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: i % 3 === 1 ? "0 8px 32px rgba(0,0,0,0.15)" : "0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
                  transition: "transform 0.22s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${role.color}, ${role.color === "#2F8AC9" ? "#6C609E" : "#2F8AC9"})`, borderRadius: "16px 16px 0 0" }} />

                {/* Glow on dark */}
                {i % 3 === 1 && <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "160px", height: "160px", background: `radial-gradient(circle, ${role.color}20 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />}

                {/* Icon box */}
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: `${role.color}15`, border: `1px solid ${role.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
                  {role.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,2vw,21px)", fontWeight: 700, color: i % 3 === 1 ? "#F0F6FF" : "#0D1117", lineHeight: 1.2, marginBottom: "8px" }}>
                    {role.title}
                  </h4>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.8, color: i % 3 === 1 ? "rgba(200,214,232,0.55)" : "#6B7280", margin: 0 }}>
                    {role.desc}
                  </p>
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "14px", borderTop: `1px solid ${i % 3 === 1 ? "rgba(255,255,255,0.07)" : "#F3F4F6"}` }}>
                  {role.skills.map(skill => (
                    <span key={skill} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: role.color, background: `${role.color}12`, border: `1px solid ${role.color}25`, padding: "4px 10px", borderRadius: "4px" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px,7vw,80px) clamp(20px,5vw,80px)", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6C609E", display: "inline-block" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "3.5px", textTransform: "uppercase", color: "#6C609E" }}>How It Works</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#0D1117", marginBottom: "40px" }}>
            The <em style={{ fontStyle: "italic", fontWeight: 400, color: "#2F8AC9" }}>Process</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {PROCESS.map((step, i) => (
              <div
                key={step.step}
                style={{
                  background: i % 2 === 0 ? "#0F1E35" : "#F8F9FB",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: i % 2 === 0 ? "0 8px 32px rgba(0,0,0,0.12)" : "0 2px 10px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${step.color}, ${step.color === "#2F8AC9" ? "#6C609E" : "#2F8AC9"})`, borderRadius: "16px 16px 0 0" }} />
                {i % 2 === 0 && <div style={{ position: "absolute", bottom: "-30px", right: "-30px", width: "130px", height: "130px", background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none" }} />}

                {/* Big faded step number */}
                <span style={{ position: "absolute", bottom: "-10px", right: "8px", fontFamily: "'Cormorant Garamond', serif", fontSize: "100px", fontWeight: 700, lineHeight: 1, color: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", pointerEvents: "none", userSelect: "none" }}>
                  {step.step}
                </span>

                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: step.color }}>
                  {step.step}
                </span>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,2.5vw,26px)", fontWeight: 700, color: i % 2 === 0 ? "#F0F6FF" : "#0D1117", lineHeight: 1.2, position: "relative", zIndex: 1 }}>
                  {step.title}
                </h4>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.8, color: i % 2 === 0 ? "rgba(200,214,232,0.55)" : "#6B7280", position: "relative", zIndex: 1 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ─────────────────── */}
      <section id="apply" style={{ background: "#F8F9FB", padding: "clamp(48px,7vw,80px) clamp(20px,5vw,80px)", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "clamp(260px,28vw,380px) 1fr", gap: "clamp(32px,5vw,64px)", alignItems: "start" }}>

          {/* Left sticky */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2F8AC9", display: "inline-block" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "3.5px", textTransform: "uppercase", color: "#2F8AC9" }}>Apply</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.5px", color: "#0D1117", marginBottom: "18px" }}>
              Ready to{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#6C609E" }}>join us?</em>
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.85, color: "#6B7280", marginBottom: "16px" }}>
              Fill in the form and our team will be in touch within 5 working days to discuss your role, location, and availability.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.75, color: "#9CA3AF" }}>
              No experience is too little. If you are willing, we will train you. What matters most is commitment and a genuine desire to serve.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "20px", padding: "64px 48px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: "400px", gap: "20px", borderTop: "3px solid #2F8AC9" }}>
              <span style={{ fontSize: "56px", opacity: 0.7 }}>🙌🏾</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 700, color: "#0D1117" }}>Application received</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#6B7280", maxWidth: "360px" }}>
                Thank you for applying to volunteer with {ORG_NAME}. Our team will review your application and be in touch within 5 working days.
              </p>
              <a href="/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#6C609E", border: "1.5px solid rgba(108,96,158,0.3)", background: "transparent", padding: "11px 22px", borderRadius: "6px", textDecoration: "none" }}>
                Back to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "20px", padding: "clamp(24px,4vw,44px)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #2F8AC9, #6C609E)", borderRadius: "20px 20px 0 0" }} />

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, color: "#0D1117", marginBottom: "6px" }}>Volunteer Application</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9CA3AF", marginBottom: "28px" }}>All starred fields are required.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                {/* Name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div><label style={lbl}>First Name *</label><input type="text" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="First name" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} /></div>
                  <div><label style={lbl}>Last Name *</label><input type="text" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Last name" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} /></div>
                </div>

                {/* Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div><label style={lbl}>Email *</label><input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} /></div>
                  <div><label style={lbl}>Phone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} /></div>
                </div>

                {/* Location + Country */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div><label style={lbl}>City / State *</label><input type="text" name="location" required value={form.location} onChange={handleChange} placeholder="e.g. Lagos, Lagos State" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} /></div>
                  <div><label style={lbl}>Country *</label><input type="text" name="country" required value={form.country} onChange={handleChange} placeholder="e.g. Nigeria" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} /></div>
                </div>

                {/* Role */}
                <div>
                  <label style={lbl}>Area of Interest *</label>
                  <select name="role" required value={form.role} onChange={handleChange} style={{ ...inp, appearance: "none", cursor: "pointer" }} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"}>
                    <option value="" disabled>Select a role</option>
                    {ROLES.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                    <option value="General">General — I'll help wherever needed</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label style={lbl}>Availability *</label>
                  <select name="availability" required value={form.availability} onChange={handleChange} style={{ ...inp, appearance: "none", cursor: "pointer" }} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"}>
                    <option value="" disabled>Select availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends only</option>
                    <option value="flexible">Flexible</option>
                    <option value="fulltime">Full-time (dedicated period)</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label style={lbl}>Relevant Skills</label>
                  <input type="text" name="skills" value={form.skills} onChange={handleChange} placeholder="e.g. Nursing, Writing, Community work" style={inp} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} />
                </div>

                {/* Motivation */}
                <div>
                  <label style={lbl}>Why Do You Want to Volunteer? *</label>
                  <textarea name="motivation" required rows={5} value={form.motivation} onChange={handleChange} placeholder="Tell us what drives you and what you hope to contribute..." style={{ ...inp, resize: "none" }} onFocus={e => e.target.style.borderColor="#2F8AC9"} onBlur={e => e.target.style.borderColor="#E5E7EB"} />
                </div>

                <button type="submit" style={{ width: "100%", padding: "15px", background: "#2F8AC9", color: "white", border: "none", borderRadius: "8px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", cursor: "pointer", marginTop: "4px" }}>
                  Submit Application →
                </button>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "11px", color: "#9CA3AF", textAlign: "center", margin: 0 }}>
                  We will respond within 5 working days · No spam ever
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────── */}
      <section style={{ background: "#0F1E35", padding: "clamp(40px,5vw,64px) clamp(20px,5vw,80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", position: "relative", zIndex: 1 }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px,4vw,40px)", fontWeight: 700, color: "#F0F6FF", lineHeight: 1.1, marginBottom: "8px" }}>
              Prefer to support us{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}>financially?</em>
            </h3>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(200,214,232,0.55)", margin: 0 }}>
              Every gift — big or small — goes directly to the communities we serve.
            </p>
          </div>
          <a href="/donate" style={{ background: "transparent", color: "rgba(200,214,232,0.8)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", padding: "13px 28px", border: "1px solid rgba(200,214,232,0.25)", borderRadius: "4px", textDecoration: "none", flexShrink: 0 }}>
            Donate Instead →
          </a>
        </div>
      </section>
    </div>
  )
}

export default Volunteer