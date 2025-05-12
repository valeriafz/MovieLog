import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Param,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './schemas/movie.schema';
import { RolesGuard, Roles, Role } from 'src/auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(
    @Request() req,
    @Body() dto: CreateMovieDto,
  ): Promise<Movie> {
    const userId = req.user.userId;
    return this.moviesService.create(dto, userId);
  }

  @Get()
  async findAll(@Request() req): Promise<Movie[]> {
    const userId = req.user.userId;
    return this.moviesService.findAllByUser(userId);
  }

  @Get('admin')
  @Roles(Role.ADMIN)  
  async findAllForAdmin(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Put(':id')
  async update(
    @Request() req,
    @Param('id') id: number,
    @Body() dto: UpdateMovieDto,
  ): Promise<Movie> {
    const userId = req.user.userId;
    return this.moviesService.update(id, dto, userId);
  }
}
