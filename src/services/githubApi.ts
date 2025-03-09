
export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GithubUserSearchResult {
  items: GithubUser[];
  total_count: number;
}

const API_BASE_URL = 'https://api.github.com';

export const searchUsers = async (query: string): Promise<GithubUserSearchResult> => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/users?q=${query}&per_page=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUserDetails = async (username: string): Promise<GithubUser> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export const getUsers = async (): Promise<GithubUser[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users?per_page=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
