const Layoutposts = ({ archives, latest, children }) => {
  return (
    <>
      <div className="">
        Posts
        {archives}
        {latest}
        {children}
      </div>
    </>
  )
}
export default Layoutposts;
