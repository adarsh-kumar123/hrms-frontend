import AppHeader from "../layout/AppHeader";
import AppSidebar from "../layout/AppSideBar";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AppSidebar/>
      <div className="ml-64 flex min-h-screen flex-col">
        <AppHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}