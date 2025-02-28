import React, { useState } from "react";

const RankPredictor = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Loading Spinner */}
      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-600 border-solid"></div>
        </div>
      )}

      {/* Iframe with loading effect */}
      <main className={`flex-grow p-4 ${loading ? "hidden" : ""}`}>
        <iframe
          src="https://script.google.com/a/macros/pw.live/s/AKfycbzx2pgKn84XHDZivc9esnf2qGdtQ90J_uuA7TtIJks8zjKUoSvyVfbZP2fS0Zcqho8/exec"
          title="Rank Predictor"
          className="w-full h-full border-none"
          onLoad={handleLoad}
        />
      </main>
    </div>
  );
};

export default RankPredictor;
