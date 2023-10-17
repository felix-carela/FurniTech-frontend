// import api from './apiConfig';

// const LOCALSTORAGE_KEY: string | undefined = process.env.REACT_APP_LOCALSTORAGE_KEY;

// interface SignInResponse {
//   token: string;
//   user: Record<string, any>;
// }

// export async function signin(username: string, password: string): Promise<SignInResponse> {
//   const response = await api.post('/signin/', { username, password });
//   const { token, user } = response.data;
//   localStorage.setItem(LOCALSTORAGE_KEY, token);
//   localStorage.setItem('user', JSON.stringify(user));
//   return response.data;
// }

// interface SignUpResponse {
//   // Define the expected response type for the signup function
//   // Adjust the types according to your actual response structure
//   // Example: { success: boolean, message: string }
// }

// export async function signup(username: string, email: string, password: string): Promise<SignUpResponse> {
//   const response = await api.post('/signup/', { username, email, password });
//   return response.data;
// }

// interface IsTokenValidResponse {
//   // Define the expected response type for the isTokenValid function
//   // Adjust the types according to your actual response structure
//   // Example: { isValid: boolean, message: string }
// }

// export async function isTokenValid(): Promise<IsTokenValidResponse> {
//   const response = await api.get('/auth/test_token/');
//   return response.data;
// }

export default {};

