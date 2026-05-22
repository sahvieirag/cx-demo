import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '@luminacx/shared/interfaces/ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  activeTickets: Ticket[] = [];
  loading = true;
  error: string | null = null;

  constructor(private readonly ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: (tickets) => {
        this.activeTickets = tickets;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load tickets. Is the backend running?';
        this.loading = false;
        console.error('Error fetching tickets:', err);
      },
    });
  }

  openTicket(id: string): void {
    console.log(`Abriu ticket ${id}`);
  }
}
