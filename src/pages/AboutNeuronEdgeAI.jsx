import aboutHero from '../assets/images/About.PNG';

function AboutNeuronEdgeAI() {
  return (
    <section
      className="relative flex min-h-[52vh] items-center justify-center bg-cover bg-center px-6 pt-20 text-center text-white"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="absolute inset-0 bg-[#071a3f]/70" />
      <h1 className="relative text-4xl font-bold sm:text-5xl lg:text-6xl">
        About
      </h1>
    </section>
  );
}

export default AboutNeuronEdgeAI;
