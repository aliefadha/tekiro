function capitalizeWords(text: string): string {
    return text
        .split(" ")
        .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
        .join(" ");
}

export function getSlugLabel(slug: string | null): string {
    if (!slug) return "";
    const normalized = slug.toLowerCase();
    const withSpaces = normalized.replace(/-/g, " ");
    return capitalizeWords(withSpaces);
}
