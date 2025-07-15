"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const myRouter = useRouter();
  return (
    <>
      <div className="flex gap-4 text-center">
        Header
        <Link href={'/'} >
          Home Seite
        </Link>
        <Link href={'/contact'}> Contact </Link>
        <span onClick={myRouter.back} className="cursor-pointer">
          page back
        </span>
      </div>
    </>
  )
}
export default Header;
