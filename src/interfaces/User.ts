export interface UserLogin {
  username: string,
  password: string
}

export interface NewUser extends UserLogin{
  classe: string,
  level: number,
}

export interface CreatedUser extends NewUser {
  id: number,
}
