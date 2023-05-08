import React from 'react'
import { useSelector } from 'react-redux';
import {useParams,Link} from 'react-router-dom';


export const UserNavBar = () => {
  const path =useParams()
  console.log(path.location);
  const auth = useSelector(state => state.auth);
  const userInfo = useSelector(state => state.users);
  console.log(userInfo)
  const {msg} = auth;

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{msg}</a>
      </div>
      <div className="flex-none gap-2">

 {path.nickname&&
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full overflow-hidden">
              <img src={userInfo.image} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link to="/login">Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
