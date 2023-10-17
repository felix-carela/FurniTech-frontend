// import React, { createContext, useEffect, useState } from "react";
// // import { LOCALSTORAGE_KEY } from "../api/baseURL";

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// }

// export interface AuthContextType {
//   isLoggedIn: boolean;
//   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
//   user: User;
//   setUser: React.Dispatch<React.SetStateAction<User>>;
//   handleLogout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | null>(null);

// interface AuthContextComponentProps {
//   children: React.ReactNode;
// }

// const AuthContextComponent: React.FC<AuthContextComponentProps> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [user, setUser] = useState<User>({ id: 0, name: "", email: "" });

//   useEffect(() => {
//     const token = localStorage.getItem(LOCALSTORAGE_KEY);
//     const userLocalStorage = localStorage.getItem("user");
//     setIsLoggedIn(!!token);

//     if (userLocalStorage) {
//       setUser(JSON.parse(userLocalStorage));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   const handleLogout = () => {
//     localStorage.removeItem(LOCALSTORAGE_KEY);
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

export default {};
