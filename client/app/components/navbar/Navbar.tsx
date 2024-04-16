import {
  SelectValue,
  SelectTrigger,
  Select,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ShoppingCartIcon from "./ShoppingCartIcon";
import DiceFits from "./DiceFits";
import UserProfileIcon from "./UserProfileIcon";

export default function Component() {
  return (
    <div className="bg-transparent">
      <nav className="flex justify-center items-center py-4 px-8">
        <DiceFits/>
        <ShoppingCartIcon className="justify-between text-white w-6 h-6" />
        <UserProfileIcon className="justify-between text-white w-6 h-6" />
      </nav>
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
    </div>)};