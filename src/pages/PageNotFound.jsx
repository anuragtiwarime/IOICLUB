export default function PageNotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">The page you are looking for doesn’t exist or has been moved.</p>
      <a href="/" className="mt-6 px-6 py-3 bg-black text-white hover:bg-gray-800">
        Go Back to Home
      </a>
    </div>
  );
}
