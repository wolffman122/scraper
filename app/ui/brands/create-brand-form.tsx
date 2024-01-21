'use client'
import { createBrand } from "@/app/lib/action";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
  message: null,
};

export default function CreateBrandForm() {
  const [state, formAction] = useFormState (createBrand, initialState);

  return (
    <form action={formAction}>
      <div className="round-md bg-gray-50 p-4 md:p-6">
        {/* Brand Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Enter a brand name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />  
            </div>
          </div>
        </div>
        {/* Website URL */}
        <div className="mb-4">
          <label htmlFor="url" className="mb-2 block text-sm font-medium">
            Enter a website URL
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                type="text"
                name="url"
                id="url"
                autoComplete="url"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />  
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/brands"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
              Cancel
          </Link>
          <Button type="submit">Create Brand</Button>
        </div>
      </div>
    </form>
  )
}