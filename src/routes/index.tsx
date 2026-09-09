import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

type PickName = "TronPick" | "LitePick" | "DogePick";

function Index() {
  const [selected, setSelected] = useState<PickName | null>(null);

  return (
    <div className="relative flex min-h-screen items-start justify-center bg-black px-4 py-6">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.5' opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <main className="relative z-10 w-full max-w-sm space-y-4">
        {selected ? (
          <StatsView name={selected} onBack={() => setSelected(null)} />
        ) : (
          <>
            {/* ALPHA header — full width, thin frame */}
            <div className="flex w-full items-center justify-center rounded-3xl border border-white/20 bg-surface px-6 py-5 shadow-lg">
              <span className="text-2xl font-bold tracking-widest text-white">
                ALPHA
              </span>
            </div>

            {/* Balance board — same width as ALPHA, thin frame */}
            <div className="flex w-full flex-col items-center rounded-3xl border border-white/20 bg-surface px-6 py-6 shadow-lg">
              <span className="text-xl font-bold tracking-wide text-white">
                XEVIL BALANS
              </span>
              <span className="mt-1 text-2xl font-semibold text-white">
                0.00000
              </span>
            </div>

            {/* Action buttons — original layout, uniform heights */}
            <div className="grid grid-cols-2 gap-3">
              <ActionButton color="blue" onClick={() => setSelected("TronPick")}>
                TronPick
              </ActionButton>
              <ActionButton color="blue" onClick={() => setSelected("LitePick")}>
                LitePick
              </ActionButton>
              <ActionButton
                color="blue"
                fullWidth
                onClick={() => setSelected("DogePick")}
              >
                DogePick
              </ActionButton>
              <ActionButton color="red" fullWidth>
                Yordam
              </ActionButton>
              <ActionButton color="green">Sozlamalar</ActionButton>
              <ActionButton color="green">Yangilash</ActionButton>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function StatsView({ name, onBack }: { name: PickName; onBack: () => void }) {
  return (
    <>
      {/* Title — same style as ALPHA card */}
      <div className="flex w-full items-center justify-center rounded-3xl border border-white/20 bg-surface px-6 py-5 shadow-lg">
        <span className="text-2xl font-bold tracking-widest text-white">
          {name}
        </span>
      </div>

      {/* Akkaunt, Keyingi olish, Balans — yonma-yon 3 ustun, label yuqorida value tagida */}
      <div className="flex w-full flex-col rounded-3xl border border-white/20 bg-surface px-3 py-5 shadow-lg">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] font-bold tracking-wide text-white/70">
              AKKAUNT
            </span>
            <span className="mt-1 text-base font-semibold text-white">—</span>
          </div>
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] font-bold tracking-wide text-white/70">
              KEYINGI OLISH
            </span>
            <span className="mt-1 text-base font-semibold text-white">
              --:--
            </span>
          </div>
          <div className="flex flex-col items-center px-1">
            <span className="text-[10px] font-bold tracking-wide text-white/70">
              BALANS
            </span>
            <span className="mt-1 text-base font-semibold text-white">
              0.00000
            </span>
          </div>
        </div>
      </div>

      {/* Tugmalar */}
      <div className="grid grid-cols-2 gap-3">
        <ActionButton color="red" fullWidth icon={<PlusIcon />}>
          Akkaunt qo&apos;shish
        </ActionButton>
        <ActionButton color="green">Ishga tushirish</ActionButton>
        <ActionButton color="red">To&apos;xtatish</ActionButton>
        <ActionButton color="green" fullWidth icon={<BackIcon />} onClick={onBack}>
          Orqaga
        </ActionButton>
      </div>
    </>
  );
}

function ActionButton({
  color,
  children,
  fullWidth = false,
  onClick,
  icon,
}: {
  color: "blue" | "red" | "green";
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  const colorClasses = {
    blue: "bg-blue-button hover:bg-blue-button/90",
    red: "bg-red-button hover:bg-red-button/90",
    green: "bg-green-button hover:bg-green-button/90",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl ${colorClasses[color]} px-4 h-14 text-lg font-semibold text-white shadow-lg transition-colors active:scale-[0.98] ${fullWidth ? "col-span-2" : ""}`}
    >
      {icon && (
        <span className="mr-2 flex h-5 w-5 items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
