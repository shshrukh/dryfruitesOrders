import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#272727] leading-tight">
            Eat Healthy Every Day <br />
            Hunza Naturals
          </h1>

          <p className="my-6 text-[#696969] max-w-md leading-relaxed">
            Lorem Ipsum Dolor Sit Amet Consectetur. Euismod Quam
            Varius Duis Proin Viverra Quis. Pellentesque Turpis Et
            Ultricies Platea Proin Fringilla Non.
          </p>

          <Button >
            Order Now
          </Button>
        </div>

        {/* RIGHT IMAGES */}
       
        <div className="h-[550px] w-full max-w-[530px] flex gap-4">
          <div className="flex w-full justify-center items-center h-full">
            <img
              src="/images/hero2.svg"
              alt="Dry fruits"
              className="w-full h-3/4 object-cover rounded-md"
            />
          </div>
          <div className="flex w-full  flex-col justify-start gap-4 h-full">
            <img
              src="/images/hero1.svg"
              alt="Dry fruits"
              className="w-full h-1/2 object-cover rounded-md"
            />
            <img
              src="/images/hero3.svg"
              alt="Dry fruits"
              className="w-full h-1/2 object-cover rounded-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
