import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home text-center">

        Home </div>
      <div className="text-center text-2xl mt-12"><Link className="text-center" href={'/archive'}>Archive</Link></div>
    </>
  );
}
