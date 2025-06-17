"use client"
import { travelData } from "@/data";
import { useState, useEffect } from "react"
const ArchivePost = ({ params }) => {
  const [currentPost, setCurrentpost] = useState(null)
  useEffect(() => {
    setCurrentpost(travelData.find((i) => i.slug == params.slug))
  }, [])

  useEffect(
    () => {
      console.log(currentPost)
    }, [currentPost]

  )
  return (
    <>
      <div className="bg-amber-700 min-w-64 min-h-32 mx-auto flex flex-col gap-6
        items-center justify-center text-2xl rounded-2xl p-4">
        <p className=''>{params.slug}</p>
        {currentPost && <div className="flex flex-col items-center justify-center gap-6 text-lg text-center">
          <p className="">{currentPost.travelShortDetails}</p>
          <p className="">{currentPost.travelDetails}</p>
        </div>}
      </div>
    </>
  )
}

export default ArchivePost;
