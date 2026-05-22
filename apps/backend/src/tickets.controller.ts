import { Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from '@luminacx/shared/interfaces/ticket';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ticket> {
    return this.ticketsService.findOne(id);
  }

  @Get(':id/summary')
  async getSummary(@Param('id') id: string): Promise<{ summary: string }> {
    const summary = await this.ticketsService.getSummary(id);
    return { summary };
  }

  @Get(':id/replies')
  async getSuggestedReplies(@Param('id') id: string): Promise<{ replies: string[] }> {
    const replies = await this.ticketsService.getSuggestedReplies(id);
    return { replies };
  }
}
