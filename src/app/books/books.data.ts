import { Book } from "./books.model";

const books_data: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    ISBN: "9780743273565",
    available: true,
    checkoutBook: false,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "9780061120084",
    available: true,
    checkoutBook: false,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    ISBN: "9780451524935",
    available: true,
    checkoutBook: false,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    ISBN: "9781503290563",
    available: true,
    checkoutBook: false,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ISBN: "9780316769488",
    available: true,
    checkoutBook: false,
  },
];

export default books_data;