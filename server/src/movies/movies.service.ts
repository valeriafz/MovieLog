import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Counter, CounterDocument } from './schemas/counter.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
    @InjectModel(Counter.name) private counterModel: Model<CounterDocument>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().sort({ id: 1 }).exec();
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.movieModel.findOne({ id }).exec();
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  private async getNextSequence(modelName: string): Promise<number> {
    const counter = await this.counterModel.findOneAndUpdate(
      { model: modelName },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    ).exec();
    
    return counter.seq;
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    let movieToCreate = { ...createMovieDto };
    
    if (!movieToCreate.id) {
      const newId = await this.getNextSequence('Movie');
      movieToCreate = { ...movieToCreate, id: newId };
    }
    
    if (!movieToCreate.dateAdded) {
      const today = new Date().toISOString().split('T')[0];
      movieToCreate = { ...movieToCreate, dateAdded: today };
    }
    
    const newMovie = new this.movieModel(movieToCreate);
    return newMovie.save();
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const updatedMovie = await this.movieModel
      .findOneAndUpdate({ id }, updateMovieDto, { new: true })
      .exec();
      
    if (!updatedMovie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    
    return updatedMovie;
  }
  
  async findByStatus(status: 'Completed' | 'Watch later'): Promise<Movie[]> {
    return this.movieModel.find({ status }).sort({ id: 1 }).exec();
  }
}