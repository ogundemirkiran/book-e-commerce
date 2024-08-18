import { describe, test, expect } from 'vitest';
import type { Book } from '~/types/Book.js';

const mockBooks: Book[] = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    coverImageUrl: 'https://picsum.photos/200/300',
    price: 10
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    coverImageUrl: 'https://picsum.photos/200/300',
    price: 20
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
    coverImageUrl: 'https://picsum.photos/200/300',
    price: 15
  },
  {
    id: 4,
    title: 'Book 4',
    author: 'Author 4',
    coverImageUrl: 'https://picsum.photos/200/300',
    price: 25
  },
  {
    id: 5,
    title: 'Book 5',
    author: 'Author 5',
    coverImageUrl: 'https://picsum.photos/200/300',
    price: 30
  }
];

describe('HomePage', () => {
  const books = mockBooks;

  test('Is books loaded', () => {
    expect(books).toEqual(mockBooks);
  });
});
