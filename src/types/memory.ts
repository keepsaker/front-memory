import type { Tag } from './tag';

export interface Memory {
  title: string;
  category: string;
  tags: Tag[];
  visitedAt: string;
  star: number;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface NewMemory
  extends Omit<Memory, 'images' | 'tags' | 'location'> {
  tags: Array<Tag['id']>;
  images: File[];
}