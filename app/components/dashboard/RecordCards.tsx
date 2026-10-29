"use client"

import { BaggageClaim, Calendar, File, User, Users, Wallet } from "lucide-react";
import BoxCard from "../common/BoxCards";
import useEmployee from "@/app/hooks/useEmployee";
export default function RecordCards() {
    const { employee, loading, error } = useEmployee()
    return (
        <div className="my-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <BoxCard
                title={employee?.totalEmployees?.value ?? "N/A"}
                subtitle="Total Employees"
                className="text-3xl font-bold"
                icon={Users}
            />
            <BoxCard
                title={employee?.presentToday?.value ?? "N/A"}
                subtitle="Present Today"
                className="text-3xl font-bold"
                icon={User}
            />
            <BoxCard
                title={employee?.onLeave?.value ?? "N/A"}
                subtitle="On Leave"
                className="text-3xl font-bold"
                icon={Calendar}
            />
            <BoxCard
                title={employee?.pendingLeaveRequests?.value ?? "N/A"}
                subtitle="Pending Leave Requests"
                className="text-3xl font-bold"
                icon={File}
            />
            <BoxCard
                title={employee?.monthlyPayroll?.display ?? "N/A"}
                subtitle="Monthly Payroll"
                className="text-3xl font-bold"
                icon={Wallet}
            />
        </div>
    )
}