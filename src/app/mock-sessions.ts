import { Institut } from './interfaces/institut';
import { Session } from './interfaces/session';
import { Exam } from './interfaces/exam';
import { Level } from './interfaces/level';
import { Test } from './interfaces/test';
import { User } from './interfaces/user';

export const INSTITUTS: Institut[] = [
    {
        institut_id: 1,
        label: 'Alliance Française de Paris',
    },
    {
        institut_id: 2,
        label: 'Alliance Française de Lyon',
    },
    {
        institut_id: 3,
        label: 'Tenri Japaneses Language School',
    }
];

export const LEVELS: Level[] = [
    {
        level_id: 1,
        label: 'A1',
    },
    {
        level_id: 2,
        label: 'A2',
    },
    {
        level_id: 3,
        label: 'B1',
    },
    {
        level_id: 4,
        label: 'B2',
    },
    {
        level_id: 5,
        label: 'C1',
    },
    {
        level_id: 6,
        label: 'C2',
    },
    {
        level_id: 7,
        label: 'N1',
    },
    {
        level_id: 8,
        label: 'N2',
    },
    {
        level_id: 9,
        label: 'N3',
    },
    {
        level_id: 10,
        label: 'N4',
    },
    {
        level_id: 11,
        label: 'N5',
    }
];

export const TESTS: Test[] = [
    {
        test_id: 1,
        label: 'DELF',
        levels: [LEVELS[0], LEVELS[1], LEVELS[2], LEVELS[3], LEVELS[4], LEVELS[5] ]
    },
    {
        test_id: 2,
        label: 'DALF',
        levels: [LEVELS[0], LEVELS[1], LEVELS[2], LEVELS[3], LEVELS[4], LEVELS[5] ]
    },
    {
        test_id: 3,
        label: 'JLPT',
        levels: [ LEVELS[6], LEVELS[7], LEVELS[8], LEVELS[9], LEVELS[10] ]
    }
];

export const EXAMS: Exam[] = [
    {
        exam_id: 1,
        label: 'EXAM 1',
        description: 'Description de l\'examen 1',
        price: 100,
        test: TESTS[0],
        level: LEVELS[0]
    },
    {
        exam_id: 2,
        label: 'EXAM 2',
        description: 'Description de l\'examen 2',
        price: 120,
        test: TESTS[0],
        level: LEVELS[0]
    },
    {
        exam_id: 3,
        label: 'EXAM 3',
        description: 'Description de l\'examen 3',
        price: 80,
        test: TESTS[0],
        level: LEVELS[0]
    },
    {
        exam_id: 4,
        label: 'EXAM 4',
        description: 'Description de l\'examen 4',
        price: 150,
        test: TESTS[0],
        level: LEVELS[0]
    },
    {
        exam_id: 5,
        label: 'EXAM 5',
        description: 'Description de l\'examen 5',
        price: 125,
        test: TESTS[2],
        level: LEVELS[1]
    }
];

export const USERS: User[] = [
    {
        user_id: 1,
        username: 'jdupont',
        password: '1234',
        email: 'j.dupont@gmail.com',
        role: 'USER',   
    },
    {
        user_id: 2,
        username: 'mleblanc',
        password: '1234',
        email: 'm.leblanc@gmail.com',
        role: 'USER',
    },
];

export const SESSIONS: Session[] = [
    
    {
        session_id: 1,
        label: 'Session 1',
        description: 'Description de la session 1',
        date: new Date('08/10/2023'),
        nbPlaces: 10,
        institut: INSTITUTS[0],
        exams: [EXAMS[0], EXAMS[1]],
        level: LEVELS[0],
        test: TESTS[0]
    },
    {
        session_id: 2,
        label: 'Session 2',
        description: 'Description de la session 2',
        date: new Date('10/10/2023'),
        nbPlaces: 15,
        institut: INSTITUTS[1],
        exams: [EXAMS[2], EXAMS[3]],
        level: LEVELS[1],
        test: TESTS[1]
    },
    {
        session_id: 3,
        label: 'Session 3',
        description: 'Description de la session 3',
        date: new Date('12/10/2023'),
        nbPlaces: 50,
        institut: INSTITUTS[2],
        exams: [EXAMS[5]],
        level: LEVELS[10],
        test: TESTS[2]
    },
];