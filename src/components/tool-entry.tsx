interface ToolEntryProps {
  index: number;
}

export default function ToolEntry({
  index,
}: ToolEntryProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          Tool #{index + 1}
        </h3>

        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
          AI Stack Entry
        </span>
      </div>

      <div className="grid gap-5">
        {/* Placeholder */}
        <div className="rounded-2xl border border-dashed border-white/10 p-6 text-center text-gray-500">
          Multi-tool form support will be
          implemented here.
        </div>
      </div>
    </div>
  );
}