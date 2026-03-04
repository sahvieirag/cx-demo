import { bootstrapApplication } from '@angular/platform-browser';
import { InboxComponent } from './app/inbox.component';

bootstrapApplication(InboxComponent)
  .catch(err => console.error(err));
