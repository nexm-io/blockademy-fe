export type QuizReducerType = {
  listQuiz: [];
  totalQuiz: any | null;
  loadingListQuiz: boolean;
  listQues: [];
  loadingListQues: boolean;
  quizDetail: {};
  userAnswer: [];
  listView: [];
  loadingSendQuiz: boolean;
  timeStart: any | null;
  showResult: boolean;
  loadingListResult: boolean;
  listResultData: {};
  loadingQuizStatus: boolean;
  listStatusQuiz: {};
  duration: number;
  titleQuiz: any | null;
  loadingSaveStartTime: boolean;
  loadingGetStartTime: boolean;
  dataStartTime: any | null;
  isCountDownStop: any | null;
  quesDetail: any | null;

  loadingCheckShowResult: boolean;
  isCheckShowResult: any | null;
  iShowFeedBack: boolean;
  isSubmitInButton: boolean;
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
  listResultData: {},
  loadingQuizStatus: false,
  listStatusQuiz: {},
  duration: 3600,
  titleQuiz: null,
  loadingSaveStartTime: false,
  loadingGetStartTime: false,
  dataStartTime: null,
  isCountDownStop: null,
  quesDetail: null,

  loadingCheckShowResult: false,
  isCheckShowResult: null,
  iShowFeedBack: false,
  isSubmitInButton: false,
};
