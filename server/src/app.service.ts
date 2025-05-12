import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService implements OnModuleInit {
  private dbConnectionStatus = false;

  constructor(
    @InjectConnection() private readonly connection: Connection,
    private configService: ConfigService,
  ) {
    
  }

  async onModuleInit() {
    try {
      this.dbConnectionStatus = this.connection.readyState === 1;
      if (this.dbConnectionStatus) {
        console.log('Successfully connected to MongoDB database');
      } else {
        console.error('Failed to connect to MongoDB database');
      }
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      this.dbConnectionStatus = false;
    }
  }
}