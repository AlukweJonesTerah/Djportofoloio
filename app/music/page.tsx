import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Download, ExternalLink, Music2, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MusicPage() {
  const latestReleases = [
    {
      title: "Kabarak Nights (Remix)",
      artist: "cree_thedj ft. Burna Boy",
      duration: "4:32",
      plays: "15.2K",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Midnight Groove",
      artist: "cree_thedj",
      duration: "6:18",
      plays: "8.7K",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Afro House Anthem",
      artist: "cree_thedj",
      duration: "5:45",
      plays: "12.1K",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const liveMixes = [
    {
      title: "Rooftop Sessions Vol. 3",
      venue: "Lexy Nakuru",
      duration: "62 min",
      date: "Dec 2024",
      plays: "25.3K",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Festival Vibes Live",
      venue: "Events Music Festival",
      duration: "90 min",
      date: "Nov 2024",
      plays: "45.7K",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Deep House Journey",
      venue: "Club Quilox",
      duration: "75 min",
      date: "Oct 2024",
      plays: "18.9K",
      image: "/placeholder.svg?height=200&width=350",
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

            {/*

            <Link href="/music" className="text-purple-400">
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

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Music & Mixes
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore my latest releases, live sets, and exclusive mixes. From Club mix journeys to Afrobeat anthems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">Ampiano</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">Afrobeat</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">Urbantone</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">Hiphop</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">Rhumba</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 px-4 py-2">Club Remixes</Badge>
            </div>
          </div>
        </section>

        {/* Latest Releases */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Latest Releases</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {latestReleases.map((track, index) => (
                <Card key={index} className="bg-black border-gray-800 hover:border-purple-400 transition-colors">
                  <CardContent className="p-6">
                    <Image
                      src={track.image || "/placeholder.svg"}
                      alt={track.title}
                      width={300}
                      height={300}
                      className="w-full rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                    <p className="text-gray-400 mb-4">{track.artist}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {track.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {track.plays}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Play className="mr-2 h-4 w-4" />
                        Play
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              >
                View All Releases
              </Button>
            </div>
          </div>
        </section>

        {/* Live Mixes */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Live Sets & Performances</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {liveMixes.map((mix, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Image
                        src={mix.image || "/placeholder.svg"}
                        alt={mix.title}
                        width={150}
                        height={100}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{mix.title}</h3>
                        <p className="text-gray-400 mb-2">{mix.venue}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {mix.duration}
                          </span>
                          <span>{mix.date}</span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {mix.plays}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Play className="mr-2 h-4 w-4" />
                            Play
                          </Button>
                          <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                            Tracklist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Mixes */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Studio Mixes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-black border-gray-800 hover:border-purple-400 transition-colors">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                      <Music2 className="h-12 w-12 text-purple-400" />
                    </div>
                    <h3 className="font-bold mb-1">Deep House Mix #{i}</h3>
                    <p className="text-sm text-gray-400 mb-3">45 min • Studio Session</p>
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                      <Play className="mr-2 h-4 w-4" />
                      Play Mix
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Production Work */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Original Productions & Remixes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Original Tracks</h3>
                  <p className="text-gray-400 mb-6">
                    Explore my original productions that blend traditional Afrobeat elements with modern house music.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex justify-between">
                      <span>Kabarak Nights</span>
                      <span className="text-purple-400">2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Midnight Groove</span>
                      <span className="text-purple-400">2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Afro House Anthem</span>
                      <span className="text-purple-400">2023</span>
                    </li>
                  </ul>
                  <Button className="bg-purple-600 hover:bg-purple-700">Listen on Spotify</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Remixes & Edits</h3>
                  <p className="text-gray-400 mb-6">
                    Custom remixes and edits of popular tracks, adding my signature Afro-house touch.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex justify-between">
                      <span>Burna Boy - Last Last (cree Remix)</span>
                      <span className="text-purple-400">2024</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wizkid - Essence (House Edit)</span>
                      <span className="text-purple-400">2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tems - Free Mind (Deep Mix)</span>
                      <span className="text-purple-400">2023</span>
                    </li>
                  </ul>
                  <Button className="bg-purple-600 hover:bg-purple-700">Download Edits</Button>
                </CardContent>
              </Card>
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
      </div>
    </div>
  )
}
