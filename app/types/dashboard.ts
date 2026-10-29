export interface StatItem {
    value: number;
    display?: string;
    change: number;
    trend: string;
    sparkline: number[];
}

export interface DashboardStats {
    totalEmployees: StatItem;
    presentToday: StatItem;
    onLeave: StatItem;
    pendingLeaveRequests: StatItem;
    monthlyPayroll: StatItem;
}