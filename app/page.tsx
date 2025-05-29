"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Music, Users, MapPin, Instagram, Youtube, Music2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function HomePage() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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
            <Link href="/contact" className="hover:text-purple-400 transition-colors">
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/gallery5.jpg?height=1080&width=1920"
            alt="DJ cree_thedj performing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            cree_thedj
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Electrifying Beats for Unforgettable Nights</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/*

            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>

            */}

            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              asChild
            >
              <a
                href="https://wa.me/254112386877?text=Hi%20cree_thedj,%20I'm%20interested%20in%20booking%20you%20for%20an%20event.%20Can%20we%20discuss%20details?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Me
              </a>
            </Button>

            {/*

            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
            >
              <Music className="mr-2 h-5 w-5" />
              View Mixes
            </Button>

            */}

          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional DJ blending Ampiano and Afrobeat vibes. Available for clubs, events, corporate, festivals, and private bookings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Ampiano
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Afrobeat
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Urbantone
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Hiphop
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Rhumba
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Pop
            </Badge>
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 px-4 py-2">
              Club Remixes
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Mix */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Featured Mix</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div
                  className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors relative overflow-hidden"
                  onClick={() => setShowVideoModal(true)}
                >
                  {/* YouTube Thumbnail */}
                  <Image
                    src="https://img.youtube.com/vi/M2xNnFevuqc/maxresdefault.jpg"
                    alt="Featured Mix Thumbnail"
                    fill
                    className="object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=400&width=700"
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-purple-600 rounded-full p-4 mb-4 hover:bg-purple-700 transition-colors">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <p className="text-white font-semibold">Click to Play Mix</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl text-white font-bold mb-2">Amapiano & Afrobeat Mix - Live Session</h3>
                <p className="text-gray-400 mb-4">
                  A high-energy journey through the best of Amapiano and Afrobeat, featuring the latest hits and classic
                  favorites.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    2.1K views
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Nakuru, Kenya
                  </span>
                  <span className="flex items-center gap-1">
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setShowVideoModal(true)}>
                    <Play className="mr-2 h-4 w-4" />
                    Play Mix
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                    asChild
                  >
                    <a href="https://youtu.be/M2xNnFevuqc" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">Events Played</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">5K+</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
              <div className="text-gray-400">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Follow the Journey</h2>
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              asChild
            >
              <a href="https://www.instagram.com/cree_thedj" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              asChild
            >
              <a href="https://www.youtube.com/@miniyakent7476" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>

            {/*

            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
            >
              <Music2 className="h-5 w-5" />
            </Button>

*/}

          </div>
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

      {/* YouTube Video Modal */}
      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="sm:max-w-[900px] bg-gray-900 border-gray-800 p-0 overflow-hidden">
          <DialogTitle className="sr-only">cree_thedj - Amapiano & Afrobeat Mix - Live Session</DialogTitle>
          <div className="aspect-video w-full">
            {showVideoModal && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/M2xNnFevuqc?autoplay=1"
                title="cree_thedj - Amapiano & Afrobeat Mix"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
