import { useContext } from 'react';
import { ThemeContext } from '../components/context/ThemeContext'; // <-- Impor dari file yang sama

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;