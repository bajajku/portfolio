export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  context: string;
  decisions: { title: string; text: string }[];
  boundary: string;
  links: { label: string; href: string }[];
};

export const studies: CaseStudy[] = [
  {
    id: "coda",
    title: "Coda",
    category: "Independent project · Product & systems",
    context:
      "Coda brings a shared 3D space and AI-generated recaps to real-time meetings. I built the collaboration interface with React, Three.js and LiveKit WebRTC, and a Python agent engine for turning meeting inputs into useful artifacts.",
    decisions: [
      {
        title: "Separate the streams",
        text: "Audio, vision and summaries run through separate asynchronous workers with bounded queues. Overload is an explicit error condition rather than an unbounded backlog.",
      },
      {
        title: "Keep blocking work off the event loop",
        text: "Perceptual hashes filter near-duplicate frames before vision-model calls. Image hashing and inference move to worker threads.",
      },
      {
        title: "Plan for interruption",
        text: "The pipeline chains primary, secondary and fallback summarizers, and uses a timed shutdown before cancelling remaining work.",
      },
    ],
    boundary:
      "Independent project. Explore the implementation and recorded walkthrough below.",
    links: [
      {
        label: "Watch the demo",
        href: "https://www.youtube.com/watch?v=3CKrapzaJ-k",
      },
      { label: "Explore the source", href: "https://github.com/bajajku/Coda" },
    ],
  },
  {
    id: "automed",
    title: "AutoMed",
    category: "PointClickCare · Applied research internship",
    context:
      "Medical named-entity recognition needs both coverage and precision. At PointClickCare, I owned AutoMed from design document to production: an agent that proposes, tests and verifies extraction policies in parallel.",
    decisions: [
      {
        title: "Policy testing and verification",
        text: "The agent workflow separates proposing a policy from testing and verifying it, allowing policy candidates to be investigated in parallel.",
      },
      {
        title: "Precision and recall",
        text: "The reported result improved recall from 0.72 to 0.94 and precision from 0.81 to 0.95, without fine-tuning.",
      },
      {
        title: "Evaluation and annotation quality",
        text: "Alongside AutoMed, I built a human-versus-LLM judgment framework. Iterative chunking and re-labeling improved entity-extraction F1 from 0.78 to 0.89 and reduced annotation inconsistencies by 40%.",
      },
    ],
    boundary:
      "A summary of my internship contribution. The evaluation-framework result is separate from AutoMed’s precision/recall result. Employer source code and internal data are not included.",
    links: [],
  },
  {
    id: "vac",
    title: "VAC",
    category: "Sheridan Centre for Applied AI · Applied research",
    context:
      "VAC is a trauma-informed veteran-support chatbot project. My work at Sheridan included retrieval, model adaptation and evaluation for applied AI systems.",
    decisions: [
      {
        title: "Retrieve with more than one signal",
        text: "The chatbot combines BM25 and dense retrieval. The reviewed implementation also includes query expansion, deduplication and ranking fallbacks.",
      },
      {
        title: "Build a repeatable evaluation loop",
        text: "The LLM jury runs model calls in parallel, captures per-model errors and aggregates structured scores, reasoning and pass/fail judgments.",
      },
      {
        title: "Adapt and serve models",
        text: "I used LoRA to fine-tune models for VAC and the Oakville Public Library assistant. Across Sheridan research projects, I hosted Qwen and Llama with vLLM and optimized inference serving.",
      },
    ],
    boundary:
      "A research application for veteran support. The engineering work described here is distinct from clinical validation.",
    links: [
      { label: "Explore the source", href: "https://github.com/bajajku/VAC" },
    ],
  },
];

export const explorations = [
  {
    number: "01",
    status: "Building",
    title: "GPT from scratch",
    text: "Building a GPT from scratch to understand transformer architecture and training.",
    keywords: "Transformers · First principles",
  },
  {
    number: "02",
    status: "Experimenting",
    title: "Inference engineering",
    text: "Reading inference engineering books and blogs, and experimenting with vLLM to deepen my understanding of model serving.",
    keywords: "vLLM · Latency · Throughput",
  },
  {
    number: "03",
    status: "Reading",
    title: "Agentic systems",
    text: "Reading Reflexion and work on agent swarms: how feedback and coordination shape agentic systems.",
    keywords: "Reflection · Multi-agent systems",
  },
  {
    number: "04",
    status: "Exploring",
    title: "AI safety & interpretability",
    text: "Exploring AI safety and mechanistic interpretability, with an interest in understanding how models arrive at their behavior.",
    keywords: "AI safety · Mechanistic interpretability",
  },
];
