import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center text-center h-screen text-4xl font-headingAlt">
      <div>
        <h1 className="bg-gradient-to-tr from-purple-500 to-purple-100 text-transparent bg-clip-text text-9xl">
          404
        </h1>
        <h2 className="bg-gradient-to-tr from-purple-100 to-purple-500 text-transparent bg-clip-text text-5xl">
          Sayfa Bulunamadı!
        </h2>
      </div>
    </div>
  );
}
