export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "james-whitfield",
    name: "James Whitfield",
    title: "Founder",
    company: "Clearpath Advisory",
    rating: 5,
    quote:
      "Working with Misbey Digitals changed how our entire business operates. They didn't just build us a website — they automated our intake process, connected our CRM, and trained an AI agent for client onboarding. We save 18 hours a week and our close rate went up because leads are better qualified before they ever talk to us.",
    initials: "JW",
    gradient: "from-[#00f0ff] to-[#3b82f6]",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    title: "CEO",
    company: "Orbit SaaS",
    rating: 5,
    quote:
      "Our website was costing us leads because it couldn't be found on AI search tools. Misbey implemented AEO across our content and within 6 weeks we were being cited in ChatGPT responses for our key use cases. That was worth more than any ad spend we've ever done.",
    initials: "PN",
    gradient: "from-[#3b82f6] to-[#10b981]",
  },
  {
    id: "marcus-delin",
    name: "Marcus Delin",
    title: "Operations Director",
    company: "Brightfield Logistics",
    rating: 5,
    quote:
      "We were skeptical about AI automation — we'd tried tools before that were too complex to maintain. Misbey built something clean, documented it completely, and trained our team. It just runs. No babysitting required. This is what real engineering looks like.",
    initials: "MD",
    gradient: "from-[#10b981] to-[#f59e0b]",
  },
];
