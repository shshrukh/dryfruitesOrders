import Product from "./Ui/Product";
import products from "../data/products.json";

const DealsSection = () => {

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16">
      <h2 className="text-2xl font-semibold mb-8">Our Best Deals</h2>

      <div className="flex items-end gap-6">
        {/* Hot Deal */}
        <div className="w-72 h-[450px] flex flex-col justify-center items-center gap-10 min-w-[18rem] bg-[#7a0026] text-white rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Hot Deal</h3>
          <p className="mb-6">Sale Upto 30% Off</p>

          <p className="text-sm opacity-80 mb-4">Offer Ends In</p>

          <div className="grid grid-cols-4 gap-3">
           
              <div
              
                className="bg-white text-[#7a0026] rounded-md p-2 text-center text-sm font-semibold"
              >
            <span className="text-xl">02 </span>
            <span className="text-xs">Days</span>
              </div>
              <div
              
                className="bg-white text-[#7a0026] rounded-md p-2 text-center text-sm font-semibold"
              >
            <span className="text-xl">05 </span>
            <span className="text-xs">Hours</span>
              </div>
               <div
              
                className="bg-white text-[#7a0026] rounded-md p-2 text-center text-sm font-semibold"
              >
            <span className="text-xl">25 </span>
            <span className="text-xs">Mints</span>
              </div>
               <div
              
                className="bg-white text-[#7a0026] rounded-md p-2 text-center text-sm font-semibold"
              >
            <span className="text-xl">50 </span>
            <span className="text-xs">Sec</span>
              </div>

            
          </div>
        </div>

        {/* Scrollable Product Cards */}
        <div className="flex-1 h-max overflow-x-auto">
          <div className="flex gap-6 min-w-max pb-4">
            {products.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
