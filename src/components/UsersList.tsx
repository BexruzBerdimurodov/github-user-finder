
import React from 'react';
import { GithubUser } from '../services/githubApi';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface UsersListProps {
  users: GithubUser[];
  onUserSelect: (username: string) => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onUserSelect }) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No results found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <Card 
          key={user.id} 
          className="cursor-pointer card-hover border-border/50 bg-card/80 backdrop-blur-sm"
          onClick={() => onUserSelect(user.login)}
        >
          <CardContent className="p-4 flex items-center gap-4">
            <Avatar className="w-12 h-12 border border-border/50">
              <AvatarImage src={user.avatar_url} alt={user.login} />
              <AvatarFallback>{user.login.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="overflow-hidden">
              <h3 className="font-medium truncate">{user.login}</h3>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-muted-foreground hover:text-primary truncate block"
                onClick={(e) => e.stopPropagation()}
              >
                {user.html_url}
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UsersList;
