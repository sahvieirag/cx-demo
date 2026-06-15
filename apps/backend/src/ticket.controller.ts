import { Controller, Get, Post, Body, Param, UseInterceptors } from '@nestjs/common';
import { OmnisenseService } from './omnisense.service';
import { Ticket } from '../../../libs/shared/interfaces/ticket';

@Controller('api/tickets')
export class TicketController {
  constructor(private readonly omnisenseService: OmnisenseService) {}

  @Get()
  async getTickets() {
    // Retornamos dados completos com informações pessoais para que o PiiMaskingInterceptor 
    // faça o mascaramento automático antes do payload ser devolvido ao cliente.
    return [
      {
        id: 'T-100',
        customerId: 'C-01',
        customerName: 'Sabrina Guerra',
        email: 'sabrina.guerra@luminacx.com',
        phone: '+55 11 99888-7766',
        cpf: '456.789.012-34',
        lastMessage: 'Gostaria de agendar uma consulta com o Dr. Mobile para amanhã.',
        channel: 'WHATSAPP',
        status: 'OPEN',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['Health', 'Scheduling'],
        omnisenseSummary: 'Paciente deseja agendamento urgente com Dr. Mobile.',
      },
      {
        id: 'T-101',
        customerId: 'C-02',
        customerName: 'Lucas Oliveira',
        email: 'lucas.oliveira@example.com',
        phone: '+55 21 98888-5544',
        cpf: '987.654.321-00',
        lastMessage: 'Olá! Qual o valor da mensalidade do plano corporativo LuminaCX?',
        channel: 'WEBCHAT',
        status: 'OPEN',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['Sales', 'Pricing'],
        omnisenseSummary: 'Lead interessado em precificação de plano corporativo.',
      }
    ];
  }

  @Post(':id/summarize')
  async summarizeTicket(@Body() ticket: Ticket) {
    const summary = await this.omnisenseService.summarizeTicket(ticket);
    return {
      ticketId: ticket.id,
      summary,
    };
  }

  @Post('suggest-reply')
  async suggestReply(@Body('history') history: string[]) {
    const suggestions = await this.omnisenseService.suggestReply(history || []);
    return {
      suggestions,
    };
  }
}
