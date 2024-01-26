"use client"

import { PowerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SiteLogo from "./site-logo";
import NavLinks from "./nav-links";
import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton() {
  const { data: session } = useSession();

  if(session) {
    return (
      <>
        {session?.user?.name} <br />
        <button 
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          onClick={() => signOut()}>
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </>
    );
  }

  return (
    <>
      <button 
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        onClick={() => signIn()}>
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign In</div>
      </button>
    </>
  );
}
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <SiteLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <AuthButton className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" />
        </form>
      </div>
    </div>
  )
}