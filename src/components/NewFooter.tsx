import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook } from "lucide-react";

export default function NewFooter() {
  return (
    <footer className="bg-white text-primary py-10 md:py-16 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Side - Map (hidden on small mobile, replaced with static image) */}
          <div className="relative w-full h-[350px] sm:h-[300px] md:h-[600px] overflow-hidden rounded-md shadow-md">
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241141.73917702315!2d72.60107334926431!3d19.202203673403105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73e87aa1d2d%3A0x4adb32938ad7ccc1!2sAcoustc%20Den!5e0!3m2!1sen!2sin!4v1685963240487!5m2!1sen!2sin"
          width="600"
          height="650"
          className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-xl sm:text-2xl font-playfair text-primary mb-4">Address</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <p className="text-muted-foreground text-sm sm:text-base">A/210, Synthofine Industrial Estate, Behind Virvani Industrial
                Estate, Goregaon East, Mumbai - 400063</p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-xl sm:text-2xl font-playfair text-primary mb-4">Phone</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="text-secondary flex-shrink-0" size={20} />
                  <a href="tel:+18008945712" className="text-muted-foreground hover:text-primary transition text-sm sm:text-base">
                  9820949395
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-secondary flex-shrink-0" size={20} />
                  <a href="tel:+18007640421" className="text-muted-foreground hover:text-primary transition text-sm sm:text-base">
                  9819601401
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl sm:text-2xl font-playfair text-primary mb-4">E-mail</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="text-secondary flex-shrink-0" size={20} />
                  <a href="mailto:info@acoustcden.com" className="text-muted-foreground hover:text-primary transition text-sm sm:text-base break-all">
                    info@acoustcden.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-secondary flex-shrink-0" size={20} />
                  <a href="mailto:grattanvaz@acoustcden.com" className="text-muted-foreground hover:text-primary transition text-sm sm:text-base break-all">
                    grattanvaz@acoustcden.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-secondary flex-shrink-0" size={20} />
                  <a href="mailto:nadeem@acoustcden.com" className="text-muted-foreground hover:text-primary transition text-sm sm:text-base break-all">
                    nadeem@acoustcden.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl sm:text-2xl font-playfair text-primary mb-4">Business Hours</h3>
              <div className="flex items-center space-x-3">
                <Clock className="text-secondary flex-shrink-0" size={20} />
                <p className="text-muted-foreground text-sm sm:text-base">Monday - Saturday: 10am - 6pm</p>
              </div>
            </div>

            {/* Social Media handles */}
            <div>
              <h3 className="text-xl sm:text-2xl font-playfair text-primary mb-4">Social Media handles</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/acoustc-den-5076b227a/"
                  className="text-secondary hover:text-primary transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100093148078003"
                  className="text-secondary hover:text-primary transition"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Links */}


      </div>
    </footer>
  );
}
