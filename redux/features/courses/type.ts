export interface CourseTypes {
  slug: string;
  reward_id: number;
  reward_is_claimed: number;
  reward_released_date: number ;
  completed_at?: number;
  id: string;
  title: string;
  description: string;
  status: number;
  image: ImageCourse | null;
  list_courses: {
    data: Array<ListCourse>;
  };
  total_course: number;
  is_finished: number;
}

export interface CourseResponse {
  success: boolean;
  isLoading: boolean;
  data: Array<CourseTypes>;
  error: any;
  details: CourseDetail | null;
  quiz: QuizDataResponse;
  message?: string;
}

export interface ListCourse {
  lesson_first?: {
    lesson_slug: string;
  };
  is_opened: number | null;
  type?: string;
  id: string;
  slug?: string;
  title: string;
  total_lesson? : number;
  total_lesson_completed: number;
  duration: number;
  is_completed: number;
  order: number;
}

export interface ImageCourse {
  id: number;
  thumbnail: string;
  original_image: string;
  og_image: string;
  medium_image: string;
  medium_image_two: string;
  big_image_two: string;
  medium_image_three: string;
  small_image: string;
  big_image: string;
  thumbnail_two: string;
  small_image_two: string;
}

export interface Course_question {
  question_id: number;
  question: string;
  question_type: string;
  question_duration: string;
  answers: Array<Course_answer>;
}

export interface Lesson {
  lesson_id: number;
  lesson_title: string;
  lesson_description: string;
  lesson_link: string;
  lesson_duration: number;
  question_detail: Course_question;
  lesson_type: string;
  is_complete: number;
}

export interface Course_answer {
  id: number;
  answer_text: string;
}

export interface CourseDetail {
  campaign_id: string;
  campaign_slug: string;
  reward_id: number;
  id: string;
  title: string;
  campaign_title: string;
  slug: string;
  order: number;
  lesson_data: Array<Lesson>;
  lesson_type: string;
  is_complete: number;
  reward_is_claimed: number;
  reward_released_date: number;
  is_finished: number;
  other_courses: {
    data: Array<ListCourse>
  }
}


export interface CourseDetailResponse {
  isLoading: boolean;
  data: CourseDetail;
  error: any;
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