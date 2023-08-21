type PublicStackNavigator = {
  Onboarding: undefined;
};

type UserResponse = Pick<
  User,
  | 'id'
  | 'email_address'
  | 'first_name'
  | 'last_name'
  | 'username'
  | 'total_balance'
  | 'total_returns'
  | 'token'
>;

interface User {
  id: string;
  email_address: string;
  first_name: string;
  last_name: string;
  username: null;
  iat: number;
  exp: number;
  total_balance: number;
  total_returns: number;
  token: string;
}
interface AuthSlice {
  user?: User;
  token?: string;
}

type SignInRequest = Pick<User, 'email_address' | 'password'>;
