// Portfolio project data.
// To add a new project, append an object to this array and drop its
// screenshot(s) into public/media/portfolio/<slug>-N.png (or .jpg).
// `images` is ordered — the first entry is used as the card thumbnail
// and the detail-page hero; any additional entries render as a gallery.

export const PORTFOLIO_PROJECTS = [
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
];
