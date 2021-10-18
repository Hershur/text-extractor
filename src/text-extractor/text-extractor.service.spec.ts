import { Test, TestingModule } from '@nestjs/testing';
import { TextExtractorService } from './text-extractor.service';

describe('TextExtractorService', () => {
  let service: TextExtractorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextExtractorService],
    }).compile();

    service = module.get<TextExtractorService>(TextExtractorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
