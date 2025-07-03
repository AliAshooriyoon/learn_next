"use client"
import { usePathname } from "next/navigation";

const Post = ({ params }) => {
  console.log(params?.slug)
  const adresse = usePathname();
  console.log(adresse)
  return (
    <>
      <div className="">
        Post
        {` ${adresse.includes('/posts/') && params?.slug[0]}`}
      </div>
    </>
  )
}
export default Post;
