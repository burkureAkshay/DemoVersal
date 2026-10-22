import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-8 py-24 sm:items-start">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <span className="text-zinc-400">+</span>
          <Image
            src="/vercel.svg"
            alt="Vercel logo"
            width={20}
            height={18}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <p className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-600 dark:border-white/[.14] dark:text-zinc-400">
            Sample Next.js project
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Ready to deploy on Vercel
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is a TypeScript App Router starter with Tailwind CSS. Push the
            repo to GitHub, import it in Vercel, and ship.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy on Vercel
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="/api/hello"
          >
            Check API route
          </a>
        </div>
      </main>
    </div>
  );
}
