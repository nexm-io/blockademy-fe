export type RewardDetails = {
  course_id: string;
  title: string;
  first_name: string | null;
  last_name: string | null;
  assignment_status: {
    name: string;
    slug: string;
  };
  is_completed_assignment: number;
  assigment_id: number;
  is_claimed: number;
  claim_at: string;
  certificate_image_url?: string;
  certificate_pdf_url?: string;
};

export type RewardReducerType = {
  rewardDetailLoading: boolean;
  rewardDetails: RewardDetails;
  rewards: RewardDetails[];
  listRewardLoading: boolean;
};

export const defaultRewardReducer: RewardReducerType = {
  rewardDetailLoading: true,
  rewardDetails: {
    course_id: "",
    title: "",
    first_name: "",
    last_name: "",
    assignment_status: {
      name: "",
      slug: "",
    },
    is_completed_assignment: 0,
    assigment_id: 0,
    is_claimed: 0,
    claim_at: "",
  },
  rewards: [],
  listRewardLoading: true,
};
