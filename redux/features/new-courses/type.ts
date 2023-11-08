export interface CourseTypes {
  category: any;
  rating_view: number;
  id: string;
  image: { original: string; thumbnail: string };
  level: {
    id: number;
    name: string;
    slug: string;
    status: number;
    created_at: string;
    deleted_at: string | null;
    updated_at: string | null;
  };
  slug: string;
  title: string;
  total_Lecture: number;
  total_candidate: number;
  total_hit: number;
}

export interface MetaCoursesType {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: string;
  to: number;
  total: number;
}

export interface CoursesType {
  coursesLoading: boolean;
  data: CourseTypes[];
  meta: MetaCoursesType;
}

export const defaultNewCoursesReducer: CoursesType = {
  coursesLoading: false,
  data: [],
  meta: {
    current_page: 0,
    from: 0,
    last_page: 0,
    path: "",
    per_page: "0",
    to: 0,
    total: 0,
  },
};
