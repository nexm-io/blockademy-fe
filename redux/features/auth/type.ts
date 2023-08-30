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
    success: boolean;
    error: boolean,
    message: string,
    data: any
}

