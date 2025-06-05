import { newsData } from "@/app/data";
const NewPage = ({ params }) => {
  const data = newsData;
  console.log(data);
  return (
    <>
      <div className="newPage">New Page
        {params.slug}
      </div>
    </>
  )
}
export default NewPage;
