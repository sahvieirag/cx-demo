export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  WAITING_CUSTOMER = 'WAITING_CUSTOMER',
  CLOSED = 'CLOSED',
}

export enum Channel {
  WHATSAPP = 'WHATSAPP',
  INSTAGRAM = 'INSTAGRAM',
  WEBCHAT = 'WEBCHAT',
}

export interface Ticket {
  id: string;
  customerId: string;
  customerName: string;
  lastMessage: string;
  channel: Channel;
  status: TicketStatus;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  tags: string[];
  omnisenseSummary?: string;
}
