import {
  SelectValue,
  SelectTrigger,
  Select,
  SelectItem,
  SelectContent,
} from "../next-components/ui/select";
import ShoppingCartIcon from "./ShoppingCartIcon";
import DiceFits from "./DiceFits";
import UserProfileIcon from "./UserProfileIcon";
import Dropdowns from "./Dropdowns";

export default function Component() {
  return (
    <div className="bg-transparent">
      <nav className="flex justify-center items-center py-4 px-8">
        <DiceFits/>
        <ShoppingCartIcon className="justify-between text-white w-6 h-6" />
        <UserProfileIcon className="justify-between text-white w-6 h-6" />
      </nav>
      <div>
        <Dropdowns />
      </div>

    </div>)};