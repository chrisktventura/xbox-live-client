export interface User {
  id: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf?: string;
  };

export interface UserEdit {  
  nickname: string;
  password: string;
  confirmPassword: string;
}