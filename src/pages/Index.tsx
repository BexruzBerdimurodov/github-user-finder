
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { GithubUser, searchUsers, getUserDetails, getUsers } from '@/services/githubApi';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import UsersList from '@/components/UsersList';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { toast } = useToast();

  // Query for initial users
  const {
    data: initialUsers,
    isLoading: isLoadingInitial,
    error: initialError
  } = useQuery({
    queryKey: ['initialUsers'],
    queryFn: getUsers,
    retry: 1,
  });

  // Query for search results
  const {
    data: searchResults,
    isLoading: isSearching,
    error: searchError,
    refetch: refetchSearch
  } = useQuery({
    queryKey: ['searchUsers', searchQuery],
    queryFn: () => searchUsers(searchQuery),
    enabled: !!searchQuery,
    retry: 1,
  });

  // Query for selected user details
  const {
    data: userDetails,
    isLoading: isLoadingUser,
    error: userError
  } = useQuery({
    queryKey: ['userDetails', selectedUser],
    queryFn: () => getUserDetails(selectedUser!),
    enabled: !!selectedUser,
    retry: 1,
  });

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedUser(null);
    refetchSearch();
  };

  // Handle user selection
  const handleUserSelect = (username: string) => {
    setSelectedUser(username);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show error toast if any error occurs
  useEffect(() => {
    if (initialError || searchError || userError) {
      toast({
        title: "Error",
        description: "Couldn't connect to GitHub API. Please try again later.",
        variant: "destructive",
      });
    }
  }, [initialError, searchError, userError, toast]);

  // Determine which users to display
  const usersToDisplay = searchQuery && searchResults?.items 
    ? searchResults.items 
    : initialUsers || [];

  // Loading state
  const isLoading = isLoadingInitial || isSearching;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-lg">Loading...</span>
          </div>
        ) : (
          <>
            {selectedUser && userDetails ? (
              <div className="mb-10 animate-fade-in">
                <UserCard user={userDetails} />
              </div>
            ) : (
              <div className="text-center mb-10">
                <div className="inline-block neo-blur px-6 py-3 rounded-full animate-fade-in">
                  <h2 className="text-lg font-medium">
                    {searchQuery ? "Search Results" : "Enter a username to search"}
                  </h2>
                </div>
              </div>
            )}

            <div className="animate-slide-in">
              <UsersList 
                users={usersToDisplay} 
                onUserSelect={handleUserSelect} 
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
