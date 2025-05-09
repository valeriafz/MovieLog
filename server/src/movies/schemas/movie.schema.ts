import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

export type MovieStatus = 'Completed' | 'Watch later';

@Schema({ 
  timestamps: false,
  toJSON: {
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})
export class Movie {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;


  @Prop({ required: true, unique: true })
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

  @Prop()
  dateAdded: string;

  @Prop()
  dateReviewed?: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);