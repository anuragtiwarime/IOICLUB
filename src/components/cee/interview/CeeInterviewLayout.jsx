import { useLocation, Outlet } from "react-router-dom";

const video = {
  id: "M5k3VcflOAg",
  title: "All About CEE Interview Preparation | Live With Kinjal Sengupta Ma'am",
  author: "PW Institute of Innovation"
};

export default function CeeInterviewLayout() {
  const location = useLocation();
  const isInterviewHome = location.pathname === "/cee/interview";

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">CEE Interview</h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
          Prepare for your CEE Interview with the given resources and tips.
        </p>
      </div>

      {isInterviewHome ? (
        // Show YouTube video on base /cee/interview route
        <>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">{video.title}</h2>
            <p className="text-sm text-zinc-400">By {video.author}</p>
          </div>
        </>
      ) : (
        // Show nested route content (like /cee/interview/guide)
        <div className="bg-zinc-700/20 rounded-lg p-4 border border-zinc-600/30">
          <Outlet />
        </div>
      )}
    </div>
  );
}
