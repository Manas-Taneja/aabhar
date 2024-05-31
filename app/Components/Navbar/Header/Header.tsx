import ShoppingCartIcon from "./ShoppingCartIcon";
import DiceFits from "./DiceFits";
import UserProfileIcon from "./UserProfileIcon";
import Link from "next/link";

export default function Header() {
    return(
  <div className="bg-black">
    <nav className="flex justify-center items-center py-4 px-8">
      <DiceFits />
      <Link href='/about'><ShoppingCartIcon className="justify-between text-white w-6 h-6" /></Link>
      <Link href="/about"><UserProfileIcon className="justify-between text-white w-6 h-6" /></Link>
    </nav>
  </div>)
}


