import React from "react";

const PaymentForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      {/* Card */}
      <div className="w-full max-w-lg bg-[#FDFDFD] rounded-2xl shadow-sm p-8">

        {/* Card Number */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="0923-133441-23123-1"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm outline-none
                       focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Name on Card */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name On Card
          </label>
          <input
            type="text"
            placeholder="Kamran Jan"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm outline-none
                       focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Exp Date & CVV */}
        <div className="grid grid-cols-2 gap-6 mb-6">

          {/* Exp Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exp Date
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="MM/YY"
              maxLength={5}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm outline-none
                         focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CVV
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="123"
              maxLength={3}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm outline-none
                         focus:ring-2 focus:ring-orange-400"
            />
          </div>

        </div>

        {/* Save Card */}
        <div className="flex items-start gap-3 mb-8">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 accent-orange-500"
          />

          <div>
            <p className="text-sm font-medium text-gray-700">
              Save Card
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              That My Card Information Is Saved In My Hunza Naturals Account
            </p>
          </div>
        </div>

        {/* Payment Button */}
        <button
          className="w-full bg-[#F59115] hover:bg-[#e0800f] text-white
                     py-3 rounded-lg font-semibold transition"
        >
          Payment Now
        </button>

      </div>
    </div>
  );
};

export default PaymentForm;
