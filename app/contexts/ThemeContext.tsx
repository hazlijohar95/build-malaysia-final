import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('light');

  // Initialize theme based on system preference and localStorage
  useEffect(() => {
    const initializeTheme = () => {
      // Check if we're in the browser
      if (typeof window === 'undefined') return;

      try {
        // First, check localStorage for saved preference
        const savedTheme = localStorage.getItem('build-malaysia-theme') as Theme;
        
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
          setThemeState(savedTheme);
          applyTheme(savedTheme);
        } else {
          // If no saved preference, use system preference
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const systemTheme: Theme = systemPrefersDark ? 'dark' : 'light';
          setThemeState(systemTheme);
          applyTheme(systemTheme);
        }
      } catch (error) {
        console.warn('Failed to initialize theme:', error);
        // Fallback to light mode
        setThemeState('light');
        applyTheme('light');
      }
    };

    initializeTheme();

    // Listen for system theme changes (only in browser)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        // Only apply system theme if user hasn't set a manual preference
        const savedTheme = localStorage.getItem('build-malaysia-theme');
        if (!savedTheme) {
          const systemTheme: Theme = e.matches ? 'dark' : 'light';
          setThemeState(systemTheme);
          applyTheme(systemTheme);
        }
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const setTheme = (newTheme: Theme) => {
    try {
      setThemeState(newTheme);
      applyTheme(newTheme);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('build-malaysia-theme', newTheme);
      }
    } catch (error) {
      console.warn('Failed to set theme:', error);
    }
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}