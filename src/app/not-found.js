import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mt-2">Página no encontrada</p>
          <p className="text-gray-500 mt-4">
            La página que estás buscando no existe.
          </p>
          <div className="mt-6">
            <Link href="/" legacyBehavior>
              <a className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md shadow-md">
                Volver al inicio
              </a>
            </Link>
          </div>
        </div>
        <div className="bg-yellow-500 h-2"></div>
      </div>
    </div>
  );
};

export default NotFound;
