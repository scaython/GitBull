import React from 'react'
import UserCard from '../UserCard'
import { useState } from 'react'



function MainContent() {

    const [query, setQuery] = useState("re")

    const handleSearch = (e) => {

        const input = document.getElementById("search-input")
        let val = input.value
        if (val) {
            setQuery(val);
            console.log(val);
        }
    };
    
    return (

        <div className="">
            <div className="">
                <div className="max-w">
                    <div className="relative mb-40 bg-base-200">
                        <div className=" flex  flex-wrap pt-20 pl-20">
                            <h1 className="text-5xl font-bold ">Let's find coders</h1>
                            <div className="input-group flex mt-10">
                                <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mr-2" id='search-input' />
                                <button className="btn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                        <div className='flex items-center flex-row flex-wrap mt-40'>
                            <UserCard query={query} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainContent