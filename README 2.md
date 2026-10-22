# Demo Versel

Sample [Next.js](https://nextjs.org) app (App Router, TypeScript, Tailwind CSS) set up to deploy on [Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `app/page.tsx` to change the home page. The sample API route lives at `app/api/hello/route.ts` (`/api/hello`).

## Deploy on Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave the defaults (Framework: Next.js, Build Command: `next build`, Output: default).
4. Click **Deploy**.

You can also deploy from the CLI after installing [Vercel CLI](https://vercel.com/docs/cli):

```bash
npx vercel
```

Use `npx vercel --prod` for a production deployment.
