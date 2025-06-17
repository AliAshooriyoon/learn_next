"use client"
import { travelData } from "@/data";
import { useState, useEffect } from "react"
const ArchivePost = ({ params }) => {
  const [currentPost, setCurrentpost] = useState(null)

  // {data?.map((i) => <div className=""> <Link href={`/posts/${i.slug}`}> {i.travelName} </Link> </div>)}

  useEffect(() => {
    setCurrentpost(travelData.find((i) => i.slug == params.slug[0]));
  }, [])

  useEffect(
    () => {
      console.log(currentPost)
    }, [currentPost]

  )
  return (
    <>
      <div className="bg-cyan-900 max-w-[70%] min-w-64 min-h-32 mx-auto flex flex-col gap-6
        items-center justify-center text-3xl rounded-2xl p-8">
        <p className=''>{currentPost?.travelName}</p>
        {currentPost && <div className="flex flex-col  gap-12 text-lg text-left">
          <p className="text-2xl">{currentPost.travelShortDetails}</p>
          <p className="text-lg">{currentPost.travelDetails}</p>
          <p className="text-left text-xl"> Date: {currentPost.date[0]}.{currentPost.date[1]}.{currentPost.date[2]} </p>
        </div>}
      </div>
    </>
  )
}

export default ArchivePost;
