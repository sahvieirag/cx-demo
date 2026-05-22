import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket, Channel, TicketStatus } from '@luminacx/shared/interfaces/ticket';
import { OmnisenseService } from './omnisense.service';

@Injectable()
export class TicketsService {
  private readonly tickets: Ticket[] = [
    {
      id: 'T-100',
      customerId: 'C-01',
      customerName: 'Sabrina Guerra',
      lastMessage: 'Gostaria de agendar uma consulta com o Dr. Mobile para amanhã.',
      channel: Channel.WHATSAPP,
      status: TicketStatus.OPEN,
      createdAt: new Date('2025-05-20T10:00:00Z'),
      updatedAt: new Date('2025-05-20T10:00:00Z'),
      tags: ['Health', 'Scheduling'],
      omnisenseSummary: 'Paciente deseja agendamento urgente.',
    },
    {
      id: 'T-101',
      customerId: 'C-02',
      customerName: 'Carlos Oliveira',
      lastMessage: 'Preciso remarcar minha consulta de sexta-feira.',
      channel: Channel.INSTAGRAM,
      status: TicketStatus.IN_PROGRESS,
      createdAt: new Date('2025-05-19T14:30:00Z'),
      updatedAt: new Date('2025-05-20T09:15:00Z'),
      assignedTo: 'agent-01',
      tags: ['Health', 'Rescheduling'],
      omnisenseSummary: 'Paciente quer remarcar consulta existente.',
    },
    {
      id: 'T-102',
      customerId: 'C-03',
      customerName: 'Ana Souza',
      lastMessage: 'Qual o horário de funcionamento da clínica?',
      channel: Channel.WEBCHAT,
      status: TicketStatus.OPEN,
      createdAt: new Date('2025-05-20T11:45:00Z'),
      updatedAt: new Date('2025-05-20T11:45:00Z'),
      tags: ['General'],
    },
  ];

  constructor(private readonly omnisenseService: OmnisenseService) {}

  async findAll(): Promise<Ticket[]> {
    return this.tickets;
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = this.tickets.find((t) => t.id === id);
    if (!ticket) {
      throw new NotFoundException(`Ticket ${id} not found`);
    }
    return ticket;
  }

  async getSummary(id: string): Promise<string> {
    const ticket = await this.findOne(id);
    return this.omnisenseService.summarizeTicket(ticket);
  }

  async getSuggestedReplies(id: string): Promise<string[]> {
    const ticket = await this.findOne(id);
    return this.omnisenseService.suggestReply([ticket.lastMessage]);
  }
}
