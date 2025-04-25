export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
    rating: number;
    status: 'Completed' | 'Watch later';
    review: string;
    dateAdded: string;
    dateReviewed?: string;
  }