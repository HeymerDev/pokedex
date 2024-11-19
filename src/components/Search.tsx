"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams);
    search ? params.set("search", search) : params.delete("search");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid gap-2 mt-4">
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        className="w-full rounded-lg border-gray-200 sm:px-12  p-2 pe-12 text-sm shadow-sm outline-none border-2 focus:border-indigo-500 sm:text-sm"
        placeholder="Pikachu..."
        defaultValue={searchParams.get("search") || ""}
      />
    </div>
  );
};

export default Search;
