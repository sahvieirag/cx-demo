import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { OmnisenseService } from './omnisense.service';
import { PiiMaskingInterceptor } from './pii-masking.interceptor';
import { TicketController } from './ticket.controller';

@Module({
  imports: [],
  controllers: [TicketController],
  providers: [
    OmnisenseService,
    {
      provide: APP_INTERCEPTOR,
      useClass: PiiMaskingInterceptor,
    },
  ],
})
export class AppModule {}
