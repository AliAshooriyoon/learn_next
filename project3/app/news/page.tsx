import Image from "next/image";
import { newsData } from "../data.js"
import Link from "next/link.js";
const NewsPage = () => {
  const data = newsData;
  return (
    <>
      <div className="news flex gap-4 mx-auto p-16 flex-col"> News
        {data.map(elm => <div className="w-[37%]  flex gap-4 flex-col rounded-2xl p-4 text-center bg-cyan-800 mx-auto" key={elm.newID}>
          <div className="w-full h-64"><Image src={elm.newPic} alt='picNew' className="w-full h-64" width={2000} height={2000} /></div>
          <p className='text-xl'>{elm.newTitle}</p>
          <p className='text-sm text-gray-900 text-left indent-3'>{elm.newShortDetails}</p>
          <div className="btns" > <Link href={`/news/${elm.eventSlug}`}>
            <button type='button' className="w-40 h-12 bg-stone-800 cursor-pointer rounded-2xl">Voll lesen</button>
          </Link> </div>
          {/* <p className='text-xl'>{elm.newTitle}</p> */}
        </div>)}
      </div>
    </>
  )
}
export default NewsPage;
