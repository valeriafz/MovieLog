import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { Counter, CounterSchema } from './schemas/counter.schema';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movie.name, schema: MovieSchema },
      { name: Counter.name, schema: CounterSchema }
    ])
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}