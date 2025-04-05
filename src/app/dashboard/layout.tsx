import SideNav from "../ui/dashboard/sideNav";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-4">
      <div className="w-full md:w-64">
        <SideNav />
      </div>

      <div className="border flex-grow flex justify-center items-center">{children}</div>
    </div>
  );
}

export default layout;
