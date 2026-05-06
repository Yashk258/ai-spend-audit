export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          AuditAI
        </h1>

        <button className="rounded-xl bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105">
          Run Audit
        </button>
      </div>
    </nav>
  );
}