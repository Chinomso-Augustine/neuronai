import { useEffect, useState } from 'react';
import heroImage from '../assets/images/Hero.PNG';

const heroStats = [
  {
    value: '100+',
    label: 'Years of advisory and engineering expertise',
  },
  {
    value: '25+',
    label: 'CNCF open source connected solutions',
  },
  {
    value: '6+',
    label: 'Products and Saas based solutions',
  },
];

const nineSenses = [
  {
    phase: 'Input Phases',
    sense: 'Sense 1',
    title: 'See',
    description: 'Visual context',
  },
  {
    phase: 'Input Phases',
    sense: 'Sense 2',
    title: 'Sense',
    description: 'Environmental context',
  },
  {
    phase: 'Input Phases',
    sense: 'Sense 3',
    title: 'Touch',
    description: 'Tactile and force interaction',
  },
  {
    phase: 'Integration Phases',
    sense: 'Sense 4',
    title: 'Perceive',
    description: 'Unified world model',
  },
  {
    phase: 'Integration Phases',
    sense: 'Sense 8',
    title: 'Learn',
    description: 'Zero-shot Sim2Real transfer',
  },
  {
    phase: 'Integration Phases',
    sense: 'Sense 9',
    title: 'Reason',
    description: 'Autonomous physical reasoning',
  },
  {
    phase: 'Output Phases',
    sense: 'Sense 5',
    title: 'Move',
    description: 'Precise kinematic orchestration',
  },
  {
    phase: 'Output Phases',
    sense: 'Sense 6',
    title: 'Act',
    description: 'Goal-oriented physical action',
  },
  {
    phase: 'Output Phases',
    sense: 'Sense 7',
    title: 'Talk',
    description: 'Human-machine collaboration',
  },
];

const solutions = [
  {
    title: 'Neuron Smart Manufacturing',
    description:
      'Real-time visibility, predictive maintenance, process intelligence, and connected factory operations.',
    href: '/products-and-solutions',
  },
  {
    title: 'Neuron Connected Vehicles',
    description:
      'AI-enabled vehicle intelligence for safer movement, smarter decisions, and connected mobility systems.',
    href: '/products-and-solutions',
  },
  {
    title: 'Neuron Smart Retail',
    description:
      'Hyper-personalized retail, supply chain intelligence, and automated customer engagement.',
    href: '/products-and-solutions',
  },
  {
    title: 'Neuron Health',
    description:
      'Intelligent care experiences that listen, predict, and support faster health decisions.',
    href: '/products-and-solutions',
  },
  {
    title: 'Neuron Smart Insure',
    description:
      'Automated claims, embedded insurance experiences, and real-time risk intelligence.',
    href: '/products-and-solutions',
  },

];

const insightChannels = [
  {
    title: 'YouTube Channel',
    category: 'Watch',
    description:
      'Explore our introduction to NIA Physical AI, a humanoid deep-tech powerhouse featuring the 9-sense simulator, a groundbreaking technology that simulates human senses for machines and devices.',
    action: 'Watch Videos',
    href: 'https://www.youtube.com/watch?v=gRDxSGMjmck',
  },
  {
    title: 'Neuron Blogs',
    category: 'Read',
    description:
      "Dive into our latest blog to see how it's unlocking faster, smarter, and more powerful tech experiences.",
    action: 'Read Blogs',
    href: '/our-media',
  },
  {
    title: 'Latest Podcast',
    category: 'Listen',
    description:
      'Listen to an insightful conversation with the founders on how their cutting-edge tech is transforming healthcare, business, and beyond.',
    action: 'Listen In',
    href: 'https://open.spotify.com/episode/4cCe9M8bRF1OIgQnSo6U25?si=Hk5rAy4cRSmX-7_WxJXR7Q&nd=1&dlsi=58b80218bd0b4f3c',
  },
];

const teamMembers = [
  {
    name: 'Founder Name',
    role: 'Founder | Vision & Experience',
    quote:
      'Helping organizations re-imagine what is possible with AI, edge intelligence, and digital transformation.',
  },
  {
    name: 'Founder Name',
    role: 'Co-Founder | Operations',
    quote:
      'Turning strategy into practical systems that help teams move faster, smarter, and with confidence.',
  },
  {
    name: 'Founder Name',
    role: 'Co-Founder | Technology',
    quote:
      'Building reliable technology foundations for businesses ready to scale into the next era of intelligence.',
  },
];

function AnimatedStat({ stat }) {
  const targetValue = Number.parseInt(stat.value, 10);
  const [currentValue, setCurrentValue] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  // Animates the stat number from 1 to its final value when the page loads.
  useEffect(() => {
    const duration = 2800;
    const startTime = performance.now();
    let animationFrame;

    const countUp = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const nextValue = Math.floor(1 + (targetValue - 1) * progress);

      setCurrentValue(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp);
      } else {
        setCurrentValue(targetValue);
        setIsComplete(true);
      }
    };

    animationFrame = requestAnimationFrame(countUp);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue]);

  return (
    <div className="border-l-4 border-orange-500 bg-[#f7fbff] p-5">
      <p
        aria-label={`${stat.value} ${stat.label}`}
        className="text-4xl font-bold text-[#1e2a66]"
      >
        {currentValue}
        {isComplete ? '+' : ''}
      </p>
      <p className="mt-3 text-base font-medium leading-7 text-black/70">
        {stat.label}
      </p>
    </div>
  );
}

function InsightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Moves the carousel backward or forward through the insight cards.
  const moveCarousel = (direction) => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0) {
        return insightChannels.length - 1;
      }

      if (nextIndex >= insightChannels.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
      {/* Insight Section Heading */}
      <div className="rounded-2xl bg-[#1e2a66] p-8 text-white">
        <p className="text-sm font-bold uppercase text-orange-400">
          Media & Insight
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Conversations On Neuron Edge AI
        </h2>
        <p className="mt-5 text-base leading-8 text-white/80">
          Stay connected with Neuron Edge AI through our YouTube video, Blogs, and Podcast.
        </p>
      </div>

      {/* Insight Carousel */}
      <div className="mt-6 overflow-hidden rounded-2xl bg-[#f7fbff]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {insightChannels.map((channel) => (
            <article className="min-h-72 min-w-full p-7" key={channel.title}>
              <p className="text-sm font-bold uppercase text-orange-500">
                {channel.category}
              </p>
              <h3 className="mt-4 text-3xl font-bold text-[#1e2a66]">
                {channel.title}
              </h3>
              <p className="mt-5 w-full text-base leading-8 text-black/70">
                {channel.description}
              </p>
              <a
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-500 px-6 text-base font-semibold text-white transition-colors hover:bg-[#1e2a66] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                href={channel.href}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
              >
                {channel.action}
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {insightChannels.map((channel, index) => (
            <button
              aria-label={`Show ${channel.title}`}
              className={`h-2.5 w-8 rounded-lg transition-colors ${
                activeIndex === index ? 'bg-orange-500' : 'bg-blue-200'
              }`}
              key={channel.title}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            aria-label="Previous insight channel"
            className="grid h-11 w-11 place-items-center rounded-lg border border-[#1e2a66] text-xl font-bold text-[#1e2a66] transition-colors hover:bg-[#1e2a66] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            onClick={() => moveCarousel(-1)}
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="Next insight channel"
            className="grid h-11 w-11 place-items-center rounded-lg border border-[#1e2a66] text-xl font-bold text-[#1e2a66] transition-colors hover:bg-[#1e2a66] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            onClick={() => moveCarousel(1)}
            type="button"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-[#f7fbff]">
      {/* Hero Section */}
      <section
        className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#dbeafe] px-6 pb-20 pt-28 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 31, 76, 0.12), rgba(8, 31, 76, 0.2)), url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Hero Content */}
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold text-orange-500 sm:text-6xl lg:text-7xl">
            Neuron Edge AI
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium text-white sm:text-xl">
            Fully integrated Humonoid AI Simulator
          </p>
          <a
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-lg border border-orange-500 bg-orange-500 px-7 text-base font-semibold text-white transition-colors hover:bg-white hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6">
        <div className="mx-auto -mt-12 grid max-w-6xl gap-5 border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/10 md:grid-cols-3">
          {heroStats.map((stat) => (
            <AnimatedStat key={stat.value} stat={stat} />
          ))}
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative isolate mt-20 overflow-hidden border-y border-orange-500/30 bg-[#eaf4ff] px-6 py-20 text-center">
        {/* Animated Background */}
        <div className="tech-grid-motion absolute inset-0 -z-20 opacity-70" />
        <div className="tech-beam-motion absolute inset-y-0 left-1/2 -z-10 w-[48rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-2xl" />
        <div className="tech-node-motion absolute left-[8%] top-12 -z-10 h-24 w-24 rounded-full border border-orange-500/40 bg-orange-500/10" />
        <div className="tech-node-motion absolute bottom-10 right-[12%] -z-10 h-32 w-32 rounded-full border border-[#1e2a66]/30 bg-[#1e2a66]/10 [animation-delay:1.2s]" />

        {/* Slogan Content */}
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#1e2a66] sm:text-4xl">
            Beyond the digital space
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-black/75">
            NIA is engineered to bring a flexible physical AI framework directly
            into complex non-deterministic industrial settings. This guarantees
            human-like decision-making speed, standalone operational durability,
            and continuous policy-driven reinforcement learning without
            mandatory external infrastructure.
          </p>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-500 px-7 text-base font-semibold text-white transition-colors hover:bg-[#1e2a66] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Platform Story Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-orange-500">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#1e2a66] sm:text-4xl">
              9-sense Physical AI framework
            </h2>
            <p className="mt-5 text-base leading-8 text-black/70">
             Our AI is defined by See, Sense, Touch, Talk, Perceive, Move, Act, Learn, and Reason.
            </p>
          </div>

          {/* Nine Sense Framework */}
          <div className="mt-10 rounded-3xl bg-[#061a33] p-6 text-white shadow-xl shadow-blue-950/20 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr_1fr] lg:items-center">
              <div className="grid gap-4">
                <p className="text-sm font-bold uppercase text-cyan-300">
                  Input Phases
                </p>
                {nineSenses
                  .filter((item) => item.phase === 'Input Phases')
                  .map((item) => (
                    <article
                      className="rounded-2xl border border-cyan-300/30 bg-white/5 p-5"
                      key={item.sense}
                    >
                      <p className="text-sm font-bold uppercase text-cyan-300">
                        {item.sense}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm uppercase tracking-wide text-white/70">
                        {item.description}
                      </p>
                    </article>
                  ))}
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-white/10 p-6 text-center">
                <p className="text-sm font-bold uppercase text-orange-300">
                  Integration Phases
                </p>
                <h3 className="mt-5 text-4xl font-bold text-orange-500">
                  NIA
                </h3>
              
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
                <p className="text-sm font-bold uppercase text-purple-300">
                  Learning & Evolution
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {nineSenses
                    .filter((item) => item.phase === 'Integration Phases')
                    .map((item) => (
                      <article
                        className="rounded-2xl border border-purple-300/30 bg-[#1e2a66]/40 p-4"
                        key={item.sense}
                      >
                        <p className="text-xs font-bold uppercase text-purple-300">
                          {item.sense}
                        </p>
                        <h4 className="mt-2 text-xl font-bold uppercase">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs uppercase tracking-wide text-white/70">
                          {item.description}
                        </p>
                      </article>
                    ))}
                </div>
              </div>

              <div className="grid gap-4">
                <p className="text-sm font-bold uppercase text-green-300">
                  Output Phases
                </p>
                {nineSenses
                  .filter((item) => item.phase === 'Output Phases')
                  .map((item) => (
                    <article
                      className="rounded-2xl border border-green-300/30 bg-white/5 p-5"
                      key={item.sense}
                    >
                      <p className="text-sm font-bold uppercase text-green-300">
                        {item.sense}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm uppercase tracking-wide text-white/70">
                        {item.description}
                      </p>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {/* Solution Cards */}
            {solutions.slice(0, 3).map((solution) => (
              <article
                className="flex min-h-72 flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
                key={solution.title}
              >
                <div className="mb-5 h-1 w-10 bg-orange-500" />
                <h3 className="text-xl font-bold text-[#1e2a66]">
                  {solution.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-black/65">
                  {solution.description}
                </p>
                <a
                  className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-orange-500 px-5 text-sm font-bold uppercase text-orange-500 transition-colors hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                  href={solution.href}
                >
                  Learn More
                </a>
              </article>
            ))}

            {/* Center Product Heading */}
            <article className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-blue-100 bg-[#dbeafe] p-8 text-center shadow-xl shadow-blue-950/10 lg:col-start-2 lg:row-start-2">
              <p className="text-sm font-bold uppercase text-orange-500">
                Products & Solutions
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#1e2a66] sm:text-4xl">
                Industry-ready intelligence for connected ecosystems.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-black/65">
                A connected portfolio spanning manufacturing, mobility, retail,
                health, insurance, AI, robotics, IoT, and edge.
              </p>
            </article>

            {solutions.slice(3).map((solution) => (
              <article
                className="flex min-h-72 flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
                key={solution.title}
              >
                <div className="mb-5 h-1 w-10 bg-orange-500" />
                <h3 className="text-xl font-bold text-[#1e2a66]">
                  {solution.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-black/65">
                  {solution.description}
                </p>
                <a
                  className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-orange-500 px-5 text-sm font-bold uppercase text-orange-500 transition-colors hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                  href={solution.href}
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

  

      {/* Expertise Section */}
      <section className="px-6 pb-20">
        <div className="mx-auto w-full">
          <InsightCarousel />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#eef5ff] px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[4px] bg-white px-5 py-12 shadow-2xl shadow-[#071a3f]/10 sm:px-10 lg:px-16">
          <h2 className="text-center text-3xl font-bold text-[#071a3f] sm:text-4xl">
            Meet the founders
          </h2>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                className="group overflow-hidden rounded-[18px] bg-white shadow-xl shadow-[#071a3f]/12"
                key={member.role}
              >
                <div className="grid aspect-[4/4.8] place-items-center bg-[#071a3f]">
                  <div className="grid h-24 w-24 place-items-center rounded-full border border-white/30 bg-white/10 text-3xl font-bold text-white">
                    NE
                  </div>
                </div>

                <div className="bg-white px-6 py-5">
                  <h3 className="text-2xl font-bold text-[#071a3f]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#1e2a66]/70">
                    {member.role}
                  </p>
                </div>

                <div className="min-h-32 overflow-hidden bg-gradient-to-br from-[#071a3f] via-[#1e2a66] to-orange-500 px-6 py-6 text-center text-white">
                  <p className="text-sm leading-6 transition-transform duration-300 ease-out group-hover:scale-110">
                    {member.quote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="pb-20">
        <div className="w-full bg-[#1e2a66] px-6 py-14 text-white shadow-xl shadow-blue-950/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-orange-400">
                Connect With Us
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold">
                Curious to connect intelligence across your business?
              </h2>
            </div>
            <a
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-lg bg-orange-500 px-7 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#1e2a66] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href="/contact-us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
