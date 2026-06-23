import productsHero from '../assets/images/Product and solutions.PNG';

function ProductsAndSolutions() {
  return (
    <section
      className="relative flex min-h-[52vh] items-center justify-center bg-cover bg-center px-6 pt-20 text-center text-white"
      style={{ backgroundImage: `url(${productsHero})` }}
    >
      <div className="absolute inset-0 bg-[#071a3f]/70" />
      <h1 className="relative text-4xl font-bold sm:text-5xl lg:text-6xl">
        Products & Services
      </h1>
    </section>
  );
}

export default ProductsAndSolutions;
