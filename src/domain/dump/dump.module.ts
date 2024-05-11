import { Module } from '@nestjs/common';
import { UserController } from './dump.controller';
import { DumpService } from './dump.service';

@Module({
  // imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [DumpService],
})
export class DumpModule {}
