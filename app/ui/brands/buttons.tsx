import { deleteBrand } from "@/app/lib/action";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/outline";4
import Link from "next/link";

export function UpdateBrand({ id }: { id: string}) {
return (
  <Link
    href={`/brands/${id}/edit`}
    className="rounded-md border p-2 bg-orange-700 hover:bg-orange-200"
    id={id}>
    <PencilIcon className="w-5 stroke-white" title="pencil"/>
  </Link>
)
}

export function DeleteBrand({ id }: { id: string}) {
  const deleteBrandWithId = deleteBrand.bind(null, id);

  return (
    <form action={deleteBrandWithId}>
      <button className="rounded-md border p-2 bg-orange-700 hover:bg-orange-200">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 stroke-white" title="trash"/>
      </button>
    </form>
  );
}


