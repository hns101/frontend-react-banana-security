import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    const toggleAuth = () => setIsAuth(prev => !prev);

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
}