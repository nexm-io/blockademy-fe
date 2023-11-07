export interface BlogDetailType {
  category: any;
  comments_count: number | null;
  created_at: string;
  id: number;
  image: any;
  level: string;
  meta_description: string;
  post_type: string;
  read_time: number;
  slug: string;
  tags: Array<{ title: string; slug: string }>;
  title: string;
  total_hit: number;
  user: any;
}

export interface BlockType {
  data: BlogDetailType[];
}

export const defaultBlogsReducer: BlockType = {
  data: [],
};
