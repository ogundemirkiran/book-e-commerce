export interface Book {
  id: number;
  title: string;
  author: string;
  coverImageUrl: string;
  price: number;
  count?: number;
}
