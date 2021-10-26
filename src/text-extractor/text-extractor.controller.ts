import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ITextExtract } from './interfaces/text-extract.interface';
import { TextExtractorService } from './text-extractor.service';

@Controller('text-extractor')
export class TextExtractorController {
  constructor(private readonly textExractorService: TextExtractorService) {}

  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.OK)
  @Post()
  textExtractor(@UploadedFile() file: Express.Multer.File): ITextExtract {
    return this.textExractorService.extractText(file);
  }
}
