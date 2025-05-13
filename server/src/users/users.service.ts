import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashed = await bcrypt.hash(createUserDto.password, 10);
    
    const role = createUserDto.role || 'VISITOR'; 
    
    return this.userModel.create({
      email: createUserDto.email,
      password: hashed,
      role,
     });
    }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
