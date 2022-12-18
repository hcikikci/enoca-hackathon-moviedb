import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getDetails} from "../../features/items/getDetails";
import {getReviews} from "../../features/items/getReviews";
import {getCast} from "../../features/items/getCast";

function Details() {
    const [selectedCategory, selectCategory] = useState(1)
    const details = useAppSelector(state => state.itemReducer.movie)
    const dispatch = useAppDispatch()
    const params = useParams()
    useEffect(()=>{
        // @ts-ignore
        dispatch(getDetails({id : params?.id}))
        // @ts-ignore
        dispatch(getReviews({id : params?.id}))
        // @ts-ignore
        dispatch(getCast({id : params?.id}))

    }, [params])
    return (
        <>
            <div className="grid px-[24px] grid-cols-3 flex justify-between py-4 text-white font-montserrat font-[600]">
                <Link to={"/"}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.6809 17.5C12.515 17.5 12.3492 17.4394 12.2182 17.3097L6.52723 11.6687C5.60201 10.7516 5.60201 9.24621 6.52723 8.32913L12.2182 2.68818C12.4714 2.43727 12.8903 2.43727 13.1435 2.68818C13.3966 2.93908 13.3966 3.35436 13.1435 3.60526L7.45246 9.24622C7.03349 9.6615 7.03349 10.3363 7.45246 10.7516L13.1435 16.3926C13.3966 16.6435 13.3966 17.0588 13.1435 17.3097C13.0125 17.4308 12.8467 17.5 12.6809 17.5Z"
                            fill="white"/>
                    </svg>
                </Link>
                <span className="text-center">Detail</span>
                <svg className="justify-self-end" width="18" height="24" viewBox="0 0 18 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.00803e-07 2.99973V23.2497C-9.50907e-05 23.38 0.0337268 23.508 0.0981369 23.6212C0.162547 23.7344 0.255325 23.8289 0.367338 23.8953C0.47935 23.9618 0.606737 23.9979 0.736957 24.0002C0.867178 24.0024 0.995744 23.9707 1.11 23.9082L9 19.6032L16.89 23.9082C17.0043 23.9707 17.1328 24.0024 17.263 24.0002C17.3933 23.9979 17.5207 23.9618 17.6327 23.8953C17.7447 23.8289 17.8375 23.7344 17.9019 23.6212C17.9663 23.508 18.0001 23.38 18 23.2497V2.99973C18 2.20408 17.6839 1.44101 17.1213 0.878405C16.5587 0.315796 15.7956 -0.000274658 15 -0.000274658L3 -0.000274658C2.20435 -0.000274658 1.44129 0.315796 0.87868 0.878405C0.316071 1.44101 2.00803e-07 2.20408 2.00803e-07 2.99973Z"
                        fill="#EEEEEE"/>
                </svg>


            </div>
            <img className="w-full " src={"https://image.tmdb.org/t/p/w500/" + details?.backdrop_path} alt=""/>
            <div className="grid grid-cols-3 px-[24px]">
                <div className="col-span-1 -mt-16">
                    <img src={"https://image.tmdb.org/t/p/w500/" + details?.poster_path} className="w-full object-contain rounded-3xl" alt=""/>
                </div>
                <h2 className="col-span-2 font-poppins text-xl text-white pl-4 py-2">{details?.title}</h2>
            </div>
            <div className="grid grid-cols-3 px-[24px] flex place-items-center py-5 text-[#92929D] text-sm">
                <div className="inline-flex space-x-5 gap-x-2 place-items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 1.5V3.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 1.5V3.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.5 5.5H13.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {new Date(details?.release_date).getFullYear()}

                </div>
                <div className="inline-flex space-x-5 gap-x-2 place-items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 4.5V8H11.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    {details?.runtime} Minutes

                </div>
                <div className="inline-flex space-x-5 gap-x-2 place-items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 3.5V12.5" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.5 10.4494C1.49998 10.3342 1.53979 10.2225 1.61268 10.1334C1.68557 10.0442 1.78706 9.98292 1.89995 9.96C2.35166 9.86772 2.75763 9.62224 3.04919 9.26509C3.34075 8.90794 3.5 8.46104 3.5 8C3.5 7.53896 3.34075 7.09206 3.04919 6.73491C2.75763 6.37776 2.35166 6.13228 1.89995 6.04C1.78706 6.01708 1.68557 5.95584 1.61268 5.86664C1.53979 5.77745 1.49998 5.6658 1.5 5.55061V4C1.5 3.86739 1.55268 3.74021 1.64645 3.64645C1.74021 3.55268 1.86739 3.5 2 3.5H14C14.1326 3.5 14.2598 3.55268 14.3536 3.64645C14.4473 3.74021 14.5 3.86739 14.5 4V5.55061C14.5 5.6658 14.4602 5.77745 14.3873 5.86665C14.3144 5.95584 14.2129 6.01708 14.1001 6.04C13.6483 6.13229 13.2424 6.37777 12.9508 6.73492C12.6592 7.09207 12.5 7.53896 12.5 8C12.5 8.46105 12.6592 8.90794 12.9508 9.26509C13.2424 9.62224 13.6483 9.86772 14.1001 9.96001C14.2129 9.98292 14.3144 10.0442 14.3873 10.1334C14.4602 10.2225 14.5 10.3342 14.5 10.4494V12C14.5 12.1326 14.4473 12.2598 14.3536 12.3536C14.2598 12.4473 14.1326 12.5 14 12.5H2C1.86739 12.5 1.74021 12.4473 1.64645 12.3536C1.55268 12.2598 1.5 12.1326 1.5 12V10.4494Z" stroke="#92929D" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    {details?.genres?.[0]?.name}

                </div>


            </div>
            <ul className="hiddenscrollbar px-[24px] text-white flex space-x-6 py-4 overflow-x-auto whitespace-nowrap">
                <li className={`inline-block pb-2 ` + (selectedCategory === 1 ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory(1)}>About Movie</li>
                <li className={`inline-block pb-2 ` + (selectedCategory === 2 ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory(2)}>Reviews</li>
                <li className={`inline-block pb-2 ` + (selectedCategory === 3 ? "border-b-4 border-gray" : null) } onClick={()=>selectCategory(3)}>Cast</li>
            </ul>
            {selectedCategory === 1 ? (
                <div className="text-white px-[24px] text-sm font-poppins pt-3">
                    {details?.overview}
                </div>
            ) : null}
            {selectedCategory === 2 ? (
                <div className="grid grid-cols-1 gap-y-5 px-[24px] pt-5">
                    {details?.reviews?.length > 0 ? (
                        details?.reviews?.map((review : any)=> (
                            <div className="grid grid-cols-4 text-white text-sm font-poppins">
                                <div className="col-span-1 flex flex-col place-items-center space-y-4 text-light-blue">
                                    <img src={(review?.author_details?.avatar_path ?
                                        review?.author_details?.avatar_path?.substring(1) : "/Ellipse 1.png")} className="rounded-3xl p-3" alt=""/>
                                    <span>6.3</span>
                                </div>
                                <div className="col-span-3">
                                    {review?.content}
                                </div>
                            </div>
                        ))
                    ) : null}


                </div>

            ) : null}
            <div className="grid grid-cols-2 gap-4 px-[24px]">
            {selectedCategory === 3 ? (

                    details?.cast?.map((oyuncu : any) => (
                        <div className="mx-auto text-center">
                            <img src={oyuncu?.profile_path ? ("https://image.tmdb.org/t/p/w500/" + oyuncu?.profile_path) : "/Ellipse 1.png"} className="p-4 rounded-3xl w-full" alt=""/>
                            <span className="font-poppins text-white font-normal text-sm text-center mx-auto">{oyuncu?.original_name}</span>
                        </div>
                    ))
            )


             : null}
            </div>
        </>
    );
}

export default Details;