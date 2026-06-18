export function displayAsBulletList(items: string[]): string {
    return items.filter((x) => x?.trim()).join(' · ');
}