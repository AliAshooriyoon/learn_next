import Link from "next/link";
import { newsData } from "@/app/data";
const YearArchives = ({ params }) => {

  const news = newsData;
  console.log(params.filter)
  return (
    <>
      <div className="flex items-center justify-center gap-16 text-center mx-auto">
        This Year :
        <div className="flex items-center justify-center gap-16">
          all Archives
          {news.map(i => <div className="flex" key={i.newID}>
            <Link className="cursor-pointer" href={`/archive/${i.eventDate[2]}`}>Year {i.eventDate[2]}</Link>
          </div>)}
        </div>
      </div>
    </>
  )
}
export default YearArchives;
