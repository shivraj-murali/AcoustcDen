import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

const teamMembers = [
  {
    name: "Siobhan Byrne",
    title: "Founder & CEO",
    bio: "Siobhan's passion for travel, history and the arts enables her to create bespoke, once-in-a-lifetime cultural and heritage experiences for clients. She has personally visited over 80 countries worldwide, and brings her wealth of knowledge to every itinerary she designs.",
    imageSrc: "https://ext.same-assets.com/3595534517/2514702074.jpeg",
  },
  {
    name: "Rachel Holmes",
    title: "Senior Travel Designer",
    bio: "With over 15 years in luxury travel, Rachel specializes in crafting unique journeys throughout Europe and Africa. Her attention to detail and dedication to understanding each client's preferences results in perfectly tailored experiences.",
    imageSrc: "https://ext.same-assets.com/3595534517/2783416941.jpeg",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <Header />

      <HeroSection
        title="About Adams & Butler"
        imageSrc="https://ext.same-assets.com/3595534517/3166978221.jpeg"
      />
      <section className="py-16 bg-muted" id="our-team">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Team</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A&B focuses on our goal. They have been carefully handpicked for their all-round and in-depth knowledge of the travel industry. Your dedicated private travel consultant will guide you through the entire process, from planning to your return home. Our team takes pride in their unrivalled knowledge of their specialist destinations. We are handpicking properties, journeys and exceptional experiences for you based on our first-hand knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 shadow-md flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square overflow-hidden rounded-full">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-playfair mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why choose Adams & Butler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-4">Our Promise</h3>
              <p className="text-muted-foreground">Adams & Butler promises to prioritize your needs and interests first - always. We offer a 100% credit postponement policy and a generous cancellation policy to allay any concerns.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-4">Only Irish Virtuoso Agency</h3>
              <p className="text-muted-foreground">We're the only Virtuoso member in Ireland, connecting travelers to the world's best travel advisors. We're local experts, operating at the highest global standards.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                  <path d="M16.5 9.4 7.55 4.24"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                  <circle cx="18.5" cy="15.5" r="2.5"></circle>
                  <path d="M20.27 17.27 22 19"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-4">Accommodation Amenities</h3>
              <p className="text-muted-foreground">Access to exclusive amenities at over 500 hotels worldwide, including room upgrades, daily breakfast, food & beverage credits, early check-in/late checkout, and spa treatment credits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/3595534517/3478277339.svg"
                  alt="Adams & Butler Video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewFooter />
    </main>
  );
}
