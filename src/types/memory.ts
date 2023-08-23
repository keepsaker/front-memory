export interface Memory {
  id: number;
  title: string;
  content: string;
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

export interface Tag {
  id: number;
  name: string;
  color: string;
}
