import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="grid place-content-center h-screen text-indigo-700">
      <div className="text-center space-y-4">
        <h1 className="text-3xl">Not Found</h1>
        <p>Pokemon No encontrado 😒</p>
        <Link
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver los pokemones
        </Link>
      </div>
    </div>
  );
}
