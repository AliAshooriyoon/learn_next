import Link from "next/link";
import Header from "./component/header/Header";

export default function Home() {
  return (
    <>
      <div className="home text-center">

        <Header />
        Home </div>
      <Link href={'/archive'}>Archive</Link>
    </>
  );
}
