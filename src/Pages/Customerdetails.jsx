import React from 'react'
import dryfruit from '../assets/dryfruitplate.png';

const CheckoutPage = () => {
  const items = [1, 2, 3]; // Mocking the 3 dry food apple items

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/* Main Flex Container */}
      <div
        className="flex flex-col lg:flex-row mx-auto"
        style={{ width: '1180px', height: '695px' }}
      >
        
        {/* Left Section: Form (Flex Grow) */}
        <div className="flex-1 py-6 md:py-12 lg:pr-20">
          <div className="max-w-xl ">
            <h2 className="text-lg font-medium mb-4 text-[#272727]">Contact Information</h2>
            <input 
              type="email" 
              defaultValue="ilhankarim123@gmail.com" 
              className="w-full p-3 border border-orange-300 rounded-md outline-none focus:ring-1 focus:ring-orange-400 mb-8"
            />

            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm text-[#272727] block mb-1 ">First Name</label>
                  <input type="text" defaultValue="Ilhan" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-[#272727] block mb-1">Last Name</label>
                  <input type="text" defaultValue="karim" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#272727] block mb-1">Company (Optional)</label>
                <input type="text" placeholder="Company Optional" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
              </div>

              <div>
                <label className="text-sm text-[#272727] block mb-1">Address</label>
                <input type="text" defaultValue="Sultanabad Gilgit City Main Road" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm text-[#272727] block mb-1">City</label>
                  <input type="text" defaultValue="Gilgit" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-[#272727] block mb-1">Postal Code</label>
                  <input type="text" defaultValue="1234" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#272727] block mb-1">Phone Number</label>
                <input type="text" defaultValue="03478762135" className="w-full p-3 border border-gray-200 rounded-md outline-none" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="mr-2 accent-orange-500 h-4 w-4" defaultChecked />
                Save This Information For Next Time
              </label>
              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg transition-transform active:scale-95">
                Continue To Shipping
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Summary (Fixed Width on Desktop) */}
        <div className="w-full lg:w-[450px] bg-[#FDFDFD] py-6 p-12 md:py-12">
          <h2 className="text-xl font-bold mb-8 text-[#272727]">Your Order</h2>
          
          <div className="flex flex-col gap-4 mb-8">
            {items.map((_, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-orange-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src={dryfruit} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#272727] font-medium">Dry Food Apples</h3>
                  <p className="text-lg font-bold text-[#272727]">$20.2</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-orange-200 pt-6 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Deliver</span>
              <span className="font-semibold text-gray-900">$2.4</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="font-semibold text-gray-900">$0.4</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-lg font-medium">Total</span>
              <span className="text-3xl font-bold text-gray-900">$42</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;