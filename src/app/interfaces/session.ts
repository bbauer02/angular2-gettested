import { Institut } from './institut';
import { Test } from './test';
import { Exam } from './exam';
import { User } from './user';


export interface Session {
    session_id: number;
    institut: Institut;
    start: Date;
    end: Date;
    placeAvailable: number;
    exams: Exam[];
    users: User[];
}
