import { MovieStatus } from '../schemas/movie.schema';

export class CreateMovieDto {
  readonly id: number;
  readonly title: string;
  readonly imageUrl: string;
  readonly rating: number;
  readonly status: MovieStatus;
  readonly review: string;
  readonly dateAdded: string;
  readonly dateReviewed?: string;
}