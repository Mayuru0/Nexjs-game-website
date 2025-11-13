import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Gamepad2, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  // Mock data - in real app this would come from Firebase
  const featuredGames = [
    {
      id: "1",
      title: "Cyber Runner 2077",
      description: "A futuristic endless runner with stunning cyberpunk visuals",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "12.5K",
      rating: 4.8,
      category: "Action",
      featured: true,
    },
    {
      id: "2",
      title: "Mystic Quest",
      description: "Embark on an epic fantasy adventure in this RPG masterpiece",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "8.2K",
      rating: 4.6,
      category: "RPG",
      featured: true,
    },
    {
      id: "3",
      title: "Space Defender",
      description: "Defend Earth from alien invasion in this intense shooter",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "15.1K",
      rating: 4.9,
      category: "Shooter",
      featured: true,
    },
  ]

  const popularGames = [
    {
      id: "4",
      title: "Puzzle Master",
      description: "Challenge your mind with hundreds of unique puzzles",
      image: "/placeholder.svg?height=200&width=300",
      downloads: "25.3K",
      rating: 4.7,
      category: "Puzzle",
    },
    {
      id: "5",
      title: "Racing Thunder",
      description: "High-speed racing action with realistic physics",
      image: "/placeholder.svg?height=200&width=300",
      downloads: "18.9K",
      rating: 4.5,
      category: "Racing",
    },
    {
      id: "6",
      title: "Tower Defense Pro",
      description: "Strategic tower defense with unique upgrade paths",
      image: "/placeholder.svg?height=200&width=300",
      downloads: "22.1K",
      rating: 4.8,
      category: "Strategy",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">GameHub</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/games" className="text-white/80 hover:text-purple-400 transition-colors">
                Games
              </Link>
              <Link href="/categories" className="text-white/80 hover:text-purple-400 transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-white/80 hover:text-purple-400 transition-colors">
                About
              </Link>     
            </nav>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Games</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Download and play the best indie games, from action-packed adventures to mind-bending puzzles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <Download className="h-5 w-5 mr-2" />
              Browse Games
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Featured Games</h3>
            <Link href="/games">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <Card
                key={game.id}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-purple-600 text-white">{game.category}</Badge>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{game.title}</h4>
                    <p className="text-white/70 mb-4 text-sm">{game.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {game.downloads}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                          {game.rating}
                        </div>
                      </div>
                    </div>
                    <Link href={`/games/${game.id}`}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8">Popular This Week</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game) => (
              <Card key={game.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{game.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{game.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-white/50">
                          <span>{game.downloads}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {game.rating}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {game.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-white/80">Games Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-white/80">Total Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-white/80">Active Players</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">GameHub</span>
              </div>
              <p className="text-white/60 text-sm">
                Your ultimate destination for discovering and downloading amazing indie games.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Games</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/games?category=action" className="hover:text-purple-400">
                    Action
                  </Link>
                </li>
                <li>
                  <Link href="/games?category=rpg" className="hover:text-purple-400">
                    RPG
                  </Link>
                </li>
                <li>
                  <Link href="/games?category=puzzle" className="hover:text-purple-400">
                    Puzzle
                  </Link>
                </li>
                <li>
                  <Link href="/games?category=strategy" className="hover:text-purple-400">
                    Strategy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/help" className="hover:text-purple-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-purple-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-purple-400">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/privacy" className="hover:text-purple-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-purple-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/dmca" className="hover:text-purple-400">
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
