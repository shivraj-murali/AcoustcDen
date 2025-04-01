"use client";

import { useState } from "react";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import HeroSection from "@/components/HeroSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    subscribeToNewsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a backend API
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <main>
      <Header />

      <HeroSection
        title="Contact Us"
        imageSrc="https://ext.same-assets.com/3595534517/3166978221.jpeg"
      />

      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-title">Have a chat with our team</h2>

              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <Phone className="text-secondary mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground mb-1">US Toll Free: 1-800-894-5712</p>
                    <p className="text-muted-foreground mb-1">Australia Toll Free: 1-800-764-042</p>
                    <p className="text-muted-foreground">Ireland: +353-1-288-9355</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-secondary mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">info@adamsandbutler.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-secondary mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">Adams & Butler</p>
                    <p className="text-muted-foreground">Dublin, Ireland</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-lg mb-4">Or fill in the form below and we'll be in touch</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name*</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name*</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="flex">
                    <select className="bg-background border border-input h-10 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="+1">United States +1</option>
                      <option value="+44">United Kingdom +44</option>
                      <option value="+353">Ireland +353</option>
                      <option value="+61">Australia +61</option>
                      {/* Add more countries as needed */}
                    </select>
                    <Input
                      id="phone"
                      name="phone"
                      className="rounded-l-none flex-1"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Where would you like to go?</Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="subscribeToNewsletter"
                    checked={formData.subscribeToNewsletter}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label htmlFor="newsletter" className="text-sm font-normal">Sign up to receive travel inspiration, exclusive offers & our latest news.</Label>
                </div>

                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-playfair mb-6">Work with us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in a partnership or joining the Adams & Butler team? We're always looking for talented individuals who share our passion for exceptional travel experiences.
            </p>
            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded">
              View Job Openings
            </Button>
          </div>
        </div>
      </section>

      <NewFooter />
    </main>
  );
}
