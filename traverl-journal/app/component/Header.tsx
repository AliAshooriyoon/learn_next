import Link from "next/link";

const Header = () => {
  return <>
    <div className="w-full h-16 bg-cyan-600 flex items-center">
      <div className="flex mx-auto gap-24 text-2xl">
        <span className="cursor-pointer">  <Link href={'/'}> Haus </Link> </span>
        <span className="cursor-pointer"><Link href={'/posts'}> Posts </Link></span>
        <span className="cursor-pointer"><Link href={'/about'}> About </Link></span>
      </div>
    </div>
  </>
}
export default Header;
