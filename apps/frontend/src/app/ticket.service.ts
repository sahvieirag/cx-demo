import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '@luminacx/shared/interfaces/ticket';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private readonly apiUrl = 'http://localhost:3000/tickets';

  constructor(private readonly http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicket(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  getSummary(id: string): Observable<{ summary: string }> {
    return this.http.get<{ summary: string }>(`${this.apiUrl}/${id}/summary`);
  }

  getSuggestedReplies(id: string): Observable<{ replies: string[] }> {
    return this.http.get<{ replies: string[] }>(`${this.apiUrl}/${id}/replies`);
  }
}
