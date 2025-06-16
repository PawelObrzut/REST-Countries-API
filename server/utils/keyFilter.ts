export const keyFilter = (obj: Record<string, any>, keys: string[]): Record<string, any> => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}