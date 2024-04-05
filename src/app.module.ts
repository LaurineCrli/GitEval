import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/auth', {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      auth: {
        username: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
