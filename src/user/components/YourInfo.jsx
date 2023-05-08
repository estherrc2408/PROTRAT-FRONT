import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { takeInfo } from '../../features/user/userSlice';


// import { searchProfile } from '../hooks/searchInfo'
import { useFetch } from '../hooks/useFetch';


export const YourInfo = () => {
    //hallar datos user por nickname
    const { nickname } = useParams();
    // const path = useParams();
    // console.log(path)
    const { getData, isLoading } = useFetch();
    const navigate=useNavigate();

    const userInfo = useSelector(state => state.users);
    console.log(nickname);

    const handleClick = () =>{
        navigate(`edit`)
    }

    const loader = () =>{
        getData(`/api/users/nickname/${nickname}`, 'GET', {}, takeInfo)
        console.log('wn carga ',isLoading)
    }



    useEffect(() => {
        loader()
    }, [])


    return (
        <>
            {isLoading &&
                <div className="card card-side bg-base-100 shadow-xl">
                    <h2 className="card-title">Loading...</h2>
                </div>
            }
            {userInfo.iduser &&
                <div className="container px-2.5 columns-1 border-2 border-indigo-600     md:columns-2   lg:flex xl:">
                    <div className='container m-[auto] overflow-hidden my-2.5 h-[25vh] w-[150px] block border-2 border-indigo-600  md:h-[275px] md:w-[250px]  lg:h-[170px] lg:w-[170px] m-8 xl:h-[30vh] xl:w-[26vw]'>
                        <img className="w-[100%] h-[100%] object-cover border-2 border-indigo-600" src={userInfo.image} alt="Album" />
                    </div>
                    <div className="container py-2.5 w-80% center border-2 border-indigo-600 lg:p-10 xl:px-20">
                        <div className="container text-center">
                            <h2 className="py-5 card-title block border-2 border-indigo-600">{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                            <p className='py-3 border-2 border-indigo-600'>{`Email: ${userInfo.email}`}</p>
                            <p className='py-3 border-2 border-indigo-600'>{`Birth date: ${userInfo.birth_date.substring(0,10)}`}</p>
                            {userInfo.city && <p className='py-3 border-2 border-indigo-600'>{`City: ${userInfo.city}`}</p>}
                            {userInfo.instagram_nickname && <a className='py-6' href={`https://www.instagram.com/${userInfo.instagram_nickname}/`} />}
                            {userInfo.twitter_nickname && <a className='py-6' href={`https://twitter.com/${userInfo.twitter_nickname}/`} />}
                            {userInfo.linkedIn_url && <a className='py-6' href={userInfo.linkedIn_url} />}
                        </div>
                    </div>
                    {userInfo.rol=='standar' && <button className="m-[20px] w-[30%] btn btn-success md:m-[0] lg:w-[100px]" onClick={handleClick}>EDIT</button>}
                </div>
            }
        </>
    )
}

