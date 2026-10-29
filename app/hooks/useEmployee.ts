import { useEffect, useState } from "react";
import api from "../lib/api";
import type { DashboardStats } from "../types/dashboard";

export default function useEmployee() {
    const [employee, setEmployee] = useState<DashboardStats | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                setLoading(true);
                const res = await api.get<DashboardStats>("/employee");
                setEmployee(res.data);
            } catch (err: any) {
                setError(err?.message ?? "Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchEmployee();
    }, []);

    return { employee, error, loading };
}