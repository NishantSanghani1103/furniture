"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SortBy } from '../data/SortBy';
import { FaRegHeart } from "react-icons/fa";
export default function ProductListing() {

    let [sortButton, setsortButton] = useState(false)

    let [sortButtonTitle, setsortButtonTitle] = useState("sort by")



    return (
        <>
            <section className='max-w-full my-8' id='product-listing'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='product-listing-mid'>
                    <div className='w-full text-center' id='product-listing-mid-heading'>
                        <h2 className=' text-4xl font-semibold'>Product Listing</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/product-listing'} className='text-sm text-[#C09578]'> Product Listing </Link >

                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>
                </div>
            </section>

            <section className='max-w-full' id='product-listing-category'>
                <div className='max-w-[1320px] lg:mx-auto mx-5 ' id='product-listing-category-mid'>
                    <div className='max-w-full grid lg:grid-cols-[25%_auto] gap-8'>
                        <div className='lg:order-1 order-2' id='category'>
                            <div className='h-[500px] overflow-y-scroll border-b-1 border-gray-100 mb-10' >
                                <h2 className='text-3xl font-semibold capitalize'>Categories</h2>
                                <div className='my-6' id='product-listing-category-items'>
                                    <div id='product-listing-category-items'>

                                        <div className='product-listing-category-items-heading'>
                                            <h3 className='text-xl text-[#5A5A5A] font-semibold'>Tables</h3>
                                        </div>
                                        <div className='my-4'>
                                            <ul>
                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Side and End Tables</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Nest Of Tables</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Console Table</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Coffee Table Sets</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Coffee Tables</label>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>


                                        <div className='product-listing-category-items-heading'>
                                            <h3 className='text-xl text-[#5A5A5A] font-semibold'>Living Storage</h3>
                                        </div>

                                        <div className='my-4' id='product-listing-category-items-livingStore'>
                                            <ul>
                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Prayer Units</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Display Unit</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Shoe Racks</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Chest Of Drawers</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Cabinets and Sideboard</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Bookshelves</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Tv Units</label>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className='product-listing-category-items-heading'>
                                            <h3 className='text-xl text-[#5A5A5A] font-semibold'>Mirrors</h3>
                                        </div>

                                        <div className='my-4' id='product-listing-category-items-mirrors'>
                                            <ul>
                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Wooden Mirrors</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>


                                        <div className='product-listing-category-items-heading'>
                                            <h3 className='text-xl text-[#5A5A5A] font-semibold'>Sofa Cum Bed</h3>
                                        </div>

                                        <div className='my-4' id='product-listing-category-items-sofaBed'>
                                            <ul>
                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Wooden Sofa Cum Bed</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='product-listing-category-items-heading'>
                                            <h3 className='text-xl text-[#5A5A5A] font-semibold'>Sofa Sets</h3>
                                        </div>

                                        <div className='my-4' id='product-listing-category-sofa'>
                                            <ul>
                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>L Shape Sofa</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>1 Seater Sofa</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>2 Seater Sofa</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>3 Seater Sofa</label>
                                                    </div>
                                                </li>

                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Wooden Sofa Sets</label>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>

                                        <div className='product-listing-category-items-heading'>
                                            <h3 className='text-xl text-[#5A5A5A] font-semibold'>Swing Jhula</h3>
                                        </div>

                                        <div className='my-4' id='product-listing-category-items-jhulha'>
                                            <ul>
                                                <li className='py-2'>
                                                    <div className='flex items-center gap-3'>
                                                        <input type="checkbox" className='w-[17px] h-[17px]' />
                                                        <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Wooden Jhula</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='h-[400px] overflow-y-scroll border-b-1 border-gray-100 mb-10' id='material'>
                                <h2 className='text-3xl font-semibold capitalize'>Material</h2>
                                <div className='my-6' id='product-listing-material-items'>

                                    <div className='my-4' id='product-listing-material-items'>
                                        <ul>
                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Sheesham Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Teak Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Rose Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Satin Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Sal Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Marandi Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Mahogany Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Mulberry Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Deodar Wood</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>JackFruit</label>
                                                </div>
                                            </li>



                                        </ul>
                                    </div>

                                </div>
                            </div>


                            <div className=' border-b-1 border-gray-100 mb-10' id='color'>
                                <h2 className='text-3xl font-semibold capitalize'>Color</h2>
                                <div className='my-6' id='product-listing-color-items'>

                                    <div className='my-4' id='product-listing-color-items'>
                                        <ul>
                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Burnt Amber</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Golden Teak</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Carbon Black</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Faded Oak</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Weathered Walnut</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Mango Green</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Cobalt Blue</label>
                                                </div>
                                            </li>

                                            <li className='py-2'>
                                                <div className='flex items-center gap-3'>
                                                    <input type="checkbox" className='w-[17px] h-[17px]' />
                                                    <label htmlFor="" className='text-[#5A5A5A] font-[400] text-base'>Black Finish</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div className='lg:order-2 order-1' id='product'>
                            <div className='w-full border-1 p-3 border-gray-100 rounded-sm flex lg:flex-row sm:flex-row flex-col justify-end items-center gap-4' id='product-sortBy'>
                                <p className='text-base text-[#5A5A5A capitalize]'>Sort By : </p>
                                <div className='relative'>
                                    <button className='capitalize border-1 border-gray-100 px-5 py-2 cursor-pointer font-semibold text-[#5A5A5A] flex items-center gap-3 ' onClick={() => setsortButton(!sortButton)}>{sortButtonTitle} <RiArrowDropDownLine className='text-2xl' /> </button>

                                    <div className={`bg-white border-1 border-gray-100 rounded-sm w-[210px]  absolute top-[100%] py-3 ${sortButton ? 'block' : 'hidden'}`}>
                                        <ul>
                                            {
                                                SortBy.map((value, index) => {
                                                    let { id, title } = value
                                                    return (
                                                        <li className='w-full cursor-pointer hover:bg-gray-100 p-2' onClick={() => {
                                                            setsortButton(false)
                                                            setsortButtonTitle(title)
                                                        }}>
                                                            <p className='text-base capitalize font-normal'>{title}</p>
                                                        </li>
                                                    )
                                                })
                                            }


                                        </ul>

                                    </div>
                                </div>
                                <p>Showing 1–1 of 1 results</p>
                            </div>

                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 my-8'>
                                
                                <div className='shadow-lg shadow-gray-300 bg-white '>
                                    <figure>
                                        <img src="/images/1617981904164Hrithvik Stool__.jpg" alt="" />
                                    </figure>
                                    <div className='text-center'>
                                        <p className='text-sm py-3'>Side and End Tables</p>
                                        <h2 className='text-[15px] font-semibold hover:text-[#C09578] hover:cursor-pointer'>Hrithvik Stool</h2>
                                        <hr className='w-[80%] mx-auto border-1 h-px border-gray-100 my-2' />
                                        <p className='py-3'>
                                            <span className='line-through text-gray-600 font-semibold text-[14px]'>Rs.7,000</span>&nbsp;&nbsp;
                                            <span className='text-[16px] text-[#C09578] font-bold'> Rs.6,000</span>
                                        </p>
                                        <div className='flex gap-1 justify-center my-5'>
                                            <div className='w-[35px] h-[35px] bg-gray-200 flex justify-center items-center hover:bg-[#C09578] hover:cursor-pointer'>
                                                <FaRegHeart className='text-xl' />
                                            </div>
                                            <div>
                                                <button className='capitalize border-0 bg-gray-200 text-sm text-gray-700 border-gray-300 h-[35px] px-4 hover:cursor-pointer hover:bg-[#C09578] '>add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
