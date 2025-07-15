import fs from "fs/promises";
import path from "path";

type Product = {
  id: string;
  name: string;
  price: number;
};

type HomeProps = {
  products: Product[];
};
export default function Home(props: HomeProps) {
  const { products } = props;
  return (
    <div className="home ml-12 mt-12">
      {products.map((i) => <div key={i.id}> {i.name} </div>)}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json")
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products
    }
  }
}
