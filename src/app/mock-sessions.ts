import { Session } from './interfaces/session';

export const SESSIONS: Session[] = [
    {
        "session_id" : 1,
        "institut" : {
            "institut_id" : 1,
            "label" : "Institut 1"
        },
        "start" : new Date("2019-01-01"),
        "end" : new Date("2019-01-01"),
        "placeAvailable" : 10,
        "users" : [
            {
                "user_id" : 1,
                "email" : "email@app.org",
                "username" : "user1",
                "password" : "user1",
                "firstname" : "firstname1",
                "lastname" : "lastname1",
                "role" : "ROLE_USER"
            },
            {
                "user_id" : 2,
                "email" : "email2@app.org",
                "username" : "user2",
                "password" : "user2",
                "firstname" : "firstname2",
                "lastname" : "lastname2",
                "role" : "ROLE_USER"
            },
            {
                "user_id" : 3,
                "email" : "email3@app.org",
                "username" : "user3",
                "password" : "user3",
                "firstname" : "firstname3",
                "lastname" : "lastname3",
                "role" : "ROLE_USER"
            }],

        "exams" : [
            {
                "exam_id" : 1,
                "label" : "Exam 1",
                "description" : "Description 1",
                "price" : 100,
                "duration" : 60,
                "level" : {
                    "level_id" : 1,
                    "label" : "Level 1"
                },
                "test" : {
                    "test_id" : 1,
                    "label" : "Test 1"
                }
            },
            {
                "exam_id" : 2,
                "label" : "Exam 2",
                "description" : "Description 2",
                "price" : 200,
                "duration" : 120,
                "level" : {
                    "level_id" : 2,
                    "label" : "Level 2"
                },
                "test" : {
                    "test_id" : 2,
                    "label" : "Test 2"
                }
            },
            {
                "exam_id" : 3,
                "label" : "Exam 3",
                "description" : "Description 3",
                "price" : 300,
                "duration" : 180,
                "level" : {
                    "level_id" : 3,
                    "label" : "Level 3"
                },
                "test" : {
                    "test_id" : 3,
                    "label" : "Test 3"
                }
            }
        ]
    }
];