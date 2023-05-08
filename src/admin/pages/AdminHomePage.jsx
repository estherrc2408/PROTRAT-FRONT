import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetch } from '../../user/hooks/useFetch'
import { UserData } from '../components/UserData';
import { takeProfiles } from '../../features/admin/adminSlice';

export const AdminHomePage = () => {
  const { getData, isLoading } = useFetch();
  let { profiles } = useSelector(state => state.admin);

  const loader = () => {
    getData(`/api/users/`, 'GET', {}, takeProfiles)
  }

  useEffect(() => {
    loader();
  }, [])

  return (
    <>
      {/* {isLoading &&
        <tr>
          <th>...</th>
          <th>...</th>
          <th>...</th>
          <th>...</th>
          <th>...</th>
        </tr>
      } */}

      <div className=" overflow-x-auto w-[100%]">
        <table className="table w-[100%]">
          {/* head */}
          <thead className=' w-[100%]'>
            <tr>
              <th>Name</th>
              <th>User</th>
              <th>Projects</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {profiles && profiles.map((profile) =>
              <UserData key={profile.iduser}{...profile} />
            )}

          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Name</th>
              <th>User</th>
              <th>Projects</th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </>
  )
}
