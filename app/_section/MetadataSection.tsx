"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Slider from "@/components/shared/input/Slider";
import type { HeaderState } from "../types";

type Props = { state: HeaderState; update: <K extends keyof HeaderState>(key: K, value: HeaderState[K]) => void };

export default function MetadataSection({ state, update }: Props) {
  return <SectionCard title="Metadata" subtitle="Metadata controls for native layout/page-structure generation."><Input label="id" value={state.id} onChange={(value) => update("id", value)} />
<div className="rounded-2xl border p-4 text-sm" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>Exports as a native &lt;header&gt; with nested &lt;nav&gt;. No ARIA role override is needed.</div>
<Slider label="tabIndex" value={state.tabIndex} min={0} max={4} step={1} onChange={(value) => update("tabIndex", value)} /></SectionCard>;
}
