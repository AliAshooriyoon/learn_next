const List = (props) => {
  const { products } = props
  return (
    <>
      <div className="pt-12 pl-4">
        {products.map((i) => <div key={i.id}> {i.name} </div>)}
      </div>
    </>
  )

}
export async function returnListWithAsync() {
  return {
    props: {
      products: [{ id: 1, name: "Product1" }]
    }
  }
}
export default List;
