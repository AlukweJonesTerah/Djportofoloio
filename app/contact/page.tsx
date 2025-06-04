"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Instagram, Youtube, Music2, Calendar, DollarSign, Clock } from "lucide-react"
import Link from "next/link"
import {useState} from "react"

export default function ContactPage() {
  const [selected, setSelected] = useState("");

  const handleChange = (value) => {
    setSelected(value);
    if (value === "custom" || value === "discuss") {
      window.open("/rateCard.pdf", "_blank");
    }

    const link = document.createElement("a");
    link.href = "/rateCard.pdf";
    link.download = "rateCardpdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-400">
            cree_thedj
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-400 transition-colors">
              About
            </Link>

            {/*

            <Link href="/music" className="hover:text-purple-400 transition-colors">
              Music
            </Link>

            */}

            <Link href="/events" className="hover:text-purple-400 transition-colors">
              Events
            </Link>
            <Link href="/gallery" className="hover:text-purple-400 transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-purple-400">
              Contact
            </Link>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700" asChild>
            <a
              href="https://wa.me/254112386877?text=Hi%20cree_thedj,%20I'm%20interested%20in%20booking%20you%20for%20an%20event.%20Can%20we%20discuss%20details?"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Me
            </a>
          </Button>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl text-white font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Book cree_thedj
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to bring electrifying beats to your event? Let's create an unforgettable experience together.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="bg-black border-gray-800">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-purple-400">Booking Request</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-purple-200" htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          className="bg-gray-800 border-gray-700 text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label className="text-purple-200" htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-gray-800 border-gray-700 text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-purple-200" htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          className="bg-gray-800 border-gray-700 text-white"
                          placeholder="+254 xxx xxx xxxx"
                        />
                      </div>
                      <div>
                        <Label className="text-purple-200" htmlFor="event-type">Event Type *</Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="club">Club/Nightclub</SelectItem>
                            <SelectItem value="festival">Festival</SelectItem>
                            <SelectItem value="private">Private Party</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="rooftop">Rooftop/Pool Party</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-purple-200" htmlFor="location">Event Location *</Label>
                        <Input
                          id="location"
                          className="bg-gray-800 border-gray-700 text-white"
                          placeholder="City, State/Country"
                        />
                      </div>
                      <div>
                        <Label className="text-purple-200" htmlFor="date">Preferred Date *</Label>
                        <Input id="date" type="date" className="bg-gray-800 border-gray-700 text-white" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-purple-200" htmlFor="duration">Event Duration</Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 hours</SelectItem>
                            <SelectItem value="2-4">2-4 hours</SelectItem>
                            <SelectItem value="4-6">4-6 hours</SelectItem>
                            <SelectItem value="6+">6+ hours</SelectItem>
                            <SelectItem value="all-night">All night</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-purple-200" htmlFor="budget">Estimated Budget</Label>
                        <Select onValueChange={handleChange}>
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">Under Ksh 15000</SelectItem>
                            <SelectItem value="500-1m">Ksh 15000 - Ksh20000</SelectItem>
                            <SelectItem value="1-2m">Ksh 25000 - Ksh 30000</SelectItem>
                            <SelectItem value="2m+">Ksh35000+</SelectItem>
                            <SelectItem value="discuss">Let's discuss - <a href="/rateCard.pdf" target="_blank" rel="noopener noreferrer">Download Rate card </a></SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-purple-200" htmlFor="services">Services Needed</Label>
                      <Select onValueChange={handleChange}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select services" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dj-only">DJ Set Only</SelectItem>
                          <SelectItem value="dj-sound">DJ + Sound System</SelectItem>
                          <SelectItem value="dj-lights">DJ + Lighting</SelectItem>
                          <SelectItem value="full-package">Full Package (DJ + Sound + Lights)</SelectItem>
                          <SelectItem value="custom">
                            Custom Package - Download Rate card
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-purple-200" htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                        placeholder="Tell me more about your event, music preferences, special requests, etc."
                      />
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                      Send Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Availability */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="bg-black border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-purple-400">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-gray-400">chriscree059@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">WhatsApp</p>
                          <a
                            href="https://wa.me/254112386877"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300"
                          >
                            +254 112 386 877
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Based in</p>
                          <p className="text-gray-400">Nairobi, Kenya</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}

                { /* 
                <Card className="bg-black border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-purple-400">Current Availability</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-green-400" />
                        <div>
                          <p className="font-medium text-green-400">Available</p>
                          <p className="text-gray-400">January 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-yellow-400" />
                        <div>
                          <p className="font-medium text-yellow-400">Limited</p>
                          <p className="text-gray-400">February 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-green-400" />
                        <div>
                          <p className="font-medium text-green-400">Available</p>
                          <p className="text-gray-400">March 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card> 

                */}

                {/* Pricing Info */}
                <Card className="bg-black border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-purple-400">Pricing Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Club/Private Events</p>
                          <p className="text-gray-400">Starting at Ksh 15000</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Festivals/Large Events</p>
                          <p className="text-gray-400"><a href="rateCard.pdf">Custom pricing available</a></p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">Response Time</p>
                          <p className="text-gray-400">Within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div>
                          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={handleChange}>
                            Download Rate Card
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">Prefer to chat directly? (Page Under development use chat for now !!)</p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a
                  href="https://wa.me/254112386877?text=Hi%20cree_thedj,%20I'm%20interested%20in%20booking%20you%20for%20an%20event.%20Can%20we%20discuss%20details?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Connect on Social Media</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Follow me for the latest mixes, behind-the-scenes content, and event updates.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                asChild
              >
                <a href="https://www.instagram.com/cree_thedj" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                asChild
              >
                <a href="https://www.youtube.com/@miniyakent7476" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" />
                  YouTube
                </a>
              </Button>

              {/*

              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              >
                <Music2 className="mr-2 h-5 w-5" />
                SoundCloud
              </Button>

              */}

            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-purple-600/20 text-purple-300">@cree_thedj</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">5K+ Followers</Badge>
              <Badge className="bg-purple-600/20 text-purple-300">Monthly Updates</Badge>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <Card className="bg-black border-gray-800 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Stay Updated</h3>
                <p className="text-gray-400 mb-6">
                  Subscribe to get notified about new mixes, upcoming shows, and exclusive content.
                </p>
                <div className="flex gap-4">
                  <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white flex-1" />
                  <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">© 2025 cree_thedj. All rights reserved.</div>
              <div className="flex space-x-6">
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </Link>

                {/*
                <Link href="/music" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Music
                </Link>

                */}

                <Link href="/events" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Events
                </Link>
                <Link href="/gallery" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Gallery
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
 )
}

