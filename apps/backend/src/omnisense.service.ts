import { Injectable, Logger } from '@nestjs/common';
import { Ticket } from '../../../libs/shared/interfaces/ticket';

@Injectable()
export class OmnisenseService {
  private readonly logger = new Logger(OmnisenseService.name);

  async summarizeTicket(ticket: Ticket): Promise<string> {
    this.logger.log(`Processing summary for ticket ${ticket.id}`);

    const summary = `AI Summary for customer ${this.maskPII(ticket.customerName)}: ` +
                    `User is reporting an issue with ${ticket.lastMessage.substring(0, 20)}...`;

    this.logger.debug(`Summary generated successfully for ticket: ${ticket.id}`);

    return summary;
  }
  private maskPII(value: string): string {
    if (!value) return '';
    if (value.length <= 4) return '****';
    return value.substring(0, 2) + '***' + value.slice(-2);
  }

  async suggestReply(history: string[]): Promise<string[]> {
    return [
      "Olá! Como posso te ajudar hoje?",
      "Um momento, estou verificando seu agendamento no sistema HealthPulse.",
      "Entendi. Você gostaria de remarcar sua consulta?"
    ];
  }
}
