import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { validFileMimeTypes } from './helpers/helpers';
import { ITextExtract } from './interfaces/text-extract.interface';

@Injectable()
export class TextExtractorService {
  extractText(file: Express.Multer.File): ITextExtract {
    if (!validFileMimeTypes.includes(file.mimetype)) {
      return {
        errorMessage: `Invalid file type, only ${[
          ...validFileMimeTypes,
        ]} are allowed`,
      };
    }
    return {
      filename: file.originalname.toString(),
      mimeType: file.mimetype.toString(),
      file: file.buffer.toString('utf-8'),
    };
    // return Buffer.from(file.buffer).toString('utf-8');
  }
}
