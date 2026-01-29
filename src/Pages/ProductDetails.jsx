import React, { useState } from 'react'
import Button from '../Components/UI/Button'
import imgOne from '../assets/ProductImages/productOne.png'
import imgTwo from '../assets/ProductImages/productTwo.png'
import imgThree from '../assets/ProductImages/productThree.png'
import { ChevronUp, ChevronDown } from "lucide-react";
import imgFour from '../assets/ProductImages/shbackgound.png'
import Testmonial from '../Components/Testmonial.jsx'
import VideoSection from '../Components/VideoSection.jsx'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function handleIncrement() {
        setQuantity((prev) => {
            return prev < 10 ? prev + 1 : prev
        })
    }

    function handleDecrement() {
        setQuantity((prev) => {
            return prev > 1 ? prev - 1 : prev
        })
    }
    function handleAddress(e) {
        setAddress(e.target.value)
    }
    function handleCustomerDetails() {
        navigate('/customer-details/')
    }

    return (
        <>
            <section className="w-full">
                <div className="max-w-[1280px] mx-auto px-16 sm:px-6 lg:px-8 lg:px-16 py-6" >

                    <button className='py-4'>Back to home</button>

                    {/* MAIN GRID with fixed height */}
                    <div className="grid grid-cols-[160px_474px_482px] gap-3 h-[550px]">

                        {/* COLUMN 1: Thumbnails */}
                        <div className="flex flex-col gap-6 h-full overflow-y-auto">
                            <img src={imgOne} alt="abc" className="w-full h-[170px] object-cover rounded-xl" />
                            <img src={imgTwo} alt="efg" className="w-full h-[170px] object-cover rounded-xl" />
                            <img src={imgThree} alt="hij" className="w-full h-[170px] object-cover rounded-xl" />
                        </div>

                        {/* COLUMN 2: Main Image */}
                        <div className="h-full">
                            <img src={imgOne} alt="abc" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* COLUMN 3: Product Details */}
                        <div className="flex flex-col h-full  pl-5">

                            <h1 className="flex-1 text-[20px] font-medium pr-44">Saldad dry food best hunza dry food for you</h1>

                            <p className="py-5 text-[#F59B2B]">Special Price</p>

                            <h3 className=" text-[20px] font-medium">$ 20.5 per item</h3>

                            <h3 className="py-5 text-[20px] text-[#F59B2B]">description</h3>

                            <p className="flex-1">
                                Our premium dry food is made from high-quality ingredients,
                                ensuring your pet gets the nutrition they need. It's specially
                                formulated to support a healthy diet .
                            </p>

                            <div className="py-2 flex border-gray-200 border px-5 items-center ceinter w-50 gap-2 rounded py-0">
                                <p>Quantity</p>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                    onClick={handleIncrement}
                                    disabled={quantity === 10}
                                >
                                    <ChevronUp className="w-6 h-6 text-white" />
                                </button>
                                <p>{quantity}</p>
                                <button className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                    onClick={handleDecrement}
                                    disabled={quantity === 1}
                                >
                                    <ChevronDown className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            <div className="flex-1 text-[20px] py-8">
                                <p>Usually deliver in 3 days</p>
                                <input
                                    type="text"
                                    placeholder="Please enter your address"
                                    className="w-80 w-min-20 border px-2 py-1 outline-none border-l-0 border-t-0 border-r-0 focus:border-blue-500 transition-all duration-30"
                                    value={address}
                                    onChange={handleAddress}
                                />
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <Button >Add to Cart</Button>
                                <Button onClick={handleCustomerDetails}>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="max-w-[1280px] mx-auto px-16 py-10">
                    <h3 className="text-[20px] font-medium mb-4">
                        Product Details of Original Dry Food
                    </h3>

                    <div className="rounded-xl shadow-md shadow-black/10 overflow-hidden bg-white">

                        {/* IMAGE SECTION */}
                        <div
                            className="h-[500px] bg-cover bg-center"
                            style={{
                                backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%),
            url(${imgFour})
          `,
                            }}
                        />

                        {/* COLLAPSIBLE DETAILS */}
                        <div
                            className={`
          overflow-hidden
          transition-[max-height,opacity] duration-500 ease-in-out
          ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
                        >
                            <div className="p-6 space-y-6">

                                {/* SECTION 1 */}
                                <div className="text-gray-700">
                                    <h1 className="text-2xl font-medium mb-2">
                                        Products Details Of Original Dry Food
                                    </h1>
                                    <ul className="flex flex-wrap gap-4 list-disc list-inside marker:text-orange-500">
                                        <li>100 Grams</li>
                                        <li>Fresh</li>
                                        <li>Imported</li>
                                        <li>High Quality</li>
                                        <li>Original</li>
                                        <li>Hand Made</li>
                                    </ul>
                                </div>

                                {/* SECTION 2 */}
                                <div className="text-gray-700">
                                    <h1 className="text-2xl font-medium mb-2">
                                        Product Description
                                    </h1>
                                    <ul className="list-disc list-inside marker:text-orange-500 space-y-2">
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Fugit, necessitatibus! Nobis, optio reprehenderit ducimus
                                            eligendi harum illum vitae obcaecati numquam.
                                        </li>
                                        <li>100 Grams</li>
                                        <li>Imported</li>
                                        <li>Fresh</li>
                                        <li>High Quality</li>
                                    </ul>
                                </div>

                                {/* SECTION 3 */}
                                <div className="text-gray-700">
                                    <h1 className="text-2xl font-medium mb-2">
                                        Specification Of Roasted Kaju
                                    </h1>
                                    <ul className="flex gap-4 list-disc list-inside marker:text-orange-500">
                                        <li>Hunza Organics</li>
                                        <li>392538383_PK-14563456</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* BUTTON – ALWAYS AT BOTTOM */}
                        <div className="flex justify-center py-6">
                            <Button onClick={() => setOpen(prev => !prev)}>
                                {open ? "Hide Details" : "See more Details"}
                            </Button>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <Testmonial />
                <VideoSection />
            </section>
        </>



    )
}

export default ProductDetails
