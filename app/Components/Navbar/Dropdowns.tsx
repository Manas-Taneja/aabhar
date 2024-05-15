import React from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../next-components/ui/select';
export default function Dropdowns(){
    return(

<div className="flex justify-between items-center px-8">
        <Select>
          <SelectTrigger className="mr-2 bg-black text-white border-0">
            <SelectValue placeholder="Core Collection" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="Legacy_Collection">Legacy Collection</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="mr-2 bg-black text-white border-0">
            <SelectValue placeholder="All Collections" />
          </SelectTrigger>
          <SelectContent position="popper">
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