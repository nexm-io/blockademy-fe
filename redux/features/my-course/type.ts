import { PaginationArticle } from "../articles/type";
import { CourseTypes } from "../new-courses/type";


export interface MyCourseResponse {
  success: boolean;
  isLoading: boolean;
  data: Array<CourseTypes>;
  pagination: PaginationArticle | null;
  error: any;
  quiz: QuizDataResponse;
  message?: string;
}

export interface QuizResponse {
  success: boolean;
  message: string;
  data: QuizDataResponse;
}

export interface QuizDataResponse {
  is_correct: boolean;
  is_finished?: number;
}
