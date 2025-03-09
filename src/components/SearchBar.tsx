
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading = false }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-4 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="pl-12 pr-20 py-6 h-14 text-base bg-background border border-input/50 shadow-sm focus-visible:ring-2 transition-all duration-300 rounded-full"
        />
        <Button
          type="submit"
          className="absolute right-1.5 rounded-full transition-all duration-300 bg-primary hover:bg-primary/90 h-11"
          disabled={isLoading || !query.trim()}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
