
import React from "react";

const RankPredictor = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
      {/* Main Content with Iframe */}
      <main className="flex-grow p-4">
        <iframe
          src="https://script.google.com/a/macros/pw.live/s/AKfycbzx2pgKn84XHDZivc9esnf2qGdtQ90J_uuA7TtIJks8zjKUoSvyVfbZP2fS0Zcqho8/exec"
          title="Rank Predictor"
          className="w-full h-full border-none"
        />
      </main>
      
    </div>
   
    </>
  );
};

export default RankPredictor;
