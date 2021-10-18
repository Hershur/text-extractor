import { Test, TestingModule } from '@nestjs/testing';
import { TextExtractorController } from './text-extractor.controller';

describe('TextExtractorController', () => {
  let controller: TextExtractorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextExtractorController],
    }).compile();

    controller = module.get<TextExtractorController>(TextExtractorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
