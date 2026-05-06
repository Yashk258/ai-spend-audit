import Navbar from "@/components/navbar";
import FeatureCard from "@/components/feature-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
            AI COST OPTIMIZATION PLATFORM
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Stop Overpaying
            <br />
            For AI Tools
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Instantly audit your AI stack, uncover wasted spend,
            and discover better pricing options for your team.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 text-lg font-medium text-black transition hover:scale-105">
            Run Free Audit
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <FeatureCard
          title="AI Spend Analysis"
          description="Analyze your AI subscriptions and uncover unnecessary costs instantly."
        />

        <FeatureCard
          title="Optimization Recommendations"
          description="Receive actionable plan downgrades and cheaper alternative suggestions."
        />

        <FeatureCard
          title="Team Benchmarking"
          description="Compare your AI spending efficiency against similar startup teams."
        />
      </section>
    </main>
  );
}