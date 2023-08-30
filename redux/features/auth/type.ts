export interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation?: string;
}

export interface VerifyDetail {
  email: string;
  code: number;
}

export interface AuthResponse {
  error: boolean;
  message: string;
  data: any;
  success: boolean;
  token: string;
}
interface UserRoles {
  id: number;
  slug: string;
  name: string;
  permissions?: string | null;
  created_at: string;
  updated_at: string;
}
export interface UserProps {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  join_date: string;
  last_login: string;
  about: string;
  gender: string;
  phone: string;
  email: string;
  dob: string;
  roles: Array<UserRoles>;
}
export interface AuthState {
  isAuthenticated: boolean;
  user: "";
  isLoading: boolean;
  success: boolean;
  message: string;
  error: boolean;
  token: string;
  data: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: "",
  success: false,
  isLoading: false,
  message: " ",
  error: false,
  token: "",
  data: {},
};
