import { Component, OnInit } from '@angular/core';
import { Session } from '../../interfaces/session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent implements OnInit {
  titlePage: string = "Get-Tested : liste des sessions";
  sessions : Session[] = [];

  ngOnInit(): void {
    this.sessions = this.sessionService.getSessions();
  }

  constructor(private sessionService: SessionService) { }
  

}
