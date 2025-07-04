
# v-cloud

🚀 Simple cloud hosting for video, image, and audio — with short embed link.

## Features

- 📦 Upload video, image, or audio
- 🔗 Auto generate short embed link `/e/[slug]`
- 📁 Stored locally in `/public/uploads`
- 📊 Upload progress bar animation
- 🎨 Clean blue-white UI (like cloudkuimages.guru)
- 🪄 Built with Next.js App Router + Prisma + SQLite

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Generate Prisma client

```bash
npx prisma generate
```

### 3. Start dev server

```bash
npm run dev
```

## Environment Variables

Create `.env` file from template:

```
cp .env.example .env
```

## Deploy to Vercel

- Push to GitHub
- Connect to Vercel
- Make sure to set `DATABASE_URL` in Vercel env

> ⚠️ Uploads are stored locally in Vercel's read-only filesystem — you may need Google Drive or S3 integration for production.

---

Made with 💙 by v-cloud.
