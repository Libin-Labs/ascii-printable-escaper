export function escapeNonAscii(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return Array.from(value, (char) => {
    const code = char.codePointAt(0)!;
    return code >= 0x20 && code <= 0x7e ? char : '\\u{' + code.toString(16) + '}';
  }).join('');
}
