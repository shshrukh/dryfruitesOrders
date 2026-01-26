import products from "../data/products.json";
import Product from "./Ui/Product";

const ProductList = () => {
  return (
    <div className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-xl font-semibold text-gray-900 ">
          Our Products
        </h2>

        {/* Products */}
        <div className="grid grid-flow-row-dense auto-rows-max gap-6 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductList;
