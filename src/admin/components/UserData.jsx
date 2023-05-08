import React from 'react'
import { Link } from 'react-router-dom'

export const UserData = (profile) => {






    return (
        <>

            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={profile.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{`${profile.first_name} ${profile.last_name}`}</div>
                            <div className="text-sm opacity-50">{profile.city}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {profile.email}
                    <br />
                    <span className="badge badge-ghost badge-sm">{profile.nickname}</span>
                </td>
                <td>{profile.num_projects}</td>
                <td>
                    <Link to="" className="btn btn-ghost btn-xs">details</Link>
                </td>
                <td>
                    <button className="btn btn-outline btn-error">DELETE</button>
                </td>
            </tr>
            {/* row 2 */}


        </>
    )
}
