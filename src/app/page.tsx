import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import FounderProfile from "@/components/FounderProfile";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";

const product = [
  {
    title: "Accuphase E-5000",
    href: "https://www.accuphase.com/",
    imageSrc: "./products/prod1.png",
  },
  {
    title: "McIntosh MSA5500",
    href: "https://www.mcintoshlabs.com",
    imageSrc: "./products/prod2.png",
  },
  {
    title: "McIntosh MA12000 ",
    href: "https://www.mcintoshlabs.com/",
    imageSrc: "./products/prod3.jpg",
  },
  {
    title: "Divine Acoustics - Bellatrix",
    href: "https://divineacoustics.com/",
    imageSrc: "./products/prod4.png",
  },
  {
    title: "VPI Titan",
    href: "https://www.vpiindustries.com",
    imageSrc: "./products/prod5.png",
  },
  {
    title: "VPI Turntable",
    href: "https://www.vpiindustries.com/",
    imageSrc: "./products/prod6.png",
  },
  {
    title: "Velodyne Acoustics MicroVee X",
    href: "https://velodyneacoustics.com/",
    imageSrc: "./products/prod7.png",
  },
  {
    title: "Focal Utopia III Evo",
    href: "https://www.focal.com/",
    imageSrc: "./products/prod8.jpg",
  },
  {
    title: "Yamaha TT-S303",
    href: "https://asia-latinamerica-mea.yamaha.com/index.html",
    imageSrc: "./products/prod9.jpg",
  },
];

const testimonials = [
  {
    quote: "I have been dealing with Acoustc Den and Grattan Vaz for quite a few years. They provide very good service and consultation. I highly recommend them.",
    author: "Kushroo Santook - Chairman NCPA",
  },
  {
    quote: "Being an audiophile, I have known Grattan for over two decades. I can vouch for his subject knowledge, honesty and frank advise that is second to none in the business. Which is why i have purchased every audio equipment through him only over past two decades.",
    author: "Dinkar Rai - CEO Trustcap Pvt Ltd",
  },
  {
    quote: "It's been my pleasure to avail Grattan's advice and service with regards to my equipment of high end audio as well as video as well as AV equipment.Over 15 years, I've appriciated his knowledge and commitment to offer the best fit for my reqirements as well as complelling value.Moreover his integrity and desire to support products sold by him has been the one and only reasons why I continue to refer him to friends for their AV requirements.",
    author: "Ashis Banerjee - Chairman and Managing Director Gansons",
  },
  {
    quote: "I have been dealing with Mr Grattan Vaz for quite some years now .I have found him to be a very honest gentleman with a profound knowledge in audio. I would surely recommend him.",
    author: "Sandeep Gandhi - Managing Director EMCO Dynatorq Pvt Ltd",
  },
  {
    quote: "Grattan did a fabulous job of setting up my home entertainment system. I was fascinated by his customer needs centric thinking (no one size fits all) in design, implementation and setup of the system. His passion and deep understanding of the audio visual medium and all its components helped immensely. I continue to use his services and recommend him to others. Heartily Recommended !",
    author: "Gaurav Roy - Music Connoisseur",
  },
  {
    quote: "I've known Grattan and worked with Acoustc Den for many of years and have had pleasant experiences dealing with them. They are friendly, knowledgeable, assist in selecting and setting up systems and more importantly they always help in case service is required. Prices are not rock bottom but quite reasonable and given the above positives I would say pricing is quite appropriate. They believe in long term relationships which I value a lot.",
    author: "Jimmy Marker - Music Lover and Audio Enthusiast",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection
        title="Acoustc Den"
        subtitle="EXPERIENCE AUDIO EXCELLENCE LIKE NEVER BEFORE"
        imageSrc="./backgroundImg/bgImg.png"
      />
      <FounderProfile />



      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why choose Acoustc Den</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <h3 className="text-xl font-playfair mb-4">Hi End Audio & Video Solutions</h3>
              <p className="text-muted-foreground"> Whether you're a cinephile or an audiophile, our high-end audio
                    and video equipment will cater to your every need. From
                    crystal-clear dialogue to thundering bass, our products offer
                    unparalleled performance that will leave you speechless. Don't
                    settle for anything less than the best - invest in our
                    collection of high-end audio and video equipment today and take
                    your home entertainment experience to new heights!</p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-playfair mb-4">Service & Repairs</h3>
              <p className="text-muted-foreground">Our team of expert technicians have years of experience in
                    servicing and repairing top-quality audio and video equipment
                    from leading brands. With our consultation services, you can
                    rest assured that you'll be able to create the ultimate
                    experience that is personalized to your unique taste and
                    preferences.</p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-playfair mb-4">Acoustic Treatement</h3>
              <p className="text-muted-foreground"> We understand that selecting the right equipment can be a
                    daunting task, which is why we take the time to listen to your
                    needs and provide tailored recommendations based on your budget,
                    room size, and sound preference. With our acoustic treatment,
                    you can enjoy a truly immersive audio experience that is
                    tailored to your unique space.</p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-playfair mb-4">Consultancy</h3>
              <p className="text-muted-foreground"> Our team of experts will access your requirements both in terms
                    of acoustic treatement and audio equipment.We will then provide
                    you the right solution both in terms of your budget and your
                    sound preferences.You can even consult with us on upgrading your
                    existing equipment or on the purchase of new equipment.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-playfair mb-4">Multiroom A/V</h3>
              <p className="text-muted-foreground">  Our expertise is in creating and implementing state-of-the-art
                    multiroom audio-video systems that turn your house or place of
                    business into a centre of immersive entertainment.</p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-playfair mb-4">Two channel audio</h3>
              <p className="text-muted-foreground"> With our 2-channel audio solutions, you may listen to sounds in
                    its most natural state. Our goal is to bring the beauty of music
                    to life through the ideal fusion of technology and
                    craftsmanship. Our 2-channel audio solutions offer unmatched
                    sonic perfection whether you're a discerning audiophile or a
                    music lover looking for an immersive listening experience.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid
        title="Where Innovation Meets Sound"
        subtitle="Featured Products"
        product={product}
      />
      <Testimonials testimonials={testimonials} />

      <NewFooter />
    </main>
  );
}
