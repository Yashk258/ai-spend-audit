import { tools } from "@/data/tools";

interface ToolEntryProps {
  index: number;

  entry: {
    id: number;
    tool: string;
    plan: string;
    monthlySpend: string;
    teamSize: string;
    useCase: string;
  };

  onChange: (
    id: number,
    field: string,
    value: string
  ) => void;
}

export default function ToolEntry({
  index,
  entry,
  onChange,
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
        {/* Tool */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            AI Tool
          </label>

          <select
            value={entry.tool}
            onChange={(e) =>
              onChange(
                entry.id,
                "tool",
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            {Object.keys(tools).map((tool) => (
              <option
                key={tool}
                value={tool}
              >
                {tool}
              </option>
            ))}
          </select>
        </div>

        {/* Plan */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Plan
          </label>

          <select
            value={entry.plan}
            onChange={(e) =>
              onChange(
                entry.id,
                "plan",
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            {tools[
              entry.tool as keyof typeof tools
            ].map((plan) => (
              <option
                key={plan}
                value={plan}
              >
                {plan}
              </option>
            ))}
          </select>
        </div>

        {/* Monthly Spend */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            value={entry.monthlySpend}
            onChange={(e) =>
              onChange(
                entry.id,
                "monthlySpend",
                e.target.value
              )
            }
            placeholder="200"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white"
          />
        </div>

        {/* Team Size */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Team Size
          </label>

          <input
            type="number"
            value={entry.teamSize}
            onChange={(e) =>
              onChange(
                entry.id,
                "teamSize",
                e.target.value
              )
            }
            placeholder="5"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white"
          />
        </div>

        {/* Use Case */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Use Case
          </label>

          <select
            value={entry.useCase}
            onChange={(e) =>
              onChange(
                entry.id,
                "useCase",
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option value="Coding">
              Coding
            </option>

            <option value="Writing">
              Writing
            </option>

            <option value="Research">
              Research
            </option>

            <option value="Data Analysis">
              Data Analysis
            </option>

            <option value="Mixed">
              Mixed
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}