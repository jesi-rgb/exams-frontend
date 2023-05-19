export function replacer(match: string) {
  return `<span class="text-primary font-bold">${match}</span>`;
}
export function highlightTerm(text: string, term: string) {
  return text.replaceAll(new RegExp(`\\W${term}\\W`, 'gi'), replacer);
}
