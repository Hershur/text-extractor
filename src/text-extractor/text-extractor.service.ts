import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import cheerio from 'cheerio';
import { validMimeTypes } from './helpers/helpers';
import { ITextExtract } from './interfaces/text-extract.interface';

@Injectable()
export class TextExtractorService {
  extractText(file: Express.Multer.File): ITextExtract {
    if (!file) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          message: 'File cannot be emtpy',
        },
        HttpStatus.FORBIDDEN,
      );
    } else if (!validMimeTypes.includes(file?.mimetype)) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          mimeType: file.mimetype.toString(),

          message: `Invalid file type, only ${[...validMimeTypes]} are allowed`,
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const $ = cheerio.load(file.buffer.toString('utf-8'));
    const texts = $('html')
      .find('*')
      .contents()
      .map(function () {
        return this.type === 'text' && $(this).text().trim().length > 0
          ? $(this).text().trim() + ' '
          : null;
      })
      .get();
    //   .join('');
    console.log(texts);

    return {
      message: 'success',
      data: {
        filename: file.originalname.toString(),
        mimeType: file.mimetype.toString(),
        // file: `data:${file.mimetype.toString()};base64,${Buffer.from(
        //   texts,
        // ).toString('base64')}`,
        file: `data://data:${file.mimetype.toString()};base64,${file.buffer.toString(
          'base64',
        )}`,
        // file: file.buffer.toString('base64'),
      },
    };
    // return Buffer.from(file.buffer).toString('utf-8');
  }
}
