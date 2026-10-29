import RecordCards from "@/app/components/dashboard/RecordCards";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <Image

         /> */}
          <div>
            <h1 className="text-lg font-bold">Good Morning, Admin</h1>
            <p className="text-sm text-gray-500">Here's what's happening with your team today!</p>
          </div>
        </div>
      </div>
      <RecordCards />
    </div>
  );
}