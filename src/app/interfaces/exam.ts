import { Level } from "./level";
import { Test } from "./test";

export interface Exam {
    exam_id: number;
    label: string;
    description: string;
    price: number;
    duration: number;
    level: Level;
    test: Test;
}
