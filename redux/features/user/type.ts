export interface Reward {
    is_claimed: number;
    id: number;
    title: string;
    name: string;
    description: string;
    owner: string;
    quantity: number;
    image: {
      original: string;
      thumbnail: string;
    };
  }
  
  export interface UserResponse {
    success: boolean;
    isLoading: boolean;
    message: string;
    data: Array<Reward>;
    error: any;
    detail: Reward | null;
  }