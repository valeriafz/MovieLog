import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';
import { MoviesModule } from "./movies/movies.module";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('database.uri');
        console.log(`Attempting to connect to MongoDB at ${uri}`);
        return {
          uri,
        };
      },
    }),
    MoviesModule, 
    UsersModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}