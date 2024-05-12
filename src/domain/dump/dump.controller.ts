import { Controller, Get } from '@nestjs/common';
import { DumpService } from './dump.service';

@Controller('dump')
export class UserController {
  constructor(private readonly dumpService: DumpService) {}

  @Get()
  async startQueue() {
    return await this.dumpService.startQueue();
  }
}
