export interface Message {
  message: string;
}

export interface SigninDto {
  email: string;
  password: string;
}

export interface SignupDto {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgetDto {
  email: string;
}

export interface ResetPasswordDto {
  email: string;
  password: string;
  confirmPassword: string;
  key: string;
}

export interface UserProfile {
  id: string;
  name: string;
  role: string;
  verified: boolean;
}
