import { fetchBrands } from "@/app/lib/action";
import clsx from "clsx";
import Link from "next/link";
import { DeleteBrand, UpdateBrand } from "./buttons";

export default async function BrandTable() {
  const brands = await fetchBrands();

  return (
    <div className="mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-orange-200  p-2 md:pt-0">
          <table className="hidden min-w-full text-black md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Brand Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Website
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Create Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  <span>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {brands?.map((brand) => (
                <tr key={brand.id}>
                  <td className="whitespace-nowrap py-3 pl-3 pr-3">
                    <div className="flex items-center gap-3">
                      {brand.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {brand.website}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {brand.createdAt.toISOString().split("T")[0]}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateBrand id={brand.id} />
                      <DeleteBrand id={brand.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 flex justify-start gap-4">
              <Link
                href="/brands/create"
                className={clsx(
                  'flex h-10 items-center rounded-lg bg-orange-700 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'                          
                )}>
                Create Brand
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}