import Image from "next/image";

export default function FounderProfile() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Text content - mobile first (shows above image on mobile) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-primary mb-3 sm:mb-4">Grattan Vaz</h2>
            <p className="text-lg sm:text-xl font-playfair text-primary/80 mb-6 sm:mb-8">Founder & CEO</p>

            <div className="prose prose-zinc max-w-none space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Hi, I am Grattan Vaz founder of Acoustc Den. I started Acoustc Den in 2015 for the sole purpose of indulging my passion, which is good sound. We sell audio and video solutions to suit your budget and taste. We also offer consultancy to equip or upgrade your existing system. We work with many renowned brands, and offer long term maintenance and service packages. We also install systems in clubs, gyms, restaurants and other places. Only after ascertaining your needs, do I offer solutions for you to choose. I am here to facilitate you so that you may be truly satisfied. I have a couple of like minded well trained engineers working with me who are absolute professionals. Together we work hard to understand our customers needs to help him on his journey of getting closest to the best possible musical experience. I am always available to talk to on my listed mobile number. Do call me anytime, if its related to purchasing a new setup or improving on an existing setup or simply for advice. I would be most happy to help you.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative aspect-[5.5/5] w-full overflow-hidden shadow-md">
              <Image
                src="./founder-img-main.jpg"
                alt="Grattan Vaz"
                fill
                className="object-cover"
              />

              {/* Caption overlay - responsive sizing */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair mb-0 sm:mb-1">Grattan Vaz</h3>
                <p className="text-sm sm:text-lg">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
