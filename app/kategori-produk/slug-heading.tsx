"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { getSlugLabel } from "@/lib/slug-label";

export function SlugHeading() {
    const segment = useSelectedLayoutSegment();

    return <>{getSlugLabel(segment)}</>;
}
