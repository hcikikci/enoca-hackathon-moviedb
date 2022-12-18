import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {searchMovies} from "../../features/items/searchMovies";
import {clearSearch} from "../../features/items/movieSlice";
import {useNavigate} from "react-router-dom";

function Searchbar() {
    const [search, setSearch] = useState("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const handleSearch = (event : any) => {
        if (event.target.value) {
            const searchText = event.target.value;
            setSearch(searchText)
        } else {
            setSearch("")
        }
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search.length > 1) {
                // @ts-ignore
                dispatch(searchMovies({'search': search}))
                navigate("/search")
            }
        }, 1500)
        if (search.length <= 1) {
            // @ts-ignore
            dispatch(clearSearch())
        } else {
            return () => clearTimeout(delayDebounceFn)
        }

    }, [search])
    return (
        <div className="pt-[20px]">
            <h2 className="text-white font-poppins font-[600] text-[18px] pb-[24px]">What do you want to watch?</h2>
            <div className="relative w-full">
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse rx="7.57177" ry="7.4819" transform="matrix(-1 0 0 1 9.60621 8.4819)" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.33978 14.0743L1.37122 17" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>


                <input onChange={handleSearch} onClick={handleSearch}  type="text" className="outline-0 block bg-dark-gray w-full rounded-[16px] pl-[24px] py-[10px] font-normal text-[14px] text-gray
                                          placeholder:font-normal placeholder:text-[14px] placeholder:text-gray"  placeholder="Search"/>
            </div>





        </div>
    );
}

export default Searchbar;