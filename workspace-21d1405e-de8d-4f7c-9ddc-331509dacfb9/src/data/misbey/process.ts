export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We audit your current systems, workflows, and digital presence. Map your bottlenecks. Understand your goals. No assumptions — every recommendation starts from real data about how your business actually runs today.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We design a custom roadmap — which AI tools, automations, and web systems will move the needle fastest for your business. You see the full plan, the timeline, and the expected ROI before any code is written.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Every interface, flow, and touchpoint is designed to convert. Premium, on-brand, and built for trust. We obsess over the details that make the difference between a visitor and a customer.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build on modern, scalable stacks — fast websites, reliable automations, and clean integrations. Containerized, documented, and ready to grow with you from day one.",
  },
  {
    number: "05",
    title: "Automation",
    description:
      "We wire your systems together — CRM, calendar, email, AI agents — into one seamless operating layer. Your tools stop being separate silos and start working as a single intelligent system.",
  },
  {
    number: "06",
    title: "Launch & Scale",
    description:
      "Go live. Monitor. Optimize. We don't disappear after launch — we stay in the system with you, iterating based on real usage data and continuously improving what we built together.",
  },
];
