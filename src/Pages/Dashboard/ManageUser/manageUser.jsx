import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from "react-icons/md";
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const ManageUser = () => {

  const [axiosSecure] = useAxiosSecure();


  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })

  const handleMakeAdmin = user => {
    fetch(` http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin now`,
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
  }

  const handleDelete = user => {
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

        fetch(` http://localhost:5000/users/${user._id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })

      }
    });
  }

  return (
    <div className='w-full'>
      <h1 className='ms-20 pb-10'>Total users: {users.length}</h1>

      <div>
        <div className="overflow-x-auto md:ms-40">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role == 'admin' ? 'admin' :
                    <button onClick={() => handleMakeAdmin(user)} className='btn btn-sm bg-green-600 text-white hover:text-red-600'>
                      <MdAdminPanelSettings className=' hover:text-green-600 text-white text-2xl ' />
                    </button>
                  }</td>
                  <td><button onClick={() => handleDelete(user)} className='btn btn-sm bg-red-600 text-white hover:text-red-600'><FaTrashAlt></FaTrashAlt></button></td>
                </tr>
                )
              }


            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageUser;