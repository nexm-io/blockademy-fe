export interface AccountSettingResponse {
  success: boolean;
  isLoading: boolean;
  message: string;
  data: AccountSettingData | null;
}

export interface AccountSettingData {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  password_available: boolean;
  join_date: string;
  last_login: string;
  about: string;
  socials: null;
  gender: string;
  phone: string;
  email: string;
  dob: string;
}
