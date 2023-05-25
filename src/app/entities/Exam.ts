import { Question } from "./Question";

export class Exam{
  idExam: number;
  introduction: string;
  maxScore: number;
  examLink: string;
  questions: Question[];
}
