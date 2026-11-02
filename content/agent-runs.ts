// Scripted sample data for the hero console. All names and figures are fictional
// and the console labels them as a sample, so nothing here implies a client deployment.

export type RunStepKind = "Trigger" | "Reasoning" | "Tool" | "Proposed";

export type RunStep = {
  kind: RunStepKind;
  text: string;
  result?: string;
};

export type AgentRun = {
  id: string;
  label: string;
  steps: RunStep[];
  approver: string;
  approveLabel: string;
  approved: string;
  rejected: string;
};

export const agentRuns: AgentRun[] = [
  {
    id: "procurement",
    label: "Purchase request",
    steps: [
      { kind: "Trigger", text: "Purchase request PR-2041: 40 laptops for Operations." },
      {
        kind: "Reasoning",
        text: "The amount is above the $25,000 limit, so finance must sign off. Checking budget and suppliers first.",
      },
      { kind: "Tool", text: "budget.lookup(IT hardware)", result: "$61,200 left this quarter" },
      { kind: "Tool", text: "suppliers.search(laptops)", result: "3 approved, best quote $44,800" },
      { kind: "Proposed", text: "Raise a purchase order for $44,800 with the lowest quote." },
    ],
    approver: "Finance approval required",
    approveLabel: "Approve order",
    approved: "Purchase order PO-7713 raised. Operations notified.",
    rejected: "Held. Request returned to Operations with a note.",
  },
  {
    id: "support",
    label: "Support ticket",
    steps: [
      { kind: "Trigger", text: "Ticket #8812: customer reports being charged twice." },
      {
        kind: "Reasoning",
        text: "A duplicate charge needs confirming against payment records before any refund.",
      },
      {
        kind: "Tool",
        text: "payments.find(customer)",
        result: "2 charges of $129, 40 seconds apart",
      },
      { kind: "Tool", text: "policy.lookup(refunds)", result: "Refunds over $100 need approval" },
      { kind: "Proposed", text: "Refund one $129 charge and send the customer an apology." },
    ],
    approver: "Support lead approval required",
    approveLabel: "Approve refund",
    approved: "Refund issued. Reply sent to the customer. Ticket closed.",
    rejected: "Held. Ticket assigned to a support agent to review.",
  },
  {
    id: "invoice",
    label: "Invoice check",
    steps: [
      { kind: "Trigger", text: "Invoice INV-3390 received from a supplier by email." },
      {
        kind: "Reasoning",
        text: "Extract the totals, then match the invoice against the order and the delivery note.",
      },
      { kind: "Tool", text: "documents.extract(INV-3390)", result: "Total $18,450, PO-6021" },
      {
        kind: "Tool",
        text: "orders.match(PO-6021)",
        result: "Order total $17,950, $500 difference",
      },
      { kind: "Proposed", text: "Hold payment and ask the supplier to explain the difference." },
    ],
    approver: "Accounts approval required",
    approveLabel: "Approve hold",
    approved: "Payment held. Query sent to the supplier.",
    rejected: "Returned to Accounts to review by hand.",
  },
];
