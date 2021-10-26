import { fileObjectDto } from '../dtos/file-object.dto';

export interface ITextExtract {
  message: string;
  data?: fileObjectDto;
}
