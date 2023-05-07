import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { takeInfo } from '../../features/user/userSlice';

// import { searchProfile } from '../hooks/searchInfo'
import { useFetch } from '../hooks/useFetch';


export const YourInfo = () => {
    //hallar datos user por nickname
    const { nickname } = useParams();
    const { getData, isLoading } = useFetch();

    const userInfo = useSelector(state => state.users);
    console.log(nickname);

    useEffect(() => {
        getData(`/api/users/nickname/${nickname}`, 'GET', {}, takeInfo)
    }, [])


    return (
        <>
            {isLoading &&
                <div className="card card-side bg-base-100 shadow-xl">
                    <h2 className="card-title">Loading...</h2>
                </div>
            }
            {userInfo.iduser &&
                <div className="container p-2.5 columns-1 border-2 border-indigo-600 md: lg: xl:">
                    <div className='overflow-hidden container w-86 h-86 center h-30 block border-2 border-indigo-600'>
                        <img className="object-cover overflow-hidden" src={userInfo.image} alt="Album" />
                    </div>
                    <div className="w-80% center border-2 border-indigo-600">
                        <div className="container text-center">
                            <h2 className="py-5 card-title block border-2 border-indigo-600">{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                            <p className='py-3 border-2 border-indigo-600'>{`Email: ${userInfo.email}`}</p>
                            <p className='py-3 border-2 border-indigo-600'>{`Birth date: ${userInfo.birth_date}`}</p>
                            {userInfo.city && <p className='py-3 border-2 border-indigo-600'>{`City: ${userInfo.city}`}</p>}
                            {userInfo.instagram_nickname && <a className='py-6' href={`https://www.instagram.com/${userInfo.instagram_nickname}/`} />}
                            {userInfo.twitter_nickname && <a className='py-6' href={`https://twitter.com/${userInfo.twitter_nickname}/`} />}
                            {userInfo.linkedIn_url && <a className='py-6' href={userInfo.linkedIn_url} />}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

