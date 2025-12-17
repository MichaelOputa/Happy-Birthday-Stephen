export interface Memory {
  id: number;
  type: 'image' | 'video';
  url: string;
  caption: string;
}

export interface Message {
  id: number;
  author: string;
  relationship: string;
  message: string;
}

export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
}
