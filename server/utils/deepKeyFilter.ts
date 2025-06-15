export const deepKeyFilter = (obj: Record<string, any>, keys: string[]): Record<string, any> => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key]) => keys.includes(key))
      .map(([key, value]) => [
        key,
        typeof value === 'object' && !Array.isArray(value) && value !== null
          ? deepKeyFilter(value, keys)
          : value
      ])
  );
}