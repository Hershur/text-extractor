import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { TextExtractorController } from './text-extractor/text-extractor.controller';
import { TextExtractorService } from './text-extractor/text-extractor.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
  ],
  controllers: [AppController, TextExtractorController],
  providers: [AppService, TextExtractorService],
})
export class AppModule {}
