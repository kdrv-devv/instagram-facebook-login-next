"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut} from "next-auth/react";
// components/Layout.js
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { data: session, status  } = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 h-16 fixed w-full top-0 z-30">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center">
            {/* Hamburger menu */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <span className="ml-4 text-xl font-semibold">Dashboard</span>
          </div>

          {/* Profile section */}
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center gap-2">
              <span className="mr-4">{session.user?.name}</span>
              <button onClick={()=>{signOut()}} >Log out</button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <Link href={"/login"}><span className="mr-4">Log in </span></Link>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 text-white transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="block px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Analytics
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Reports
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Settings
            </a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <main
        className={`flex-1 mt-16 transition-all duration-200 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-6">
          <h1>salom</h1>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`bg-white border-t border-gray-200 py-4 transition-all duration-200 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600">© Dashboard by kdrv</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
