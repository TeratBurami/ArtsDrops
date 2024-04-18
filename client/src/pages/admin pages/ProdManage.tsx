import Nav from "../../components/admin/nav";
import "./table.css";
import { useEffect, useState } from "react";
import EditProduct from "../../components/overlay/EditProduct";
import AddProduct from "../../components/overlay/AddProduct";
import Delete from '../../components/overlay/DeleteProduct';
import SearchIcon from '../../assets/images/magnifying-glass-solid.svg'

export default function ProdManage(this: any) {

  //state of the data
  const [products, setProduct] = useState<any[]>([]);
  //state of search data
  const [search, setSearch] = useState('')

  //get the data and set it to the state
  useEffect(() => {
    fetch("http://localhost:3333/art")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);

  //get the data by the text in the search bar
  const handleSubmit = () => {
    fetch(`http://localhost:3333/art?admin_search=${search}`)
      .then(res => res.json())
      .then(
        result => setProduct(result)
      )
  }

  //handle press enter to search
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  //currency formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "THB",
  });

  return (
    <div>
      <Nav></Nav>

      <div className="ml-[12rem] mr-6 p-10">
        <h1 className="text-2xl font-semibold pb-4">Product Management</h1>
        <div className="rounded-full bg-slate-200 h-14 flex pr-2 justify-between items-center">
          <AddProduct className="w-6 ml-6"></AddProduct>
          <div className='hover:border-black rounded-full w-1/2 pl-3 h-3/4 p-2 flex border-[1.3px] border-[#C4C4C4] text-slate-600 focus-within:border-blue-600'>
            <input onKeyUp={handleKeyPress.bind(this)} onChange={(newData) => setSearch(newData.target.value)} id='search' type="text" placeholder='Search...' className='pl-4 focus:outline-none bg-transparent w-full' />
            <img onClick={handleSubmit} src={SearchIcon} alt="" className='cursor-pointer w-[15px]' />
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
