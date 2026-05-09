"use client";

import { useEffect, useState } from "react";
import { tools } from "@/data/tools";
import ToolEntry from "@/components/tool-entry";
import {
  generateAudit,
  AuditResult,
} from "@/lib/audit-engine";

export default function SpendForm() {
  const [selectedTool, setSelectedTool] =
    useState("ChatGPT");

  const [selectedPlan, setSelectedPlan] =
    useState(tools.ChatGPT[0]);

  const [monthlySpend, setMonthlySpend] =
    useState("");

  const [teamSize, setTeamSize] =
    useState("");

  const [useCase, setUseCase] =
    useState("Coding");

  const [auditResult, setAuditResult] =
    useState<AuditResult | null>(null);

  /*
    Load saved form values
  */
  useEffect(() => {
    const savedData =
      localStorage.getItem("audit-form");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      setSelectedTool(
        parsedData.selectedTool || "ChatGPT"
      );

      setSelectedPlan(
        parsedData.selectedPlan ||
          tools.ChatGPT[0]
      );

      setMonthlySpend(
        parsedData.monthlySpend || ""
      );

      setTeamSize(
        parsedData.teamSize || ""
      );

      setUseCase(
        parsedData.useCase || "Coding"
      );
    }
  }, []);

  /*
    Persist form values
  */
  useEffect(() => {
    localStorage.setItem(
      "audit-form",
      JSON.stringify({
        selectedTool,
        selectedPlan,
        monthlySpend,
        teamSize,
        useCase,
      })
    );
  }, [
    selectedTool,
    selectedPlan,
    monthlySpend,
    teamSize,
    useCase,
  ]);

  /*
    Handle tool change
  */
  const handleToolChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const tool = e.target.value;

    setSelectedTool(tool);

    setSelectedPlan(
      tools[tool as keyof typeof tools][0]
    );
  };

  /*
    Generate audit
  */
  const handleGenerateAudit = () => {
    const result = generateAudit(
      selectedTool,
      selectedPlan,
      Number(teamSize)
    );

    setAuditResult(result);
  };

  return (
    <div className="mx-auto mt-24 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white">
          Audit Your AI Spend
        </h2>

        <p className="mt-3 text-gray-400">
          Analyze your current AI tooling
          costs and uncover smarter
          pricing opportunities.
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-6">
        {/* Tool */}
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

        {/* Plan */}
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
            placeholder="2"
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

        {/* Info Box */}
        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-sm text-yellow-300">
          This audit is currently optimized
          for small and medium startup
          teams.
        </div>

        {/* Add Tool Button */}
        <button className="rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white transition hover:border-white/20">
          + Add Another Tool
        </button>

        {/* Submit */}
        <button
          onClick={handleGenerateAudit}
          className="rounded-2xl bg-white px-6 py-4 font-medium text-black transition hover:scale-[1.01] hover:bg-gray-200"
        >
          Generate Audit
        </button>
      </div>

      {/* Empty State */}
      {!auditResult && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            Ready to analyze your AI stack
          </h3>

          <p className="mt-3 text-gray-400">
            Generate your audit to uncover
            unnecessary AI tooling costs
            and optimization opportunities
            for your team.
          </p>
        </div>
      )}
        <div className="mt-10">
      <ToolEntry index={0} />
    </div>
      {/* Results */}
      {auditResult && (
        <>
          {/* Summary Header */}
          <div className="mt-10 mb-6 rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Estimated Optimization Impact
            </p>

            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-5xl font-bold text-white">
                  $
                  {
                    auditResult.yearlySavings
                  }
                </h2>

                <p className="mt-2 text-gray-400">
                  Potential yearly savings
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 px-5 py-4">
                <p className="text-sm text-gray-400">
                  Optimization Status
                </p>

                <h3 className="mt-1 text-lg font-semibold text-green-400">
                  {
                    auditResult.riskLevel
                  }{" "}
                  Potential
                </h3>
              </div>
            </div>
          </div>

          {/* Main Results */}
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="text-sm uppercase tracking-wide text-green-400">
              Recommendation
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {
                auditResult.recommendation
              }
            </h3>

            {/* Risk Badge */}
            <div className="mt-4">
              <span
                className={`rounded-full px-4 py-2 text-sm ${
                  auditResult.riskLevel ===
                  "High"
                    ? "bg-red-500/10 text-red-400"
                    : auditResult.riskLevel ===
                      "Medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-blue-500/10 text-blue-400"
                }`}
              >
                {
                  auditResult.riskLevel
                }{" "}
                Cost Optimization
                Potential
              </span>
            </div>

            {/* Opportunity Badge */}
            {auditResult.monthlySavings >
            0 ? (
              <span className="mt-4 inline-flex rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                Savings Opportunity
                Detected
              </span>
            ) : (
              <span className="mt-4 inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                Your current setup looks
                efficient
              </span>
            )}

            {/* Savings Cards */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {/* Monthly */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Monthly Savings
                </p>

                <h4 className="mt-3 text-4xl font-bold text-white">
                  $
                  {
                    auditResult.monthlySavings
                  }
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Estimated reduction in
                  recurring AI tooling
                  costs.
                </p>
              </div>

              {/* Yearly */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm uppercase tracking-wide text-gray-400">
                  Annual Savings
                </p>

                <h4 className="mt-3 text-4xl font-bold text-white">
                  $
                  {
                    auditResult.yearlySavings
                  }
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Potential yearly
                  optimization opportunity.
                </p>
              </div>
            </div>

            {/* ROI Message */}
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Optimizing AI
              infrastructure costs can
              significantly extend
              startup runway and improve
              operational efficiency.
            </p>

            {/* Audit Confidence */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Audit Confidence
              </p>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-green-400" />
                </div>

                <span className="text-sm font-medium text-white">
                  82%
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Recommendation confidence
                is based on pricing
                comparisons, estimated
                feature utilization, and
                startup team sizing
                patterns.
              </p>
            </div>

            {/* Reason */}
            <p className="mt-6 leading-relaxed text-gray-300">
              {auditResult.reason}
            </p>
          </div>
        </>
      )}
    </div>
  );
}