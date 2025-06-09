import Link from "next/link";
import { newsData } from "@/app/data";
const YearArchives = ({ params }) => {

  const news = newsData;
  const filter = params?.filter;
  const selectedYear = filter?.[0];
  console.log(selectedYear);
  const findedData = news.filter(i => i.eventDate[2] == selectedYear);
  console.log(findedData);
  return (
    <>

      <div className="flex items-center justify-center gap-16 text-center mx-auto">
        This Year :
        <div className="flex items-center justify-center gap-16">
          <Link href={'/'} >Haus</Link>
          <Link href={'/archive'} >Archives</Link>
          {news.map(i => <div className="flex" key={i.newID}>
            <Link className="cursor-pointer" href={`/archive/${i.eventDate[2]}`}>Year {i.eventDate[2]}</Link>
          </div>)}
        </div>
      </div>
      {findedData && <div className="">
        {findedData.map(elm => <div key={elm.newID} className="w-[90%]  bg-gray-800 mx-auto mt-12 rounded-2xl p-12">
          <img className="rounded-2xl w-full h-96" src={elm.newPic} alt='pic' />
          <p className="">Date : {elm.eventDate[0]}.  {elm.eventDate[1]}.  {elm.eventDate[2]}</p>
          <div className="main flex flex-col gap-12 pt-12 text-left indent-3 max-w-[95%]  mx-auto">
            <p className='title text-2xl text-center'> {elm.newTitle} </p>
            <p className='short_details text-base text-green-200'> {elm.newShortDetails} </p>
            <p className="more_details text-lg "> {elm.newFullDetails} </p>
          </div>
        </div>)}
      </div>}
    </>
  )
}
export default YearArchives;
