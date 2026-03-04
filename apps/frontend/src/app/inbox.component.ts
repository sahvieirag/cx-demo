import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket, Channel, TicketStatus } from '../../../../libs/shared/interfaces/ticket';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  activeTickets: Ticket[] = [
    {
      id: 'T-100',
      customerId: 'C-01',
      customerName: 'Sabrina Guerra',
      lastMessage: 'Gostaria de agendar uma consulta com o Dr. Mobile para amanhã.',
      channel: Channel.WHATSAPP,
      status: TicketStatus.OPEN,
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: ['Health', 'Scheduling'],
      omnisenseSummary: 'Paciente deseja agendamento urgente.'
    }
  ];

  ngOnInit(): void {}

  openTicket(id: string): void {
    console.log(`Abriu ticket ${id} - Referência Jira: XXX-001`);
  }
}
