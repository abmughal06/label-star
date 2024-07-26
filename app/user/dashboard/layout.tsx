import DashboardSidePanel from "@/components/dashboard_side_panel/side_panel";
import DashboardTopBar from "@/components/dashboard_top_bar/top_bar";

export default function Dashboard({ children }: any) {
  return (
    <main>
      <div className="flex flex-row">
        <div className="w-[260px]">
          <DashboardSidePanel />
        </div>
        <div className="w-full flex-1">
          <DashboardTopBar />
          <div className="w-full p-2 justify-center">{children}</div>
        </div>
      </div>
    </main>
  );
}
