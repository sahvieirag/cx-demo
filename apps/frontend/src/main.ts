import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { InboxComponent } from './app/inbox.component';

bootstrapApplication(InboxComponent, {
  providers: [provideHttpClient()],
}).catch(err => console.error(err));
