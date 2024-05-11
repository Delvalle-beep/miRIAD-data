import { Controller, Get } from '@nestjs/common';
import { DumpService } from './dump.service';

@Controller('user')
export class UserController {
  constructor(private readonly dumpService: DumpService) {}

  @Get()
  async startQueue() {
    return this.dumpService.startQueue();
  }
}
