import Nav from "../../components/admin/nav";
import Search from "../../components/search";
import "./table.css";
import { useEffect, useState } from "react";
import EditProduct from "../../components/overlay/EditProduct";
import AddProduct from "../../components/overlay/AddProduct";
import Delete from '../../components/overlay/DeleteProduct';

export default function ProdManage() {
  const [products, setProduct] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/art")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",
  });

  return (
    <div>
      <Nav></Nav>

      <div className="ml-[12rem] mr-6 p-10">
        <h1 className="text-2xl font-semibold pb-4">Product Management</h1>
        <div className="rounded-full bg-slate-200 h-14 flex justify-between items-center">
          <AddProduct className="w-6 ml-6"></AddProduct>
          {/* <img src={Cart} className='w-6 ml-10'></img> */}
          <div className="mr-2">
            <Search></Search>
          </div>
        </div>
        <table className="mt-10">
          <tr>
            <th className="w-1/12">ID</th>
            <th className="w-1/3">Name</th>
            <th className="w-1/12">Type</th>
            <th className="w-1/6">Artist</th>
            <th className="w-1/6">Price</th>
            <th className="w-1/12">Edit</th>
            <th className="w-1/12">Delete</th>
          </tr>
          {
            /*TESTER*/
            products.map((product) => (
              <tr>
                <td>{product.art_id}</td>
                <td>{product.art_name}</td>
                <td>{product.type}</td>
                <td>{product.artist_name}</td>
                <td>{formatter.format(product.price).replace("THB", "")}</td>
                <td>
                  <EditProduct
                    className="w-4"
                    art_id={product.art_id}
                    art_name={product.art_name}
                    price={product.price}
                    art_type={product.type}
                    descript={product.descript}
                    picture={product.picture}
                    artist_id={product.artist_id}
                  >
                  </EditProduct>
                </td>
                <td>
                  <Delete art_id={product.art_id}></Delete>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
}
