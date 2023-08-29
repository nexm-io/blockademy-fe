export interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

export interface AuthResponse {
    error: boolean,
    message: string,
    data: any
}

