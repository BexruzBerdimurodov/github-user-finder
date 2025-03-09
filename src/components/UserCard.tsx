
import React from 'react';
import { GithubUser } from '../services/githubApi';
import { MapPin, Building, Link2, Users, GitFork, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UserCardProps {
  user: GithubUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 p-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-border/50 mb-4">
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                @{user.login}
              </a>
              {user.bio && <p className="text-sm mt-2 max-w-xs text-muted-foreground">{user.bio}</p>}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-4 md:justify-start justify-center">
              <div className="flex items-center gap-1.5 text-sm">
                <Badge variant="secondary" className="rounded-full px-3 py-1 flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>{user.public_repos}</span>
                  <span className="text-muted-foreground">Repositories</span>
                </Badge>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Badge variant="secondary" className="rounded-full px-3 py-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{user.followers}</span>
                  <span className="text-muted-foreground">Followers</span>
                </Badge>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Badge variant="secondary" className="rounded-full px-3 py-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{user.following}</span>
                  <span className="text-muted-foreground">Following</span>
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              {user.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.company && (
                <div className="flex items-center gap-2 text-sm">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span>{user.company}</span>
                </div>
              )}
              {user.blog && (
                <div className="flex items-center gap-2 text-sm">
                  <Link2 className="w-4 h-4 text-muted-foreground" />
                  <a 
                    href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {user.blog}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>
                  Joined {formatDate(user.created_at)}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                asChild 
                variant="default"
                className="rounded-full"
              >
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
