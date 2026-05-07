"use client";

import { useState } from "react";
import { tools } from "@/data/tools";

export default function SpendForm() {
  const [selectedTool, setSelectedTool] = useState("ChatGPT");
  const [selectedPlan, setSelectedPlan] = useState(
    tools.ChatGPT[0]
  );

  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("Coding");

  const handleToolChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const tool = e.target.value;

    setSelectedTool(tool);

    // Reset plan automatically when tool changes
    setSelectedPlan(
      tools[tool as keyof typeof tools][0]
    );
  };

  const handleSubmit = () => {
    const auditData = {
      tool: selectedTool,
      plan: selectedPlan,
      monthlySpend,
      teamSize,
      useCase,
    };

    console.log(auditData);

    // Future:
    // Save to database
    // Run audit engine
    // Redirect to results page
  };

  return (
    <div className="mx-auto mt-24 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white">
          Audit Your AI Spend
        </h2>

        <p className="mt-3 text-gray-400">
          Analyze your current AI tooling costs and
          uncover smarter pricing opportunities.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Tool Selection */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            AI Tool
          </label>

          <select
            value={selectedTool}
            onChange={handleToolChange}
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
          >
            {Object.keys(tools).map((tool) => (
              <option key={tool} value={tool}>
                {tool}
              </option>
            ))}
          </select>
        </div>

        {/* Plan Selection */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Current Plan
          </label>

          <select
            value={selectedPlan}
            onChange={(e) =>
              setSelectedPlan(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
          >
            {tools[
              selectedTool as keyof typeof tools
            ].map((plan) => (
              <option key={plan} value={plan}>
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
            value={monthlySpend}
            onChange={(e) =>
              setMonthlySpend(e.target.value)
            }
            placeholder="200"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-white/30"
          />
        </div>

        {/* Team Size */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Team Size
          </label>

          <input
            type="number"
            value={teamSize}
            onChange={(e) =>
              setTeamSize(e.target.value)
            }
            placeholder="5"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-white/30"
          />
        </div>

        {/* Use Case */}
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Primary Use Case
          </label>

          <select
            value={useCase}
            onChange={(e) =>
              setUseCase(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/30"
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

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-2 rounded-2xl bg-white px-6 py-4 font-medium text-black transition hover:scale-[1.01] hover:bg-gray-200"
        >
          Generate Audit
        </button>
      </div>
    </div>
  );
}