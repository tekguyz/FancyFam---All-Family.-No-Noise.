export enum Theme {
  Light = 'theme-light',
  Dark = 'theme-dark',
  TrueDark = 'theme-true-dark',
}

export interface FamilyMember {
  id: number;
  name: string;
  spouse?: string;
  children?: FamilyMember[];
}

export interface Post {
    id: string;
    author: {
        name: string;
        avatarUrl?: string;
    };
    timestamp: string;
    content: string;
    imageUrl?: string;
    likes: number;
    comments: number;
}

export interface BringYourOwnItem {
  id: string;
  name: string;
  claimedBy: string | null;
  note: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  items: BringYourOwnItem[];
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
}
