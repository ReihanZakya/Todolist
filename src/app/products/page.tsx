import AddProducts from "./addProducts";
import DeleteProducts from "./deleteProduct";
import UpdateProducts from "./updateProduct";

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products/", {
    cache: "no-store",
  });
  return res.json();
}
export default async function productList() {
  const products: Product[] = await getProducts();
  return (
    <div className='m-10'>
      <div className='py-2'>
        <AddProducts />
      </div>
      <div className='overflow-x-auto p-10 rounded-md'>
        <table className='table w-full'>
          {/* head */}
          <thead className='bg-gray-200'>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => (
              <tr key={product.id} className='hover'>
                <th>{index + 1}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td className='flex'>
                  <DeleteProducts {...product} />
                  <UpdateProducts {...product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
