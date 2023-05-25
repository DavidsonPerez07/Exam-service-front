import { Option } from "./Option";

export class Question {
  idQuestion: number;
  description: string;
  assessment: number;
  questionType: string;
  options: Option[];
}
