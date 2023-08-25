interface Country {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}

type Countries = Country[];

type PublicStackNavigator = {
  Onboarding: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ProfileSetup: undefined;
  SignupSuccess: undefined;
};
type ProtectedStackNavigator = {
  Home: undefined;
};

interface User {
  id: string;
  email_address: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  iat: number;
  exp: number;
  total_balance: number;
  total_returns: number;
  token: string;
  date_of_birth: Date;
  username: string;
  phone_number: string;
  created_at: string;
}

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
type SignUpUserResponse = Pick<
  User,
  | 'id'
  | 'email_address'
  | 'first_name'
  | 'last_name'
  | 'username'
  | 'phone_number'
  | 'created_at'
  | 'date_of_birth'
  | 'token'
>;

interface AuthSlice {
  user?: User;
  token?: string;
  signupCredentials?: Partial<SignUpRequest>;
}

type SignInRequest = Pick<User, 'email_address' | 'password'>;
type SignUpRequest = Pick<
  User,
  | 'email_address'
  | 'password'
  | 'first_name'
  | 'last_name'
  | 'date_of_birth'
  | 'username'
  | 'phone_number'
>;

type DynamicApp = {
  [key: string]: any;
};

type InfoModalData = {
  message: string;
  title: string;
} | null;
