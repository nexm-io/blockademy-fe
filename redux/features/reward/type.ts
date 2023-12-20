export type RewardDetails = {
  course_id: string;
  title: string;
  first_name: string;
  last_name: string;
  is_claimed: number;
  claim_at: string;
  certificate_image_url: string;
  certificate_pdf_url: string;
  certificate_id: string;
  issue_nft_status: any;
  complete_assignment_at: string;
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
    is_claimed: 0,
    claim_at: "",
    certificate_image_url: "",
    certificate_pdf_url: "",
    certificate_id: "",
    issue_nft_status: {},
    complete_assignment_at: "",
  },
  rewards: [],
  listRewardLoading: true,
};
