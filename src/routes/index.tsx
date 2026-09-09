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

      {/* Akkaunt, Keyingi olish, Balans — bitta table/karta ichida */}
      <div className="flex w-full flex-col rounded-3xl border border-white/20 bg-surface px-6 py-5 shadow-lg">
        <div className="flex items-center justify-between py-1">
          <span className="text-lg font-bold tracking-wide text-white">
            AKKAUNT
          </span>
          <span className="text-xl font-semibold text-white">—</span>
        </div>
        <div className="my-2 h-px w-full bg-white/10" />
        <div className="flex items-center justify-between py-1">
          <span className="text-lg font-bold tracking-wide text-white">
            KEYINGI OLISH
          </span>
          <span className="text-xl font-semibold text-white">--:--</span>
        </div>
        <div className="my-2 h-px w-full bg-white/10" />
        <div className="flex items-center justify-between py-1">
          <span className="text-lg font-bold tracking-wide text-white">
            BALANS
          </span>
          <span className="text-xl font-semibold text-white">0.00000</span>
        </div>
      </div>

      {/* Orqaga */}
      <div className="grid grid-cols-1 gap-3">
        <ActionButton color="red" fullWidth onClick={onBack}>
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
}: {
  color: "blue" | "red" | "green";
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  const colorClasses = {
    blue: "bg-blue-button hover:bg-blue-button/90",
    red: "bg-red-button hover:bg-red-button/90",
    green: "bg-green-button hover:bg-green-button/90",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-xl ${colorClasses[color]} px-4 py-3.5 text-lg font-semibold text-white shadow-lg transition-colors active:scale-[0.98] ${fullWidth ? "col-span-2" : ""}`}
    >
      <span>{children}</span>
    </button>
  );
}
