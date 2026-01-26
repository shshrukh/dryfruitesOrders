import Product from "./Ui/Product";
import products from "../data/products.json";

const DealsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-8">Our Best Deals</h2>

      <div className="flex gap-6">
        {/* Hot Deal */}
        <div className="w-72 min-w-[18rem] bg-[#7a0026] text-white rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Hot Deal</h3>
          <p className="mb-6">Sale Upto 30% Off</p>

          <p className="text-sm opacity-80 mb-4">Offer Ends In</p>

          <div className="grid grid-cols-4 gap-3">
            {["02 Days", "05 Hours", "25 Mints", "50 Sec"].map((t, i) => (
              <div
                key={i}
                className="bg-white text-[#7a0026] rounded-md py-2 text-center text-sm font-semibold"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Product Cards */}
        <div className="flex-1 overflow-x-auto">
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
