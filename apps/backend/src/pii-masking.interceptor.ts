import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PiiMaskingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => this.maskDeep(data)),
    );
  }

  private maskDeep(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.maskDeep(item));
    } else if (typeof data === 'object' && data !== null) {
      const maskedObject = { ...data };
      for (const key in maskedObject) {
        if (this.isSensitiveKey(key)) {
          maskedObject[key] = this.maskValue(maskedObject[key]);
        } else {
          maskedObject[key] = this.maskDeep(maskedObject[key]);
        }
      }
      return maskedObject;
    }
    return data;
  }

  private isSensitiveKey(key: string): boolean {
    const sensitiveKeys = ['customerName', 'email', 'phone', 'cpf', 'password'];
    return sensitiveKeys.some((s) => key.toLowerCase().includes(s.toLowerCase()));
  }

  private maskValue(value: any): string {
    if (typeof value !== 'string' || !value) return value;
    if (value.length <= 4) return '****';
    return value.substring(0, 2) + '***' + value.slice(-2);
  }
}
