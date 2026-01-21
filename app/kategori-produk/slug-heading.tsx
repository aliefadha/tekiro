"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { useCategories } from "@/lib/queries";
import { getSlugLabel } from "@/lib/slug-label";

interface SlugHeadingProps {
    width?: string;
    className?: string;
}

export function SlugHeading({ width = "200px", className = "" }: SlugHeadingProps) {
    const segment = useSelectedLayoutSegment();
    const { isLoading: isCategoriesLoading } = useCategories();
    const label = getSlugLabel(segment);

    const isInitialLoading = isCategoriesLoading && !label;

    if (isInitialLoading) {
        return (
            <div
                className={`animate-pulse bg-gray-300 rounded ${className}`}
                style={{ width, height: "1.5em" }}
            />
        );
    }

    return <span className={className}>{label}</span>;
}
