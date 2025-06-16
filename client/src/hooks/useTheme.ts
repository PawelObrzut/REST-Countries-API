import { useState } from 'react';

export const useThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return { isDark, toggleTheme };
};