import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MessageCircleQuestion } from "lucide-react";

function CEEInterviewLayout() {
  const location = useLocation();

  const isInterviewHome = location.pathname === "/cee/interview";

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-0">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">CEE Interview</h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
          Prepare for your CEE Interview with the given resources and tips.
        </p>
      </div>

      {isInterviewHome ? (
        // Show guide button on home
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <NavLink
            to="/cee/interview/guide"
            className="bg-zinc-700/50 hover:bg-zinc-700/80 border border-zinc-600/50 rounded-lg p-4 transition-all hover:shadow-md hover:shadow-blue-900/20 group"
          >
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-md bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30">
                <MessageCircleQuestion size={16} />
              </span>
              <div>
                <h3 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors text-base sm:text-lg">
                  Tips & Guide
                </h3>
                <p className="text-sm text-zinc-400">
                  Get guidance and preparation strategies
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      ) : (
        // Show the guide page content
        <div className="bg-zinc-700/20 rounded-lg p-4 border border-zinc-600/30">
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default CEEInterviewLayout;
