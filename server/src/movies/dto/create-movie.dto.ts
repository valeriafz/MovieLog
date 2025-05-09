import { MovieStatus } from '../schemas/movie.schema';
import { IsString, IsNumber, IsOptional, IsEnum, IsUrl, Min, Max, IsDateString, Matches } from 'class-validator';

export class CreateMovieDto {
  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsString()
  readonly title: string;

  @IsUrl()
  readonly imageUrl: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  readonly rating: number;

  @IsEnum(['Completed', 'Watch later'])
  readonly status: MovieStatus;

  @IsString()
  readonly review: string;

  @IsOptional()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date must be in YYYY-MM-DD format' })
  readonly dateAdded?: string;

  @IsOptional()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date must be in YYYY-MM-DD format' })
  readonly dateReviewed?: string;
}