import { LucideIcon } from "lucide-react";

interface BoxCardProps {
    title?: string | number;
    subtitle: string;
    icon?: LucideIcon;
    className?: string;
}

export default function BoxCard({
    title = "",
    subtitle = "",
    icon: Icon,
    className = ""
}: BoxCardProps) {
    return (
        <div className={`border max-w-md shadow border-gray-200 bg-white rounded-xl py-2 px-3 ${className}`}>
            <div className="w-9 h-9 my-2 bg-primary-100 rounded-md flex items-center justify-center">
                {Icon && <Icon className="w-5 h-5 text-primary-600" />}
            </div>
            {subtitle && <p className="text-sm my-1 font-normal text-gray-600">{subtitle}</p>}
            <h3 className="text-3xl my-1 font-semibold text-gray-900">{title}</h3>
        </div>
    )
}