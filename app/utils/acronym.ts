export function acronym(str: string): string {
  return str
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
}
