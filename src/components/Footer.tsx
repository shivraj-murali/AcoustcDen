import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter Signup */}
        <div className="text-center mb-16 py-6 border-b border-zinc-700">
          <p className="text-sm md:text-base mb-2">Get the latest from Adams & Butler.</p>
          <Link
            href="/newsletter"
            className="text-sm md:text-base underline hover:text-secondary transition"
          >
            Sign up to our Newsletter
          </Link>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <div className="w-20 h-12 relative">
            <Image
              src="https://ext.same-assets.com/3595534517/769098139.png"
              alt="Virtuoso"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-20 h-12 relative">
            <Image
              src="https://ext.same-assets.com/3595534517/3307280462.png"
              alt="Travel Awards"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-20 h-12 relative">
            <Image
              src="https://ext.same-assets.com/3595534517/3479767848.png"
              alt="Travel + Leisure"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-20 h-12 relative">
            <Image
              src="https://ext.same-assets.com/3595534517/3271371852.png"
              alt="Select"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-20 h-12 relative">
            <Image
              src="https://ext.same-assets.com/3595534517/1976256914.png"
              alt="ATTA"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-sm">
          {/* Column 1: Experiences */}
          <div>
            <h3 className="text-white uppercase font-medium mb-4 text-xs tracking-wider">Tailored Experiences</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/experiences/adventure" className="text-zinc-400 hover:text-white transition">
                  Adventure
                </Link>
              </li>
              <li>
                <Link href="/experiences/celebrations" className="text-zinc-400 hover:text-white transition">
                  Celebrations
                </Link>
              </li>
              <li>
                <Link href="/experiences/culinary" className="text-zinc-400 hover:text-white transition">
                  Culinary
                </Link>
              </li>
              <li>
                <Link href="/experiences/family" className="text-zinc-400 hover:text-white transition">
                  Family
                </Link>
              </li>
              <li>
                <Link href="/experiences/experimental" className="text-zinc-400 hover:text-white transition">
                  Experimental
                </Link>
              </li>
              <li>
                <Link href="/experiences/specializing" className="text-zinc-400 hover:text-white transition">
                  Specializing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Destinations */}
          <div>
            <h3 className="text-white uppercase font-medium mb-4 text-xs tracking-wider">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/ireland" className="text-zinc-400 hover:text-white transition">
                  Ireland
                </Link>
              </li>
              <li>
                <Link href="/destinations/uk" className="text-zinc-400 hover:text-white transition">
                  UK
                </Link>
              </li>
              <li>
                <Link href="/destinations/africa" className="text-zinc-400 hover:text-white transition">
                  Africa
                </Link>
              </li>
              <li>
                <Link href="/destinations/classic-europe" className="text-zinc-400 hover:text-white transition">
                  Classic Europe
                </Link>
              </li>
              <li>
                <Link href="/destinations/the-americas" className="text-zinc-400 hover:text-white transition">
                  The Americas
                </Link>
              </li>
              <li>
                <Link href="/destinations/asia" className="text-zinc-400 hover:text-white transition">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="/destinations/exotic-islands" className="text-zinc-400 hover:text-white transition">
                  Exotic Islands
                </Link>
              </li>
              <li>
                <Link href="/destinations/polar-regions" className="text-zinc-400 hover:text-white transition">
                  Polar Regions
                </Link>
              </li>
              <li>
                <Link href="/destinations/oceania" className="text-zinc-400 hover:text-white transition">
                  Oceania
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Private Rentals & News */}
          <div>
            <h3 className="text-white uppercase font-medium mb-4 text-xs tracking-wider">Private Rentals</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/private-rentals/castles" className="text-zinc-400 hover:text-white transition">
                  Castles
                </Link>
              </li>
              <li>
                <Link href="/private-rentals/villas-houses" className="text-zinc-400 hover:text-white transition">
                  Villas & Houses
                </Link>
              </li>
              <li>
                <Link href="/private-rentals/estates" className="text-zinc-400 hover:text-white transition">
                  Estates
                </Link>
              </li>
            </ul>

            <h3 className="text-white uppercase font-medium mb-4 mt-8 text-xs tracking-wider">News & Press</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news-and-press/articles" className="text-zinc-400 hover:text-white transition">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/news-and-press/press" className="text-zinc-400 hover:text-white transition">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/news-and-press/news" className="text-zinc-400 hover:text-white transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-zinc-400 hover:text-white transition">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Us & Contact */}
          <div>
            <h3 className="text-white uppercase font-medium mb-4 text-xs tracking-wider">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-zinc-400 hover:text-white transition">
                  Why choose A&B
                </Link>
              </li>
              <li>
                <Link href="/about-us#our-team" className="text-zinc-400 hover:text-white transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-zinc-400 hover:text-white transition">
                  Work with us
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <p className="text-white mb-2">info@adamsandbutler.com</p>
              <p className="text-zinc-400 mb-1">US Toll Free: 1-800-894-5712</p>
              <p className="text-zinc-400 mb-1">Australia Toll Free: 1-800-764-042</p>
              <p className="text-zinc-400 mb-4">Ireland: +353-1-288-9355</p>

              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/adamsandbutler" aria-label="Facebook" className="text-zinc-400 hover:text-white transition">
                  <Facebook size={20} />
                </Link>
                <Link href="https://twitter.com/adamsandbutler" aria-label="Twitter" className="text-zinc-400 hover:text-white transition">
                  <Twitter size={20} />
                </Link>
                <Link href="https://www.instagram.com/adamsandbutler" aria-label="Instagram" className="text-zinc-400 hover:text-white transition">
                  <Instagram size={20} />
                </Link>
                <Link href="https://www.linkedin.com/company/adams-&-butler" aria-label="LinkedIn" className="text-zinc-400 hover:text-white transition">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-700 text-xs text-zinc-400">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="inline-block">
              <div className="relative w-32 h-8">
                <Image
                  src="https://ext.same-assets.com/3595534517/2811506428.png"
                  alt="Acoustc Den Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms-conditions" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/sustainability-policy" className="hover:text-white transition">
              Sustainability Policy
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/gdpr" className="hover:text-white transition">
              GDPR
            </Link>
            <Link href="/site-map" className="hover:text-white transition">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
