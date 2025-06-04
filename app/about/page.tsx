import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Award, Radio, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
            <Link href="/about" className="text-purple-400">
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

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About cree_thedj
                </h1>
                <p className="text-xl text-gray-300 mb-6">Real name: Christopher Baru</p>
                <p className="text-lg text-gray-400 mb-8">
                  Based Nairobi, Kenya • 2+ Years Active • Amapiano, Afrobeats, EDM, Dancehall Reggae, RnB, Pop, Hiphop
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-purple-600/20 text-purple-300">Ampiano</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300">Afrobeat</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300">Urbantone</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300">Hiphop</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300">Rhumba</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300">Pop</Badge>
                  <Badge className="bg-purple-600/20 text-purple-300">Club Remixes</Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/gallery4.jpg?height=600&width=500"
                  alt="cree_thedj in studio"
                  width={500}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">My Journey</h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300 mb-6">
                  My love for music began back in 2010 when I was first introduced to dancehall. The raw energy and rhythm instantly hooked me. By 2013, music had become more than just a hobby; it was my passion. I started learning the basics of DJing, experimenting with mixes, and teaching myself the art of blending beats. My breakthrough came in 2018 when I became fully confident and conversant with the decks, finally able to express myself through music. December 2023 marked a major milestone as I landed my first professional gig at Omega Gardens where I proudly became a resident DJ.
                </p>
                <p className="text-gray-300 mb-6">
                  What started as a passion for music in the vibrant streets of Nakuru, Kabarak has now grown into a mission to unite people through the universal language of sound. As cree_thedj, I specialize in creating seamless blends of House music with authentic Afrobeat rhythms, producing a unique sound that resonates with diverse audiences. My musical influences span from Amapiano legends of South Africa to Afrobeat pioneers of Nigeria, fused with a wide spectrum of genres including EDM, Dancehall, Reggae, RnB, Pop, and Hip Hop.
                </p>
                <p className="text-gray-300">
                  What drives my musical journey is the belief that music has the power to transcend boundaries. Whether I’m playing at clubs, graduation parties, outdoor events, or private celebrations, my goal is always the same: to create unforgettable moments where people let go, feel the vibe, and lose themselves in the rhythm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Highlights */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Career Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white font-bold mb-2">Graduation Parties and Corporate Events</h3>
                  <p className="text-gray-400 mb-4">Opened for parties, corporate events, anf any events</p>
                  <Badge variant="secondary">2024 - </Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Radio className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white font-bold mb-2">Weekly Gigs</h3>
                  <p className="text-gray-400 mb-4">Weekly show "Midnight Vibes" at the Lexy Club Nakuru Kabarak</p>
                  <Badge variant="secondary">Successfuly Completed</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Music className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white font-bold mb-2">Galas and Dinners</h3>
                  <p className="text-gray-400 mb-4">"Kabarak Nights Gala Dinners" remix reach of rich vibes</p>
                  <Badge variant="secondary">2023 - 2024</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white font-bold mb-2">Round Tours</h3>
                  <p className="text-gray-400 mb-4">Performed in 10+ clubs in Nakuru city and Karatina</p>
                  <Badge variant="secondary">2022-2024</Badge>
                </CardContent>
              </Card>

              {/*
              
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Radio className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white font-bold mb-2">Podcast Features</h3>
                  <p className="text-gray-400 mb-4">Guest on "African Electronic" and "House Heads" podcasts</p>
                  <Badge variant="secondary">2023-2024</Badge>
                </CardContent>
              </Card>

              */}


              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl text-white font-bold mb-2">Collaborations</h3>
                  <p className="text-gray-400 mb-4">Worked with top mcs' on exclusive events.</p>
                  <Badge variant="secondary">2023-2024</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">My DJ Philosophy</h2>
              <blockquote className="text-2xl text-gray-300 italic mb-8">
                "Every set is a conversation between the DJ and the crowd. My job is to listen to what the dance floor
                is telling me and respond with the perfect track at the perfect moment."
              </blockquote>
              <p className="text-lg text-gray-400">
                What sets me apart is my ability to read the room and adapt my sound in real-time. Whether the crowd
                needs deep, hypnotic grooves or high-energy Afrobeat anthems, I bring the versatility and technical
                skill to deliver exactly what the moment demands.
              </p>
            </div>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Behind the Scenes</h2>

            <div className="grid md:grid-cols-2 gap-8">
            {/*
              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Studio setup"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Studio Sessions</h3>
                <p className="text-gray-400">Crafting the perfect mix in my studio</p>
              </div>
            */}
              <div className="text-center">
                <Image
                  src="/equipment.jpg?height=300&width=300"
                  alt="Equipment setup"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Equipment</h3>
                <p className="text-gray-400">Pioneer CDJ-3000s and DJM-900NXS2 mixer</p>
              </div>
              <div className="text-center">
                <Image
                  src="/preparation.jpg?height=300&width=300"
                  alt="Preparation"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Preparation</h3>
                <p className="text-gray-400">Hours of track selection and set preparation</p>
              </div>
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
