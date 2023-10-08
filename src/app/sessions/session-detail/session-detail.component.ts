import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../../interfaces/session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  session: Session | undefined = undefined;

  constructor(
    private route: ActivatedRoute, 
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam !== null) {
      const id = +idParam;
      this.session = this.sessionService.getSession(id);
    }
  }
}


