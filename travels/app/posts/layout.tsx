import List from "@/components/list/List";

const PostsLayout = ({ archives, latest }) => {
  return (

    <>
      <div className="">
        {/* {children} */}
        {archives}
        {latest}
        {/* <List /> */}
      </div>
    </>
  )
}
export default PostsLayout;
