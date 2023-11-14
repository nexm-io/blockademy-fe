import { number } from "yup";

export type QuizReducerType = {
  listQuiz: Quiz[];
  totalQuiz: any | null;
  loadingListQuiz: boolean;
  listQues: DetailQuestion[];
  loadingListQues: boolean;
  quizDetail: {};
  userAnswer: UserAnswerType[];
  listView: ItemListViewType[];
  loadingSendQuiz: boolean;
  timeStart: any | null;
  showResult: boolean;
  loadingListResult: boolean;
  listResultData: listResultDataType | null;
  loadingQuizStatus: boolean;
  listStatusQuiz: {
    data: StatusQuizType[];
    total: number;
  } | null;
  duration: number;
  titleQuiz: any | null;
  loadingSaveStartTime: boolean;
  loadingGetStartTime: boolean;
  dataStartTime: any;
  isCountDownStop: boolean;
  quesDetail: DetailQuestion | null;

  loadingCheckShowResult: boolean;
  isCheckShowResult: boolean;
  iShowFeedBack: boolean;
  isSubmitInButton: boolean;
  isViewResultInCourse: boolean;
};

export const defaultQuizReducer: QuizReducerType = {
  listQuiz: [],
  totalQuiz: null,
  loadingListQuiz: false,
  listQues: [],
  loadingListQues: false,
  quizDetail: {},
  userAnswer: [],
  listView: [],
  loadingSendQuiz: false,
  timeStart: null,
  showResult: false,
  loadingListResult: false,
  listResultData: null,
  loadingQuizStatus: false,
  listStatusQuiz: null,
  duration: 3600,
  titleQuiz: null,
  loadingSaveStartTime: false,
  loadingGetStartTime: false,
  dataStartTime: null,
  isCountDownStop: false,
  quesDetail: null,

  loadingCheckShowResult: false,
  isCheckShowResult: false,
  iShowFeedBack: false,
  isSubmitInButton: false,
  isViewResultInCourse: true,
};

export type StatusQuizType = {
  status_name: string;
  status_slug: string;
  total_quiz: number;
};

export type ParamsListQuiz = {
  status_slug?: string;
  page?: number;
  limit?: number;
};

export type Quiz = {
  course_name: string;
  description: string;
  id: string;
  image?: ImageType;
  is_completed: number;
  is_required_test: number;
  section_type: string;
  slug: string;
  time: number;
  title: string;
  type: string;
};

export type DetailQuestion = {
  id: number;
  image?: ImageType;
  time: number;
  quiz_title: string;
  quiz_description: string;
  post_id: string;
  question: string | null;
  question_description: string | null;
  question_type: string;
  order: number;
  answer_list: AnswerType[];
  // question_level: string;
};

export type ImageType = {
  original_image: string;
};

export type AnswerType = {
  id: number;
  question_id: number;
  image?: ImageType;
  answer_text?: string;
};

export type ItemListViewType = {
  id: number;
  image?: ImageType;
  time: number;
  quiz_title: string;
  quiz_description: string;
  post_id: string;
  question: string | null;
  question_description: string | null;
  question_type: string;
  order: number;
  answer_list: AnswerType[];

  complete: boolean;
  value?: string | null;
};

export type UserAnswerType = {
  question_id: number;
  answer_id: string;
  question_type: string;
  // question_level: string;
  order: number;
  value?: string;
  valueAnswer?: string;
  answer_content?: string;
};

export type DataSendQuiz = {
  post_id: string;
  start_time: string;
  end_time: string;
  data: DataSubmitType[];
};

export type DataSubmitType = {
  question_id: number;
  answer_id: string;
  question_type: string;
  answer_content?: string;
};

export type listResultDataType = {
  quiz: string;
  description: string;
  score: number;
  total_correct_answer: number;
  total_incorrect_answer: number;
  result: number;
  list_question_answer: QuestionAnswerType[];
  course_id: string;
  course_slug: string;
  lesson_first: {
    lesson_slug: string;
    lesson_id: string;
  };
};

export type QuestionAnswerType = {
  question_description: string;
  question_image: ImageType | null;
  question_id: number;
  question_type: string;
  order: number;
  question_title: string;
  user_answer: ResultUserAnswerType;
  correct_answer: ResultUserAnswerType;
  result_answer: number;
  suggest_answer?: ResultUserAnswerType;
  user_score?: string;
};

export type ResultUserAnswerType = {
  id: number;
  quiz_question_id: number;
  answer_text: string;
  is_correct: number;
};
