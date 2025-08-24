"use client";
import { UserContext } from "@/context/userContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useContext(UserContext);

    if (!user) redirect("/auth");

    return <>{children}</>;
};

export default DashboardLayout;
