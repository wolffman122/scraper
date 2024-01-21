import clsx from "clsx";
import Link from "next/link";

export default function Brands()
{
  return (
    <Link
      href="/brands/create"
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'                          
      )}>
      Create Brand
    </Link>
  )
}