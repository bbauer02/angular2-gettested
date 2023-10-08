import { Test } from './test';
import { Level } from './level';

export interface Exam {
    exam_id: number;
    label: string;
    description: string;
    price: number;
    test: Test;
    level: Level;
}