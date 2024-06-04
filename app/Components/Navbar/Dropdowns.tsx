import React from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../next-components/ui/select';
import Link from 'next/link';
export default function Dropdowns(){
    return(

<div className="flex justify-between items-center px-8">
        <Select>
          <SelectTrigger className="mr-2 bg-black text-white border-0">
            <SelectValue placeholder="Core Collection" />
          </SelectTrigger>
          <SelectContent className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50" position="popper">
            <Link href='/legacy-collection'> Legacy Collection</Link>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="mr-2 bg-black text-white border-0">
            <SelectValue  placeholder="All Collections" />
          </SelectTrigger>
          <SelectContent className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50" position="popper">
            <SelectItem value="https://google.com">Men</SelectItem>
            <SelectItem value="women">Women</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="mr-2 bg-black text-white border-0">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="https://google.com">Men</SelectItem>
            <SelectItem value="women">Women</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )};