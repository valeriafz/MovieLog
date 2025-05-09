import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

export type MovieStatus = 'Completed' | 'Watch later';

@Schema()
export class Movie {
  @Prop({ type: Number, required: true })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: Number})
  rating: number;

  @Prop({ required: true, enum: ['Completed', 'Watch later'] })
  status: MovieStatus;

  @Prop()
  review: string;

  @Prop({ required: true })
  dateAdded: string;

  @Prop()
  dateReviewed?: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);