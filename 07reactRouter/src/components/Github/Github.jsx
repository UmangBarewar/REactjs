import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/UmangBarewar')
    //  .then(response => response.json()) 
    // response is usually in the format of string , therefore it is converted into string
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    if (!data) {
      return <div>Loading...</div>;
    }
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/UmangBarewar')
    return response.json()
}