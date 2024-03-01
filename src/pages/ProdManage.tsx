import Nav from '../components/admin/nav'
import Search from '../components/search'

export default function ProdManage(){
    return(
        <div>
            <Nav></Nav>

            <div className='absolute ml-60 mt-10'>
                <h1 className='text-2xl font-semibold'>
                    Product Management
                </h1>
                <div className='bg-gray-200 h-10'>
                    <Search></Search>
                </div>
                <table className='border border-black'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Artist</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}