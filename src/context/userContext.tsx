"use client"
import React, { createContext, useState } from 'react';
import { User } from "@/types/user";

export interface UserContextType {
    user: User | undefined;
    setUser: (userData: User | undefined) => void;
}

interface UserContextProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<User | undefined>(undefined);

    const setUser = (userData: User | undefined) => {
        setUserData(userData)
    };

    const contextValue: UserContextType = {
        user: userData,
        setUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};





