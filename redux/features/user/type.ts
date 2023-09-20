export interface Reward {
    released_date: number;
    reward_released_date: number;
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