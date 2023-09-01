export interface CourseTypes {
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

export interface ListCourse {
  id: number;
  title: string;
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
