'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import useDebounceCallback from '../lib/hooks/use-debounce-callback';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const router = useRouter()

  const debounce = useDebounceCallback((query: string)=> {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1')
    if(query) {
      params.set('query', query)
    } else {
      params.delete('query');
    }

    router.replace(`${pathname}?${params.toString()}`)
  }, 300)


  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        defaultValue={searchParams.get('query')??''}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => debounce(e.target.value)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
