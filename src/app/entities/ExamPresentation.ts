import { Answer } from "./Answer";

export class ExamPresentation {
  idExamPresentation: number;
  score: number;
  studentId: number;
  examId: number;
  answers: Answer[];
}
