"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Star, Search, Filter, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  // Mock data - in real app this would come from Firebase
  const allGames = [
    {
      id: "1",
      title: "Cyber Runner 2077",
      description: "A futuristic endless runner with stunning cyberpunk visuals and fast-paced gameplay",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "12.5K",
      rating: 4.8,
      category: "Action",
      size: "245 MB",
      releaseDate: "2024-01-15",
    },
    {
      id: "2",
      title: "Mystic Quest",
      description: "Embark on an epic fantasy adventure in this RPG masterpiece with deep storylines",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "8.2K",
      rating: 4.6,
      category: "RPG",
      size: "1.2 GB",
      releaseDate: "2024-02-20",
    },
    {
      id: "3",
      title: "Space Defender",
      description: "Defend Earth from alien invasion in this intense top-down shooter",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "15.1K",
      rating: 4.9,
      category: "Shooter",
      size: "180 MB",
      releaseDate: "2024-01-08",
    },
    {
      id: "4",
      title: "Puzzle Master",
      description: "Challenge your mind with hundreds of unique puzzles and brain teasers",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "25.3K",
      rating: 4.7,
      category: "Puzzle",
      size: "95 MB",
      releaseDate: "2023-12-10",
    },
    {
      id: "5",
      title: "Racing Thunder",
      description: "High-speed racing action with realistic physics and stunning tracks",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "18.9K",
      rating: 4.5,
      category: "Racing",
      size: "850 MB",
      releaseDate: "2024-03-05",
    },
    {
      id: "6",
      title: "Tower Defense Pro",
      description: "Strategic tower defense with unique upgrade paths and challenging enemies",
      image: "/placeholder.svg?height=300&width=400",
      downloads: "22.1K",
      rating: 4.8,
      category: "Strategy",
      size: "320 MB",
      releaseDate: "2024-02-14",
    },
  ]

  const categories = ["all", "Action", "RPG", "Shooter", "Puzzle", "Racing", "Strategy"]

  const filteredGames = allGames.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return Number.parseFloat(b.downloads.replace("K", "")) - Number.parseFloat(a.downloads.replace("K", ""))
      case "rating":
        return b.rating - a.rating
      case "newest":
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      case "name":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">GameHub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white/80 hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/games" className="text-white hover:text-purple-400 transition-colors">
                Games
              </Link>
              <Link href="/categories" className="text-white/80 hover:text-purple-400 transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-white/80 hover:text-purple-400 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">All Games</h1>
          <p className="text-white/70">Discover and download amazing games</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
              <Input
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-white/70">
            Showing {sortedGames.length} of {allGames.length} games
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedGames.map((game) => (
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
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">
                    {game.size}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-2">{game.description}</p>
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
                  <div className="flex gap-2">
                    <Link href={`/games/${game.id}`} className="flex-1">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </Link>
                    <Link href={`/games/${game.id}`}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedGames.length === 0 && (
          <div className="text-center py-12">
            <div className="text-white/50 mb-4">
              <Search className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No games found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
