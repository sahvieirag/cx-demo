import { Module } from '@nestjs/common';
import { OmnisenseService } from './omnisense.service';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';

@Module({
  imports: [],
  controllers: [TicketsController],
  providers: [OmnisenseService, TicketsService],
})
export class AppModule {}
