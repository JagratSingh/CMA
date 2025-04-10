export interface Book {
  id: number;
  title: string;
  author: string;
  ISBN: string;
  available: boolean;
  checkoutBook: boolean;
}