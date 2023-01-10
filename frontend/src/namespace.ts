export interface Category {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export interface AnswerType {
  id: number;
  question_id: number;
  answer: string;
  correctness: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface QuestionType {
  length: number
  id: number;
  category_id: number;
  level: number;
  question: string;
  note: string;
  created_at: Date;
  updated_at: Date;
  category: Category;
  answers: AnswerType[];
}