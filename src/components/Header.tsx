
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-6 px-6 md:px-10 border-b border-border/40 backdrop-blur-md bg-background/80 sticky top-0 z-10 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center">
        <svg className="w-8 h-8 mr-3 text-primary animate-float" 
          viewBox="0 0 16 16"
          fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <h1 className="text-xl font-semibold tracking-tight">GitHub User Finder</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 transition-transform duration-300 ease-in-out" />
          ) : (
            <Sun className="h-5 w-5 transition-transform duration-300 ease-in-out" />
          )}
          <span className="sr-only">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
