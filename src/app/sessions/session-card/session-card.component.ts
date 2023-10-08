import { Component, Input } from '@angular/core';
import { Session } from '../../interfaces/session';

@Component({
  selector: 'sessionCard',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})
export class SessionCardComponent {
  @Input() session: Session | null = null;
}
