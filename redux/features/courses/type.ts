import { PaginationArticle } from "../articles/type";

export interface CourseTypes {
  slug: string;
  reward_id: number;
  reward_is_claimed: number;
  reward_released_date: number;
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
  pagination: PaginationArticle | null;
  error: any;
  details: CourseDetail | null;
  quiz: QuizDataResponse;
  message?: string;
  subCourseLoading: boolean;
  subCourse: any;
  lessonLoading: boolean;
  lesson: any;
  previousSubCourseSlug: string;
  nextLesson: LessonTypes;
  completeRate: {
    total_completed: number;
  };
  nextPrevLesson: {
    previous_data: NextPrevType;
    next_data: NextPrevType;
    current_data: NextPrevType;
  };
  menuData: {
    sub_course_data: any;
    module_data: any;
  };
  menuDataLoading: boolean;
}

export interface LessonTypes {
  main_is_specialization: string | any;
  main_course_data: string | any;
  course_id: string;
  course_slug: string;
  course_title: string;
  is_registered: number;
  is_claimed: number;
  title: string;
  link: null | string;
  duration: number;
  assignment_detail: any;
  type_upload: string;
  type_format: number;
  description: null | string;
}

export interface NextPrevType {
  sub_course_id: string;
  sub_course_slug: string;
  module_id: number;
  module_slug: string;
  lesson_id: number;
  lesson_slug: string;
  is_complete_lesson: number;
}

export interface ListCourse {
  lesson_first?: {
    lesson_slug: string;
  };
  is_opened: number | null;
  type?: string;
  id: string;
  slug?: string;
  image: ImageCourse;
  title: string;
  total_lesson?: number;
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
  original: string;
}

export interface Course_question {
  question_id: number;
  question: string;
  question_type: string;
  question_duration: string;
  answers: Array<Course_answer>;
}

export interface Lesson {
  lesson_slug: string;
  lesson_type_format: number;
  lesson_id: number;
  lesson_title: string;
  lesson_description: string;
  lesson_link: string;
  lesson_duration: number;
  question_detail: Course_question;
  lesson_type: string;
  is_complete: number;
  lesson_type_upload: string;
}

export interface Course_answer {
  id: number;
  answer_text: string;
}

export interface CourseDetail {
  is_complete_module_sub_course: number | string;
  is_claimed: number;
  complete_assignment_at: string;
  certificate_pdf_url: string;
  certificate_image_url: string;
  aissignment_grade: number;
  assignment_status: any;
  campaign_id: string;
  campaign_slug: string;
  reward_id: number;
  id: string;
  title: string;
  campaign_title: string;
  lesson_first: any;
  description: string;
  slug: string;
  order: number;
  lesson_type: string;
  is_completed: number;
  reward_is_claimed: number;
  assigment_id: string;
  reward_released_date: number;
  is_finished: number;
  is_registered: number;
  is_completed_assignment: number;
  other_courses: {
    data: Array<ListCourse>;
  };
  is_opened: number;
  issue_nft_status: string;
  main_course_data: {
    id: string;
    title: string;
    slug: string;
  };
  is_specialization: number;
  main_is_specialization: number | string;
}

export interface ModuleItem {
  is_complete_module: number;
  lesson_slug: string;
  duration: number;
  lesson_data: {
    id: number;
    slug: string;
  };
  id: number;
  slug: string;
  title: string;
  is_locked: number;
}

export interface LessonItem {
  is_complete_lesson: number;
  duration: number;
  id: number;
  slug: string;
  type_format: number;
  type_upload: string;
  link: string;
  description: string;
  title: string;
  is_locked: number;
  assignment_detail: any;
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
