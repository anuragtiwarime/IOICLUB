import { Outlet } from "react-router-dom";

function CEEInterviewLayout() {
  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-0">
      {/* Exam Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">CEE Interview</h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
          Prepare for your CEE Interview with the given resources and tips.
        </p>
      </div>

      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}

export default CEEInterviewLayout;
