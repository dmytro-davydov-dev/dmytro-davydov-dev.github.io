// Portfolio project data.
// To add a new project, append an object to this array and drop its
// screenshot(s) into public/media/portfolio/<slug>-N.png (or .jpg).
// `images` is ordered — the first entry is used as the card thumbnail
// and the detail-page hero; any additional entries render as a gallery.

export const PORTFOLIO_PROJECTS = [
  {
    slug: 'ai-defense-platform',
    title: 'AI Defense Platform',
    tagline: 'Architecture-first reference platform for secure, event-driven computer-vision mission workflows.',
    images: ['/media/portfolio/ai-defense-platform.png'],
    deployedUrl: null,
    repoUrl: 'https://github.com/dmytro-davydov-dev/ai-defense-platform',
    origin: null,
    tags: ['NestJS', 'FastAPI', 'Python', 'Vite', 'PostgreSQL', 'PostGIS', 'Redpanda/Kafka', 'MinIO', 'Nx Monorepo', 'Computer Vision', 'Docker'],
    description: [
      'AI Defense Platform is an architecture-first reference implementation for building secure, observable, event-driven computer-vision systems, deliberately scoped to defensive and analytical workflows: training simulation, logistics optimization, infrastructure inspection, search-and-rescue, and situational-awareness monitoring.',
      'The repository doubles as an architecture knowledge base and a working Nx monorepo — a NestJS API, a Python/FastAPI vision service, and a Vite web client, wired together over Redpanda (Kafka-compatible) with PostgreSQL/PostGIS for geospatial mission data and MinIO for object storage, backed by a docs vault of C4 diagrams and ADRs documenting every architectural decision.',
      "The Mission Workspace (pictured) is where an operator uploads drone footage and telemetry for a mission, submits it for processing, and reviews detections and tracked objects — toggling between a live inference overlay and the pipeline's pre-annotated output, with an event timeline and audit trail for every action taken on the mission.",
      "It's explicitly scoped away from classified data, illegally obtained material, and privacy-invasive datasets: the goal is a rigorous, production-minded reference architecture, not an operational system.",
    ],
  },
  {
    slug: 'medical-timeline-ai',
    title: 'Medical Timeline AI',
    tagline: 'Turns a spreadsheet of medical records into a visual case timeline.',
    images: ['/media/portfolio/medical-timeline-ai.png'],
    deployedUrl: 'https://timeline-builder-web.vercel.app',
    repoUrl: 'https://github.com/dmytro-davydov-dev/timeline-builder',
    origin: 'Swans Applied AI Hackathon · Sintra, July 2026',
    tags: ['AI/LLM', 'React', 'Vite', 'NestJS', 'TypeScript', 'TypeORM', 'Legal Tech', 'Data Visualization'],
    description: [
      "Medical Timeline AI turns a structured Excel export of a personal-injury case's medical encounters into an interactive, visual treatment timeline.",
      "It's built for attorneys who need a jury, client, or insurance adjuster to feel a case's medical history in seconds, rather than read a table of eighty rows.",
      'The idea originated at the Swans Applied AI Hackathon (Sintra, July 2026) and this app continues that concept as a working MVP.',
    ],
  },
  {
    slug: 'docs-processor',
    title: 'Docs Processor',
    tagline: 'AI-assisted contract review pipeline: OCR, LLM field extraction, and RAG search over your documents.',
    images: [
      '/media/portfolio/docs-processor-1.png',
      '/media/portfolio/docs-processor-2.png',
    ],
    deployedUrl: null,
    repoUrl: 'https://github.com/dmytro-davydov-dev/ocr-n8n-docs-manager',
    origin: null,
    tags: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Celery', 'n8n', 'PostgreSQL', 'Redis', 'OCR', 'RAG', 'Docker'],
    description: [
      'Docs Processor (Contract Review MVP) is an AI-assisted contract review application built as a reference implementation of a production-minded document-processing architecture: React, FastAPI, Celery, n8n, PostgreSQL, Redis, OCR, and LLMs.',
      'A user uploads a PDF, and n8n orchestrates a Celery task chain that rasterizes and OCRs each page, sends the extracted text to an LLM to pull structured fields (parties, dates, monetary values, key clauses, obligations), and chunks and embeds the text for retrieval — all tracked through an explicit document/review state machine with an append-only audit trail.',
      "Reviewers work through documents side by side with the source PDF, OCR text, and extracted fields, moving each one through draft, review, and approval. Once approved, a document's content becomes searchable via hybrid (lexical + vector) retrieval, and a chat endpoint answers questions over the approved set with citations back to the source chunks.",
      'A watchdog workflow polls for stuck or failed documents and auto-retries them before surfacing anything that needs a human — the kind of resilience detail that matters once a pipeline like this runs unattended.',
    ],
  },
  {
    slug: 'flowterra',
    title: 'Flowterra',
    tagline: 'Multi-tenant SaaS for tracking people and assets in physical spaces via BLE tags and MQTT gateways.',
    images: ['/media/portfolio/flowterra.png'],
    deployedUrl: 'https://flowterra-dev.web.app/dashboard',
    repoUrl: 'https://github.com/dmytro-davydov-dev/ft-api',
    origin: null,
    tags: ['React', 'TypeScript', 'Vite', 'Flask', 'Firebase', 'Firestore', 'BigQuery', 'MQTT', 'GCP Cloud Run', 'Terraform', 'Multi-tenant SaaS'],
    description: [
      'Flowterra is a simplified, cost-optimised multi-tenant SaaS platform for tracking people and assets in physical spaces, re-targeted at MVP / small-production pilot scale rather than full enterprise deployment.',
      'BLE tags and MQTT-native gateways report location and presence, and the platform turns that stream into occupancy analytics, configurable geofencing with entry/exit alerts, and site infrastructure management — scoped to one vertical at MVP (construction, healthcare, or education) with per-tenant isolation enforced end to end via a customerId claim on every request.',
      "The architecture is GCP-only and serverless-first: a React 19 + Vite SPA on Firebase Hosting talks to a Flask API on Cloud Run; gateways publish over MQTT to a single EMQX broker, whose Pub/Sub bridge feeds a Cloud Function that writes live state to Firestore and time-partitioned analytics to BigQuery; Terraform manages dev and prod as separate GCP projects through GitHub Actions CI/CD.",
      "It's under active MVP development — live dashboards, a reports section, self-service site management, and a Potree-powered 3D viewer for drone site captures are built out phase by phase, with each architectural decision recorded as an ADR alongside the code.",
    ],
  },
];
