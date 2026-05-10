export interface AuditResult {
  recommendation: string;

  monthlySavings: number;

  yearlySavings: number;

  riskLevel: "Low" | "Medium" | "High";

  reason: string;
}

export function generateAudit(
  tool: string,
  plan: string,
  teamSize: number,
  monthlySpend?: number
): AuditResult {
  /*
    Default values
  */
  let recommendation =
    "Current setup looks optimized";

  let monthlySavings = 0;

  let riskLevel:
    | "Low"
    | "Medium"
    | "High" = "Low";

  let reason =
    "Your current AI tooling setup appears cost efficient.";

  /*
    Spend-based optimization logic
  */
  if (monthlySpend && monthlySpend > 5000) {
    monthlySavings = Math.round(
      monthlySpend * 0.18
    );

    riskLevel = "High";

    recommendation =
      "Large optimization opportunity detected";

    reason =
      "High recurring AI spend suggests potential plan overlap, underutilized subscriptions, or enterprise pricing inefficiencies.";
  } else if (
    monthlySpend &&
    monthlySpend > 1000
  ) {
    monthlySavings = Math.round(
      monthlySpend * 0.12
    );

    riskLevel = "Medium";

    recommendation =
      "Consider consolidating AI tooling";

    reason =
      "Your team may benefit from reducing duplicate AI subscriptions and optimizing usage tiers.";
  } else if (
    monthlySpend &&
    monthlySpend > 200
  ) {
    monthlySavings = Math.round(
      monthlySpend * 0.08
    );

    riskLevel = "Medium";

    recommendation =
      "Moderate savings opportunity found";

    reason =
      "Some AI subscriptions may be oversized for your current team usage.";
  }

  /*
    Tool-specific overrides
  */
  if (
    tool === "Cursor" &&
    plan === "Business" &&
    teamSize < 10
  ) {
    recommendation =
      "Downgrade to Cursor Pro";

    monthlySavings += 50;

    riskLevel = "High";

    reason =
      "Cursor Business is generally better suited for larger engineering teams.";
  }

  if (
    tool === "ChatGPT" &&
    plan === "Team" &&
    teamSize < 5
  ) {
    recommendation =
      "Switch to ChatGPT Plus";

    monthlySavings += 20;

    riskLevel = "Medium";

    reason =
      "Smaller teams may not fully utilize ChatGPT Team collaboration features.";
  }

  if (
    tool === "Claude" &&
    plan === "Team" &&
    teamSize < 5
  ) {
    recommendation =
      "Consider Claude Pro instead";

    monthlySavings += 30;

    riskLevel = "Medium";

    reason =
      "Claude Team pricing may be unnecessary for smaller research or writing workflows.";
  }

  return {
    recommendation,

    monthlySavings,

    yearlySavings:
      monthlySavings * 12,

    riskLevel,

    reason,
  };
}