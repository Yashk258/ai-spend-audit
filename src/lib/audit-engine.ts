export interface AuditResult {
  recommendation: string;
  monthlySavings: number;
  yearlySavings: number;
  reason: string;
  riskLevel: "Low" | "Medium" | "High";
}

export function generateAudit(
  tool: string,
  plan: string,
  teamSize: number
): AuditResult {
  /*
    ChatGPT Logic
  */
  if (
    tool === "ChatGPT" &&
    plan === "Team" &&
    teamSize <= 2
  ) {
    return {
      recommendation:
        "Switch to ChatGPT Plus",
      monthlySavings: 20,
      yearlySavings: 240,
      riskLevel: "Medium",
      reason:
        "Small teams may not fully benefit from ChatGPT Team collaboration features.",
    };
  }

  /*
    Claude Logic
  */
  if (
    tool === "Claude" &&
    plan === "Team" &&
    teamSize <= 3
  ) {
    return {
      recommendation:
        "Consider Claude Pro instead",
      monthlySavings: 30,
      yearlySavings: 360,
      riskLevel: "Medium",
      reason:
        "Claude Team pricing may be unnecessary for smaller research or writing workflows.",
    };
  }

  /*
    Cursor Logic
  */
  if (
    tool === "Cursor" &&
    plan === "Business" &&
    teamSize <= 5
  ) {
    return {
      recommendation:
        "Downgrade to Cursor Pro",
      monthlySavings: 50,
      yearlySavings: 600,
      riskLevel: "High",
      reason:
        "Cursor Business is generally better suited for larger engineering teams.",
    };
  }

  /*
    Copilot Logic
  */
  if (
    tool === "Copilot" &&
    plan === "Business" &&
    teamSize <= 3
  ) {
    return {
      recommendation:
        "Switch to Copilot Individual",
      monthlySavings: 30,
      yearlySavings: 360,
      riskLevel: "Medium",
      reason:
        "Business collaboration features may not justify the additional cost for smaller teams.",
    };
  }

  /*
    Gemini Logic
  */
  if (
    tool === "Gemini" &&
    plan === "Ultra"
  ) {
    return {
      recommendation:
        "Review Gemini Ultra usage",
      monthlySavings: 10,
      yearlySavings: 120,
      riskLevel: "Low",
      reason:
        "Gemini Ultra may be excessive unless advanced multimodal workflows are heavily used.",
    };
  }

  /*
    Default
  */
  return {
    recommendation:
      "Current setup looks optimized",
    monthlySavings: 0,
    yearlySavings: 0,
    riskLevel: "Low",
    reason:
      "No significant savings opportunities detected based on the current inputs.",
  };
}