"use client";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { fetchUserData } from "@/services/userService";

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await fetchUserData();
      setUser(newUser);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, fetchUserData: getUserData };
};
