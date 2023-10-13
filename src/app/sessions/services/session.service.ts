import { Injectable } from '@angular/core';
import { SESSIONS } from '../../mock-sessions';
import { Session } from '../../interfaces/session';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessions: Session[] = SESSIONS;

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://172.0.0.1:4200/';

getSessions() : Observable<Session[]> {
  return this.http.get<Session[]>(this.baseUrl + 'sessions');
}

}

/*
  getSessions(): Session[] {
    return this.sessions.sort((a, b) => b.date.getTime() - a.date.getTime());
  }*/

  getSession(id: number): Session | undefined {
    return this.sessions.find(session => session.session_id === id);
  }

  getSessionByLabel(label: string): Session | undefined {
    return this.sessions.find(session => session.label === label);
  }

  getSessionByTestAndLevel(test_id: number, level_id: number): Session | undefined {
    return this.sessions.find(session => session.test.test_id === test_id && session.level.level_id === level_id);
  }

}
