export function displayAsBulletList(items: string[]): string {
    return items
        .map((x) => x?.trim())
        .filter(Boolean)
        .join(' · ');
}