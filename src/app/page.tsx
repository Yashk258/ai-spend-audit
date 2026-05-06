export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Stop Overpaying For AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Instantly audit your AI stack, uncover wasted spend,
          and discover smarter pricing options for your team.
        </p>

        <button className="mt-8 rounded-2xl bg-white px-6 py-3 text-black transition hover:scale-105">
          Run Free Audit
        </button>
      </section>
    </main>
  );
}