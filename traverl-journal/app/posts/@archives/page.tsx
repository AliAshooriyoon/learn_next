"use client"
import Link from "next/link";
import { useEffect, useState } from "react"
import { travelData } from "@/data"
const Archive = () => {
  console.log(travelData)
  const [data, setData] = useState([])
  useEffect(() => {
    setData(travelData);

  }, [])
  return (
    <>
      <div className="mx-auto">
        Archives:
        <div className="flex flex-col gap-4 mx-auto items-center justify-center">
          {data?.map((i) => <div className=""> <Link href={`/posts/${i.slug}`}> {i.travelName} </Link> </div>)}
        </div>
      </div>
    </>
  )
}
export default Archive;
