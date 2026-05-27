// pages/BlogPost.jsx

import { useParams } from "react-router-dom";
import Chip from "../components/Chip";
import Button from "../components/Button";

// Placeholder posts — replace with CMS/API call using slug later
const POSTS = [
  {
    slug: "why-flux-aid-was-founded",
    category: "About Us",
    title: "Why Flux Aid Initiative was founded — and what drives us every day",
    excerpt:
      "The story behind Flux Aid Initiative — where we came from, what we stand for, and why we believe Africa's transformation must come from within.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 7, 2026",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Flux Aid Initiative was not born in a boardroom. It was born from an observation — a quiet, persistent frustration with a continent full of extraordinary people whose work goes unrecognised, whose communities are underserved, and whose potential is consistently underestimated.",
      },
      {
        type: "heading",
        text: "The Problem We Saw",
      },
      {
        type: "paragraph",
        text: "Across Nigeria and Africa, we kept seeing the same pattern: men and women doing remarkable work in their communities — advocating for rights, building businesses, raising children with integrity, serving without applause — and receiving nothing in return. No recognition. No support. No amplification.",
      },
      {
        type: "paragraph",
        text: "At the same time, we saw institutions struggling to reach the communities they were meant to serve. Policies that sounded good on paper but failed in practice. Aid that arrived without context. Development work that left when the funding did.",
      },
      {
        type: "quote",
        text: "Hard work, integrity and transparency are the hallmark of a successful human achievement. Men and women who are selfless and dedicated to their responsibilities are never forgotten in the annals of history.",
      },
      {
        type: "heading",
        text: "What We Decided to Do",
      },
      {
        type: "paragraph",
        text: "We decided to build something different. An organisation rooted in community — not in foreign funding cycles or donor agendas. An organisation that celebrates the people already doing the work, while building the infrastructure to support those who have been left behind.",
      },
      {
        type: "paragraph",
        text: "Flux Aid Initiative was established on five core values: enduring achievement, selfless service to humanity, integrity, patriotism, and good conduct. These are not aspirational. They are operational — embedded in every decision we make and every person we recognise.",
      },
      {
        type: "heading",
        text: "What Drives Us Today",
      },
      {
        type: "paragraph",
        text: "Every day, our teams go into communities across Nigeria, Ghana, Kenya, Uganda, Senegal, and beyond. They run clinics, deliver books, facilitate workshops, plant trees, and tell stories that would otherwise go untold. This is what drives us — the daily, unglamorous, essential work of building a better Africa from the ground up.",
      },
      {
        type: "paragraph",
        text: "We are not here to save Africa. Africa does not need saving. It needs its own people — empowered, recognised, and supported — to do what they have always been capable of doing.",
      },
    ],
    related: [
      {
        slug: "danga-award-explained",
        title: "The DANGA Award — recognising Nigeria's unsung heroes",
        category: "Awards",
      },
      {
        slug: "what-african-youth-need",
        title: "What African youth really need from NGOs in 2026",
        category: "Opinion",
      },
    ],
  },
  {
    slug: "danga-award-explained",
    category: "Awards",
    title: "The DANGA Award — recognising Nigeria's unsung heroes",
    excerpt:
      "What is the Distinguished Ambassador of Change National Gold Award, who qualifies, and why it matters for national development.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 5, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Nigeria is full of people doing extraordinary things with very little recognition. The Distinguished Ambassador of Change National Gold Award — DANGA — exists to change that.",
      },
      {
        type: "heading",
        text: "What is the DANGA Award?",
      },
      {
        type: "paragraph",
        text: "DANGA is a private sector national award project dedicated to men and women of outstanding qualities whose contribution to national development is viable and verifiable. It is not a government award. It is not sponsored by a political party. It exists purely to celebrate excellence — in any field, at any level.",
      },
      {
        type: "quote",
        text: "They move from one higher position to another and their achievements have no boundary.",
      },
      {
        type: "heading",
        text: "Who Qualifies?",
      },
      {
        type: "paragraph",
        text: "The award recognises Nigerians who have demonstrated enduring achievement in their field, selfless service to humanity, integrity in public and private conduct, patriotism, and consistently good behaviour. These are people whose positive antecedents are still alive — whose work continues to shape communities even when no one is watching.",
      },
      {
        type: "heading",
        text: "Why It Matters",
      },
      {
        type: "paragraph",
        text: "When we celebrate excellence, we set a standard. We tell younger generations that integrity is rewarded — that hard work is seen — that service to humanity is one of the highest callings a person can answer. That is the purpose of DANGA. Not just to give an award, but to shift the culture.",
      },
    ],
    related: [
      {
        slug: "why-flux-aid-was-founded",
        title: "Why Flux Aid Initiative was founded",
        category: "About Us",
      },
      {
        slug: "integrity-in-leadership",
        title: "Integrity in leadership — why it still matters",
        category: "Opinion",
      },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  // 404 state
  if (!post) {
    return (
      <div className="bg-[#080808] min-h-screen flex flex-col items-center justify-center text-center px-6">
        <span className="text-[64px] opacity-20 mb-6 select-none">📄</span>
        <h1 className="font-display font-bold text-[#F5F5F5] text-[40px] mb-4">
          Post not found
        </h1>
        <p className="font-body font-light text-[15px] text-[#9A9A9A] mb-8">
          This post doesn't exist or may have been moved.
        </p>
        <Button href="/blog" variant="primary">
          Back to Blog
        </Button>
      </div>
    );
  }

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

        {/* Back link */}
        <a
          href="/blog"
          className="relative z-10 inline-flex items-center gap-2 font-condensed font-semibold uppercase text-[10px] tracking-[2.5px] text-[#9A9A9A] hover:text-[#C8C8C8] transition-colors duration-200 no-underline mb-10"
        >
          ← Back to Blog
        </a>

        <div className="relative z-10 max-w-[780px]">
          <Chip label={post.category} className="mb-6" />

          <h1 className="font-display font-bold text-[#F5F5F5] text-[36px] lg:text-[60px] leading-[1.0] tracking-[-1px] mb-8">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 pb-8 border-b border-white/[0.07]">
            <div className="w-10 h-10 rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center font-condensed font-semibold text-[12px] text-[#C8C8C8]">
              {post.initials}
            </div>
            <div>
              <div className="font-body font-medium text-[14px] text-[#C8C8C8]">
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body font-light text-[12px] text-[#9A9A9A]">
                  {post.date}
                </span>
                <span className="w-[3px] h-[3px] rounded-full bg-[#2A2A2A]" />
                <span className="font-body font-light text-[12px] text-[#9A9A9A]">
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────── */}
      <section className="px-4 lg:px-16 py-16 lg:py-24 border-b border-white/[0.07]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">
          {/* Article body */}
          <article className="max-w-[680px]">
            {/* Excerpt / lead */}
            <p className="font-display italic font-normal text-[20px] lg:text-[22px] leading-[1.7] text-[#C8C8C8] mb-10 pb-10 border-b border-white/[0.07]">
              {post.excerpt}
            </p>

            {/* Content blocks */}
            <div className="flex flex-col gap-6">
              {post.content.map((block, i) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={i}
                      className="font-body font-light text-[15px] lg:text-[16px] leading-[1.9] text-[#9A9A9A]"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="font-display font-bold text-[#F5F5F5] text-[26px] lg:text-[32px] leading-[1.2] tracking-[-0.3px] mt-4"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-[3px] border-[#E8E0D0] pl-7 py-2 my-4"
                    >
                      <p className="font-display italic font-normal text-[20px] leading-[1.65] text-[#E8E0D0]">
                        "{block.text}"
                      </p>
                    </blockquote>
                  );
                }

                if (block.type === "image") {
                  return (
                    <div
                      key={i}
                      className="w-full h-[280px] bg-[#161616] border border-white/[0.07] flex items-center justify-center my-4 rounded-sm overflow-hidden"
                    >
                      {block.src ? (
                        <img
                          src={block.src}
                          alt={block.alt || ""}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-body font-light text-[13px] text-[#2A2A2A] uppercase tracking-widest">
                          Image placeholder
                        </span>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-[100px]">
            {/* Share */}
            <div className="bg-[#161616] border border-white/[0.07] p-6">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-5">
                Share This Post
              </h5>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Share on 𝕏", href: "#" },
                  { label: "Share on LinkedIn", href: "#" },
                  { label: "Copy Link", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="
                      font-condensed font-semibold uppercase text-[9px] tracking-[2px]
                      text-[#9A9A9A] border border-[#2A2A2A] px-4 py-3
                      hover:border-[#9A9A9A] hover:text-[#C8C8C8]
                      transition-all duration-200 no-underline text-center rounded-sm
                    "
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* About the org */}
            <div className="bg-[#161616] border border-white/[0.07] p-6">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-4">
                About Flux Aid
              </h5>
              <p className="font-body font-light text-[12px] leading-[1.8] text-[#9A9A9A] mb-5">
                Flux Aid Initiative is a non-governmental organisation dedicated
                to advocacy, empowerment, and the upliftment of vulnerable
                communities across Nigeria and Africa.
              </p>
              <Button
                href="/about"
                variant="ghost"
                className="w-full justify-center text-[9px] py-3"
              >
                Learn More
              </Button>
            </div>

            {/* Donate nudge */}
            <div className="bg-[#1E1E1E] border border-white/[0.07] p-6">
              <h5 className="font-condensed font-bold uppercase text-[9px] tracking-[3px] text-[#9A9A9A] mb-3">
                Support Our Work
              </h5>
              <p className="font-body font-light text-[12px] leading-[1.7] text-[#9A9A9A] mb-5">
                Every gift goes directly to the communities we serve.
              </p>
              <Button
                href="/donate"
                variant="primary"
                className="w-full justify-center"
              >
                Donate Now
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED POSTS ────────────────────── */}
      {post.related && post.related.length > 0 && (
        <section className="px-4 lg:px-16 py-16 lg:py-20 border-b border-white/[0.07]">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]" />
            <span className="font-condensed font-semibold uppercase text-[10px] tracking-[3.5px] text-[#9A9A9A]">
              Related Posts
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/[0.07] border border-white/[0.07]">
            {post.related.map((rel) => (
              <a
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="
                  bg-[#161616] p-8 flex flex-col gap-4
                  no-underline group
                  hover:bg-[#1E1E1E] transition-colors duration-200
                "
              >
                <Chip label={rel.category} />
                <h3 className="font-display font-bold text-[#F5F5F5] text-[20px] lg:text-[24px] leading-[1.3] tracking-[-0.2px] group-hover:text-[#E8E0D0] transition-colors duration-200">
                  {rel.title}
                </h3>
                <span className="font-condensed font-semibold uppercase text-[10px] tracking-[2px] text-[#9A9A9A] group-hover:text-[#F5F5F5] transition-colors duration-200 mt-auto">
                  Read →
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────── */}
      <section className="px-4 lg:px-16 py-16 bg-[#0F0F0F]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-[#F5F5F5] text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.5px] mb-3">
              Enjoyed this{" "}
              <em className="italic font-normal text-[#E8E0D0]">read?</em>
            </h3>
            <p className="font-body font-light text-[14px] text-[#9A9A9A]">
              Support our work or explore more stories from the field.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Button href="/donate" variant="primary">
              Donate Now
            </Button>
            <Button href="/blog" variant="ghost">
              More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
