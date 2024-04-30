
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const ListTr = ({spot}) => {
    const {spotName,seasonality,travelTime,_id}=spot;

    

    const handleDelete= _id =>{
        console.log(_id)

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            


        fetch(`http://localhost:5000/new-spot/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            if(data.deletedCount > 0){
                // notify('deleted successfully');
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
            }
        })
    }
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spot Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seasonality</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Travel Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-base-200">
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">{spotName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{seasonality}</td>
                <td className="px-6 py-4 whitespace-nowrap">{travelTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/update-spot/${_id}`}>
                  <button className="text-indigo-600 hover:text-indigo-900">Update</button>

                  </Link>
                  <button onClick={()=> handleDelete(_id)}  className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          
        </div>
    );
};

ListTr.propTypes = {
  spot: PropTypes.shape({
      spotName: PropTypes.string.isRequired,
      seasonality: PropTypes.string.isRequired,
      travelTime: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
  }).isRequired
};

export default ListTr;