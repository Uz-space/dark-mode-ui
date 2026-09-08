import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpha Dashboard" },
      { name: "description", content: "Alpha game dashboard" },
      { property: "og:title", content: "Alpha Dashboard" },
      { property: "og:description", content: "Alpha game dashboard" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative flex min-h-screen items-start justify-center bg-black px-4 py-6">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <main className="relative z-10 w-full max-w-sm space-y-4">
        {/* ALPHA header — full width */}
        <div className="flex w-full items-center justify-center rounded-3xl bg-surface px-6 py-5 shadow-lg">
          <span className="text-2xl font-bold tracking-widest text-white">
            ALPHA
          </span>
        </div>

        {/* Score board — same width as ALPHA */}
        <div className="w-full overflow-hidden rounded-3xl bg-surface shadow-lg">
          <div className="grid grid-cols-2 divide-x divide-white/10">
            {/* Team 1 */}
            <div className="flex flex-col items-center py-4">
              <span className="text-3xl font-bold text-white">1</span>
              <div className="mt-3 flex gap-1.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Orb key={`blue-${i}`} color="blue" />
                ))}
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center py-4">
              <span className="text-3xl font-bold text-white">2</span>
              <div className="mt-3 flex gap-1.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Orb key={`red-${i}`} color="red" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons — original layout, uniform heights */}
        <div className="grid grid-cols-2 gap-3">
          <ActionButton color="blue">TronPick</ActionButton>
          <ActionButton color="blue">LitePick</ActionButton>
          <ActionButton color="blue" fullWidth>DogePick</ActionButton>
          <ActionButton color="red" icon={<SosIcon />} fullWidth>Yordam</ActionButton>
          <ActionButton color="green" icon={<GearIcon />}>Sozlamalar</ActionButton>
          <ActionButton color="green" icon={<RefreshIcon />}>Yangilash</ActionButton>
        </div>
      </main>
    </div>
  );
}

function Orb({ color }: { color: "blue" | "red" }) {
  const gradient =
    color === "blue"
      ? "from-blue-400 to-blue-700"
      : "from-red-400 to-red-700";

  return (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-b ${gradient} shadow-inner ring-1 ring-white/20`}
    />
  );
}

function ActionButton({
  color,
  icon,
  children,
}: {
  color: "blue" | "red" | "green";
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const colorClasses = {
    blue: "bg-blue-button hover:bg-blue-button/90",
    red: "bg-red-button hover:bg-red-button/90",
    green: "bg-green-button hover:bg-green-button/90",
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-2xl ${colorClasses[color]} px-4 py-5 text-lg font-semibold text-white shadow-lg transition-colors active:scale-[0.98]`}
    >
      {icon ? <span className="flex w-6 justify-center">{icon}</span> : null}
      <span>{children}</span>
      {icon ? <span className="w-6" aria-hidden="true" /> : null}
    </button>
  );
}

function SosIcon() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded bg-red-800 text-xs font-bold text-white">
      SOS
    </span>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 5v7h7" />
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 19v-7h7" />
    </svg>
  );
}
