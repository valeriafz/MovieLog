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

  @IsOptional()
  @IsNumber()
  @Min(0) 
  @Max(5)
  readonly rating?: number;

  @IsOptional()
  @IsEnum(['Completed', 'Watch later'])
  status?: MovieStatus;
  
  @IsOptional()
  @IsString()
  readonly review?: string;

  @IsOptional()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date must be in YYYY-MM-DD format' })
  readonly dateAdded?: string;

  @IsOptional()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Date must be in YYYY-MM-DD format' })
  dateReviewed?: string;
}