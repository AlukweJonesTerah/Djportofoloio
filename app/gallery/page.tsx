"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, MapPin, Share2, Heart, Eye, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const galleryItems = [
    {
     id: 1,
      type: "instagram",
      instagramUrl: "https://www.instagram.com/p/DDokC2jMM6O/",
      instagramId: "DDokC2jMM6O",
      title: "Graduation Event Highlights via Instagram",
      event: "Sarova Hotel Graduation Party 2024",
      date: "Dec 16, 2024",
      venue: "Sarova Hotel",
      // Instagram post preview image - you can replace with actual thumbnail
      thumbnail:
        "/gallery1.jpg",
    },
    // https://www.instagram.com/p/DC1Cmtgt8Ro/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
    {
      id: 2,
      type: "instagram",
      instagramUrl: "https://www.instagram.com/p/DC1Cmtgt8Ro",
      instagramId: "DC1Cmtgt8Ro",
      title: "Gala Event",
      event: "Law school Gala Event",
      date: "Nov 26, 2024",
      venue: "Kabarak University",
      // Instagram post preview image - you can replace with actual thumbnail
      thumbnail:
        "gallery2.jpg",
    },
    // https://www.instagram.com/p/DCwpF2oNJXL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
    {
      id: 3,
      type: "instagram",
      instagramUrl: "https://www.instagram.com/p/DCwpF2oNJXL/",
      instagramId: "DCwpF2oNJXL",
      title: "Club Launch",
      event: "Kabarak University Festival 2024",
      date: "Nov 24, 2024",
      venue: "Kabarak University",
      // Instagram post preview image - you can replace with actual thumbnail
      thumbnail:
        "gallery3.jpg",
    },
    // https://www.instagram.com/p/DBs8YWVtsPY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
    {
      id: 4,
      type: "instagram",
      instagramUrl: "https://www.instagram.com/p/DBs8YWVtsPY/",
      instagramId: "DBs8YWVtsPY",
      title: "Behind the Scenes",
      event: "Studio Session",
      date: "Dec 5, 2024",
      venue: "Home Studio",
      // Instagram post preview image - you can replace with actual thumbnail
      thumbnail:
        "gallery4.jpg",
    },
    // https://www.instagram.com/p/C-fayLINqCQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
    {
      id: 5,
      type: "instagram",
      instagramUrl: "https://www.instagram.com/p/C-fayLINqCQ/",
      instagramId: "C-fayLINqCQ",
      title: "Behind the Scenes",
      event: "Studio Session",
      date: "Dec 5, 2024",
      venue: "Home Studio",
      // Instagram post preview image - you can replace with actual thumbnail
      thumbnail:
        "gallery5.jpg",
    },
    {
      id: 6,
      type: "image",
      title: "Equipment Setup - Festival Ready",
      event: "Equipment Showcase",
      date: "Jul 30, 2024",
      venue: "Studio",
      thumbnail: "/equipment.jpg?height=300&width=400",
      views: "1.8K",
      likes: "156",
    },
    // {
    //   id: 7,
    //   type: "video",
    //   title: "Corporate Gala Highlights",
    //   event: "Corporate Gala Night",
    //   date: "Jul 18, 2024",
    //   venue: "Nakuru Hotel",
    //   thumbnail: "/placeholder.svg?height=300&width=400",
    //   videoId: "qw-vcZ4EWTU",
    //   duration: "1:55",
    //   views: "2.1K",
    //   likes: "189",
    // },
    {
      id: 8,
      type: "image",
      title: "Club Night Atmosphere",
      event: "Weekend Sessions",
      date: "Jun 30, 2024",
      venue: "Lexy Club Nakuru",
      thumbnail: "/preparation.jpg?height=300&width=400",
      views: "1.9K",
      likes: "167",
    },
    // {
    //   id: 9,
    //   type: "video",
    //   title: "Wedding Reception Magic",
    //   event: "Wedding Reception",
    //   date: "May 15, 2024",
    //   venue: "Nakuru Gardens",
    //   thumbnail: "/placeholder.svg?height=300&width=400",
    //   videoId: "iHQ6ZKOgsgE",
    //   duration: "2:33",
    //   views: "2.4K",
    //   likes: "201",
    // },
  ]

  const featuredVideos = [
    {
      title: "Kabarak University Festival 2024 - Full Set Highlights",
      description: "60-minute journey through Amapiano and Afrobeat from the main stage",
      thumbnail: "/placeholder.svg?height=400&width=700",
      videoId: "qw-vcZ4EWTU",
      duration: "1:00:45",
      views: "5.8K",
      date: "Nov 15, 2024",
    },
    {
      title: "Behind the Scenes: Festival Preparation",
      description: "Exclusive look at the preparation process for university festival performances",
      thumbnail: "/placeholder.svg?height=400&width=700",
      videoId: "iHQ6ZKOgsgE",
      duration: "5:12",
      views: "3.2K",
      date: "Nov 10, 2024",
    },
  ]

  // Handle Instagram post opening
  const handleInstagramClick = (instagramUrl: string) => {
    // Open Instagram post in a new tab
    window.open(instagramUrl, "_blank", "noopener,noreferrer")
  }

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
            <Link href="/events" className="hover:text-purple-400 transition-colors">
              Events
            </Link>
            <Link href="/gallery" className="text-purple-400">
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
              Gallery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Relive the energy, passion, and unforgettable moments from my performances around Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">9+ Events</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">20+ Photos</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">5+ Videos</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">4+ Cities</Badge>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Featured Videos</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredVideos.map((video, index) => (
                <Card key={index} className="bg-black border-gray-800 hover:border-purple-400 transition-colors">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                      <p className="text-gray-400 mb-4">{video.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {video.views} views
                        </span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Media Gallery</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-gray-900 border-gray-800 hover:border-purple-400 transition-colors group"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          // Fallback to placeholder if Instagram image fails to load
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=300&width=400"
                        }}
                      />

                      {/* Overlay for videos */}
                      {item.type === "video" && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700"
                            onClick={() => setSelectedVideo(item.videoId)}
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      )}

                      {/* Overlay for Instagram */}
                      {item.type === "instagram" && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                          <Button
                            size="sm"
                            className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                            onClick={() => handleInstagramClick(item.instagramUrl)}
                          >
                            <Instagram className="h-4 w-4" />
                          </Button>
                        </div>
                      )}

                      {/* Type badge */}
                      <div className="absolute top-2 left-2">
                        <Badge
                          variant={
                            item.type === "video" ? "default" : item.type === "instagram" ? "destructive" : "secondary"
                          }
                          className={`text-xs ${item.type === "instagram" ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}`}
                        >
                          {item.type === "video" ? "Video" : item.type === "instagram" ? "Instagram" : "Photo"}
                        </Badge>
                      </div>

                      {/* Duration badge for videos */}
                      {item.type === "video" && (
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                          {item.duration}
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-sm text-white mb-1 line-clamp-2">{item.title}</h3>
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

                      {(item.type === "video" || item.type === "image") && (
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {item.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {item.likes}
                          </span>
                        </div>
                      )}

                      <div className="flex gap-1">
                        {item.type === "video" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-purple-400 text-purple-400 text-xs"
                            onClick={() => setSelectedVideo(item.videoId)}
                          >
                            <Play className="mr-1 h-3 w-3" /> Play Video
                          </Button>
                        )}

                        {item.type === "instagram" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-purple-400 text-purple-400 text-xs"
                            onClick={() => handleInstagramClick(item.instagramUrl)}
                          >
                            <Instagram className="mr-1 h-3 w-3" /> View Post
                          </Button>
                        )}

                        {item.type === "image" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-purple-400 text-purple-400 text-xs"
                          >
                            View
                          </Button>
                        )}

                        <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">

            {/*
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              >
                Load More Content
              </Button>

            */}

            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Event Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                  <div className="text-gray-400">Events Documented</div>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">20K+</div>
                  <div className="text-gray-400">Total Views</div>
                </CardContent>
              </Card>
              <Card className="bg-black border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
                  <div className="text-gray-400">Cities Covered</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Want Your Event Featured?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book cree_thedj for your next event and get professional documentation of your special moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a
                  href="https://wa.me/254112386877?text=Hi%20cree_thedj,%20I'm%20interested%20in%20booking%20you%20for%20an%20event%20and%20would%20like%20professional%20documentation.%20Can%20we%20discuss%20packages?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              >
                View Packages
              </Button>
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

      {/* YouTube Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[900px] bg-gray-900 border-gray-800 p-0 overflow-hidden">
          <div className="aspect-video w-full">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
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
