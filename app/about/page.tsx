import Image from "next/image";

export const metadata = {
  title: "Our Story — Coffee Extra Co.",
  description:
    "Meet Maya Chen and Jags — the two people who left their old lives behind to build the neighbourhood coffee house they always wanted.",
};

const founders = [
  {
    name: "Maya Chen",
    role: "Head of Coffee & Co-founder",
    bio: "Maya trained as a Q-grader in Melbourne after spending a decade in Australia's thriving specialty coffee scene. She arrived in New York in 2015 and spent three years working for a Williamsburg roastery before deciding the city needed a coffee shop that felt like home. She personally visits every farm we source from and can identify the altitude of a coffee by taste alone.",
    imageId: 10375824,
  },
  {
    name: "Jags",
    role: "Head of Food & Co-founder",
    bio: "Jags has been in professional kitchens since the age of 17. After working his way up to sous chef at a Tribeca restaurant, he realised he didn't want to cook for people — he wanted to cook for his neighbours. He oversees our entire food programme, works closely with local suppliers, and still bakes the morning pastries himself most days.",
    imageId: 18799034,
  },
];

const values = [
  {
    icon: "🌍",
    title: "Community",
    body: "We exist to serve our neighbourhood. Every decision we make — from our opening hours to our pricing — is made with our community in mind.",
  },
  {
    icon: "☕",
    title: "Quality",
    body: "We source directly from farms we've visited, roast to order, and serve every cup as if it were the only one we'll make today.",
  },
  {
    icon: "🤝",
    title: "Warmth",
    body: "The best coffee in the world means nothing without a warm welcome. We remember your name. We remember your order.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2775827-hero.webp"
            alt="Barista at Coffee Extra Co."
            fill
            sizes="100vw"
            className="object-cover"
            preload={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-3">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05]">
            Made With Love,<br />Brewed With Care.
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-4">
              How We Got Here
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso mb-6 leading-snug">
              A coffee shop born from a neighbourhood that deserved better.
            </h2>
            <p className="font-body text-base text-stone-600 leading-relaxed mb-4">
              Maya and Jags met in 2018 while working at the same specialty roastery in Williamsburg. They had both come to New York from very different worlds — Maya from Australia&apos;s coffee scene, Jags from the high-pressure kitchens of Tribeca — but they shared the same restlessness: a sense that the city&apos;s coffee shops had become too transactional. People in, people out. No names remembered. No lingering.
            </p>
            <p className="font-body text-base text-stone-600 leading-relaxed mb-4">
              They spent two years talking about what they&apos;d do differently. Then they found this space — a sun-filled corner unit on Bedford Street that had sat empty for three years. They stripped it back to the original brickwork, sourced a second-hand La Marzocca espresso machine from a closing café in Portland, and opened on a cold Thursday morning in March 2021.
            </p>
            <p className="font-body text-base text-stone-600 leading-relaxed">
              The queue stretched past the door. It hasn&apos;t really stopped since.
            </p>
          </div>

          <div className="relative h-96 md:h-[480px] rounded-card overflow-hidden shadow-warm-lg">
            <Image
              src="/images/2159156-card.webp"
              alt="Espresso preparation at Coffee Extra Co."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-cream-light py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-3">
              The People Behind the Cup
            </p>
            <h2 className="font-display text-4xl font-bold text-espresso">
              Meet the Founders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-cream rounded-card overflow-hidden shadow-card hover:shadow-warm transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={`/images/${founder.imageId}-card.webp`}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-7">
                  <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-1">
                    {founder.role}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-espresso mb-3">
                    {founder.name}
                  </h3>
                  <p className="font-body text-sm text-stone-600 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-amber mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl font-bold text-cream">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-card bg-espresso/30 p-8 text-center"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-cream/70 leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit us */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-3">
            Find Us
          </p>
          <h2 className="font-display text-4xl font-bold text-espresso mb-12">
            Come Say Hello
          </h2>

          <div className="grid sm:grid-cols-3 gap-10 max-w-2xl mx-auto">
            <div>
              <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-3">
                Address
              </p>
              <p className="font-body text-sm text-stone-600 leading-relaxed">
                23 Bedford Street<br />West Village<br />New York, NY 10014
              </p>
            </div>
            <div>
              <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-3">
                Hours
              </p>
              <p className="font-body text-sm text-stone-600 leading-relaxed">
                Mon – Fri<br />7:00 am – 7:00 pm<br /><br />
                Sat – Sun<br />8:00 am – 6:00 pm
              </p>
            </div>
            <div>
              <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-mocha mb-3">
                Contact
              </p>
              <p className="font-body text-sm text-stone-600 leading-relaxed">
                hello@coffeeextraco.com<br />+1 (212) 555-0171
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
