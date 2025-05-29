"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ExternalLink, Star, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  // Handle Instagram post opening
  const handleInstagramClick = (instagramUrl: string) => {
    window.open(instagramUrl, "_blank", "noopener,noreferrer")
  }

  const upcomingEvents = [
    {
      title: "New Year's Eve Celebration",
      venue: "Nakuru Club",
      date: "Dec 31, 2024",
      time: "10:00 PM - 4:00 AM",
      location: "Nakuru, Kenya",
      capacity: "200+",
      ticketUrl: "#",
      image: "/past-event.jpg?height=200&width=350",
    },
    {
      title: "Valentine's Day Special",
      venue: "Lexy Club Kabarak",
      date: "Feb 14, 2025",
      time: "8:00 PM - 2:00 AM",
      location: "Kabarak, Kenya",
      capacity: "150",
      ticketUrl: "#",
      image: "/past-event2.jpg?height=200&width=350",
    },
  ]

  const pastEvents = [
    {
      title: "Kabarak University Festival 2024",
      venue: "Kabarak University",
      date: "Nov 15, 2024",
      attendance: "800+",
      description: "Main stage performance with 2-hour Amapiano and Afrobeat set",
      image: "/past-gallery1.jpg?height=300&width=400",
      instagramUrl: "https://www.instagram.com/p/C9iXIDjtbw1/",
      type: "festival",
    },
    {
      title: "Corporate Gala Dinner",
      venue: "Nakuru Hotel",
      date: "Oct 20, 2024",
      attendance: "150",
      description: "Sophisticated evening with mixed genres for corporate celebration",
      image: "/past-event3.jpg?height=300&width=400",
      instagramUrl: "https://www.instagram.com/cree_thedj/p/C9iXIDjtbw1/",
      type: "corporate",
    },
    {
      title: "Weekend Club Night",
      venue: "Lexy Club Nakuru",
      date: "Sep 12, 2024",
      attendance: "120+",
      description: "High-energy night celebrating Amapiano and Urbantone",
      image: "/past-event (2).jpg?height=300&width=400",
      instagramUrl: "https://www.instagram.com/cree_thedj/p/C9Ouc0OtDOe/",
      type: "club",
    },
    {
      title: "Graduation After Party",
      venue: "Kabarak University Grounds",
      date: "Aug 25, 2024",
      attendance: "300+",
      description: "Celebration set for graduating students with diverse music selection",
      image: "/past-event2.jpg?height=300&width=400",
      instagramUrl: "https://www.instagram.com/p/DCD7XfsNNiu/",
      type: "graduation",
    },
  ]

  const featuredEvents = [
    {
      title: "Kabarak University Festival 2024",
      venue: "Kabarak University Main Campus",
      date: "November 15, 2024",
      attendance: "800+",
      duration: "2-hour set",
      description:
        "Headlined the main stage with an electrifying 2-hour journey through Amapiano, Afrobeat, and Urbantone. The crowd was incredible as we celebrated the university's annual festival.",
      image: "/FeaturedEvent.jpg?height=500&width=600",
      instagramUrl: "https://www.instagram.com/p/C9UGLYXt3uY/",
      highlights: ["Main stage headliner", "2-hour set", "800+ students", "Live mixing"],
    },
  ]

  const eventGallery = [
    {
      id: 1,
      title: "Behind the Decks - Club Night",
      event: "Lexy Club Weekend Session",
      date: "Dec 5, 2024",
      venue: "Lexy Club Nakuru",
      instagramUrl: "https://www.instagram.com/p/DBf87zttnbw/",
      type: "instagram",
      thumbnail:
        "/event-gallery1.jpg",
    },
    {
      id: 2,
      title: "Festival Performance Highlights",
      event: "University Festival 2024",
      date: "Nov 16, 2024",
      venue: "Kabarak University",
      instagramUrl: "https://www.instagram.com/cree_thedj/reel/DAYQkEZNSq4/",
      type: "instagram",
      thumbnail:
        "/event-gallery2.jpg",
    },
    {
      id: 3,
      title: "Corporate Event Setup",
      event: "Gala Dinner Night",
      date: "Oct 25, 2024",
      venue: "Nakuru Hotel",
      instagramUrl: "https://www.instagram.com/p/DAnc9cLtWom/",
      type: "instagram",
      thumbnail:
        "/event-gallery3.jpg",
    },
  ]

  const testimonials = [
    {
      quote: "cree_thedj brought incredible energy to our university festival. The students couldn't stop dancing!",
      author: "Sarah K.",
      title: "Events Coordinator at Kabarak University",
      rating: 5,
    },
    {
      quote: "Professional, punctual, and knows exactly how to read the crowd. Perfect for our corporate event!",
      author: "James M.",
      title: "Nakuru Hotel Events Manager",
      rating: 5,
    },
    {
      quote: "The perfect blend of Amapiano and Afrobeat. Our club night was absolutely electric!",
      author: "Grace W.",
      title: "Lexy Club Manager",
      rating: 5,
    },
  ]

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
            <Link href="/events" className="text-purple-400">
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

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Events & Performances
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From university festivals to intimate club nights. See where I've been bringing the beats across Kenya.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}

        {/*
        
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Upcoming Gigs</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-black border-gray-800 hover:border-purple-400 transition-colors">
                  <CardContent className="p-0">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={350}
                      height={200}
                      className="w-full rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-purple-400 mb-4">{event.venue}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Users className="h-4 w-4" />
                          {event.capacity} capacity
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700" asChild>
                          <a
                            href="https://wa.me/254112386877?text=Hi%20cree_thedj,%20I'm%20interested%20in%20attending%20your%20upcoming%20event.%20Can%20you%20share%20more%20details?"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Info
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-purple-400 text-purple-400">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        */}

        {/* Featured Past Event */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Featured Event</h2>

            {featuredEvents.map((event, index) => (
              <div key={index} className="mb-12">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto">
                        <Image
                          src={event.image || "/FeaturedEvent.jpg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-purple-600 text-white">Featured Event</Badge>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Button
                            size="sm"
                            className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                            onClick={() => handleInstagramClick(event.instagramUrl)}
                          >
                            <Instagram className="mr-2 h-4 w-4" />
                            View on Instagram
                          </Button>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl text-white font-bold mb-4">{event.title}</h3>
                        <p className="text-purple-400 mb-4">{event.venue}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="h-4 w-4" />
                            {event.venue}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Users className="h-4 w-4" />
                            {event.attendance} Attendance
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Clock className="h-4 w-4" />
                            {event.duration}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6">{event.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {event.highlights.map((highlight, i) => (
                            <Badge key={i} variant="outline" className="border-purple-400/50 text-purple-300">
                              {highlight}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700"
                            onClick={() => handleInstagramClick(event.instagramUrl)}
                          >
                            <Instagram className="mr-2 h-4 w-4" />
                            View Highlights
                          </Button>
                          <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                            <a href="/gallery" target="_blank" rel="noopener noreferrer">
                                View Gallery              
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Event Gallery with Instagram Integration */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Event Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {eventGallery.map((item) => (
                <Card
                  key={item.id}
                  className="bg-black border-gray-800 hover:border-purple-400 transition-colors group cursor-pointer"
                  onClick={() => handleInstagramClick(item.instagramUrl)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={item.thumbnail || "/event-gallery1.jpg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=300&width=400"
                        }}
                      />

                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                        <Button
                          size="sm"
                          className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                        >
                          <Instagram className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="absolute top-2 left-2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-xs">Instagram</Badge>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-sm text-white mb-1">{item.title}</h3>
                      <p className="text-purple-400 text-xs mb-2">{item.event}</p>

                      <div className="space-y-1 mb-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.venue}
                        </div>
                      </div>

                      <Button size="sm" variant="outline" className="w-full border-purple-400 text-purple-400 text-xs">
                        <Instagram className="mr-1 h-3 w-3" /> View Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Past Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-400 transition-colors">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-black/70 text-white capitalize">
                          {event.type}
                        </Badge>
                      </div>
                      {event.instagramUrl && (
                        <div className="absolute bottom-3 right-3">
                          <Button
                            size="sm"
                            className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                            onClick={() => handleInstagramClick(event.instagramUrl)}
                          >
                            <Instagram className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-purple-400 text-sm mb-3">{event.venue}</p>

                      <div className="space-y-1 mb-3 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" />
                          {event.attendance} people
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-3">{event.description}</p>

                      <div className="flex gap-2">
                        {event.instagramUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-purple-400 text-purple-400 text-xs"
                            onClick={() => handleInstagramClick(event.instagramUrl)}
                          >
                            <Instagram className="mr-1 h-3 w-3" /> View Post
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Event Statistics</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-400">Events Played</div>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">2K+</div>
                  <div className="text-gray-400">Total Audience</div>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
                  <div className="text-gray-400">Cities Covered</div>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">What People Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-4 italic">"{testimonial.quote}"</blockquote>
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
