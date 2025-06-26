"use client"
import { travelData } from "@/data";
import { useState, useEffect } from "react"
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
const ArchivePost = ({ params }) => {
  const [currentPost, setCurrentpost] = useState(null)
  const path = usePathname()
  const data = travelData;
  const isHereJustPosts = path == '/posts';
  console.log(!isHereJustPosts)
  console.log(currentPost)
  useEffect(() => {
    // travelData.find((i) => i.slug == params.slug[0])
    setCurrentpost(!isHereJustPosts && travelData.find((i) => i.slug == params.slug[0])
    );
  }, [])

  useEffect(
    () => {

    }, [currentPost]

  )
  return (
    <>
      <div className="bg-cyan-900 max-w-[70%] min-w-64 min-h-32 mx-auto flex flex-col gap-6
        items-center justify-center text-3xl rounded-2xl p-8">

        {isHereJustPosts ? data?.map((i) => <div className="">
          <Link href={`/posts/${i.slug}`}> {i.travelName} </Link> </div>) : currentPost ? <div>
            <p className=''>{currentPost?.travelName}</p>
            <div className="flex flex-col  gap-12 text-lg text-left">
              <p className="text-2xl">{currentPost.travelShortDetails}</p>
              <p className="text-lg">{currentPost.travelDetails}</p>
              <p className="text-left text-xl"> Date: {currentPost.date[0]}.{currentPost.date[1]}.{currentPost.date[2]} </p>
            </div>
          </div> : <p>Error</p>}
      </div>
    </>
  )
}
// Ali Ashouriyoun
export default ArchivePost;
