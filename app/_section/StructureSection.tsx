"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { HeaderState } from "../types";

type Props = { state: HeaderState; update: <K extends keyof HeaderState>(key: K, value: HeaderState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return <SectionCard title="Structure" subtitle="Structure controls for native layout/page-structure generation."><Slider label="Nav items" value={state.navCount} min={1} max={10} step={1} onChange={(value) => update("navCount", value)} /></SectionCard>;
}
