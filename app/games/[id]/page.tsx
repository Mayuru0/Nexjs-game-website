import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Star, Calendar, HardDrive, Share2, Heart, Gamepad2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  // Mock data - in real app this would come from Firebase based on params.id
  const game = {
    id: params.id,
    title: "Cyber Runner 2077",
    description:
      "A futuristic endless runner with stunning cyberpunk visuals and fast-paced gameplay. Navigate through neon-lit cityscapes, dodge obstacles, and collect power-ups in this adrenaline-pumping adventure.",
    longDescription:
      "Cyber Runner 2077 takes you into a dystopian future where you play as a cyber-enhanced runner navigating through the dangerous streets of Neo Tokyo. With its stunning visual effects, dynamic soundtrack, and addictive gameplay mechanics, this game offers hours of entertainment. Features include multiple characters to unlock, various power-ups and abilities, leaderboards to compete with friends, and regular content updates.",
    image: "/placeholder.svg?height=400&width=600",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    downloads: "12.5K",
    rating: 4.8,
    reviews: 342,
    category: "Action",
    size: "245 MB",
    releaseDate: "2024-01-15",
    version: "1.2.3",
    developer: "NeonStudio Games",
    requirements: {
      os: "Windows 10/11, macOS 10.15+, Linux Ubuntu 18.04+",
      processor: "Intel i3 / AMD Ryzen 3 or equivalent",
      memory: "4 GB RAM",
      graphics: "DirectX 11 compatible",
      storage: "500 MB available space",
    },
    features: [
      "Stunning cyberpunk visuals",
      "Fast-paced endless runner gameplay",
      "Multiple characters to unlock",
      "Power-ups and special abilities",
      "Global leaderboards",
      "Achievement system",
      "Regular content updates",
      "Cross-platform support",
    ],
  }

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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/games" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Games
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-purple-600 text-white mb-2">{game.category}</Badge>
                <h1 className="text-4xl font-bold text-white mb-2">{game.title}</h1>
                <p className="text-white/80 text-lg max-w-2xl">{game.description}</p>
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Game</h2>
              <p className="text-white/80 leading-relaxed">{game.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">System Requirements</h2>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="space-y-3 text-white/80">
                    <div>
                      <strong className="text-white">OS:</strong> {game.requirements.os}
                    </div>
                    <div>
                      <strong className="text-white">Processor:</strong> {game.requirements.processor}
                    </div>
                    <div>
                      <strong className="text-white">Memory:</strong> {game.requirements.memory}
                    </div>
                    <div>
                      <strong className="text-white">Graphics:</strong> {game.requirements.graphics}
                    </div>
                    <div>
                      <strong className="text-white">Storage:</strong> {game.requirements.storage}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Card */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">Free</div>
                  <p className="text-white/60">Download and play now</p>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4 h-12">
                  <Download className="h-5 w-5 mr-2" />
                  Download Now
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Game Stats */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-4">Game Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/60">
                      <Download className="h-4 w-4 mr-2" />
                      Downloads
                    </div>
                    <span className="text-white">{game.downloads}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/60">
                      <Star className="h-4 w-4 mr-2" />
                      Rating
                    </div>
                    <div className="flex items-center text-white">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {game.rating} ({game.reviews})
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/60">
                      <HardDrive className="h-4 w-4 mr-2" />
                      Size
                    </div>
                    <span className="text-white">{game.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/60">
                      <Calendar className="h-4 w-4 mr-2" />
                      Released
                    </div>
                    <span className="text-white">{new Date(game.releaseDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <Separator className="my-4 bg-white/10" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Version</span>
                    <span className="text-white">{game.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Developer</span>
                    <span className="text-white">{game.developer}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Games */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-4">You Might Also Like</h3>
                <div className="space-y-3">
                  {[
                    { title: "Space Defender", rating: 4.9, image: "/placeholder.svg?height=60&width=60" },
                    { title: "Mystic Quest", rating: 4.6, image: "/placeholder.svg?height=60&width=60" },
                    { title: "Racing Thunder", rating: 4.5, image: "/placeholder.svg?height=60&width=60" },
                  ].map((relatedGame, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image
                        src={relatedGame.image || "/placeholder.svg"}
                        alt={relatedGame.title}
                        width={60}
                        height={60}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{relatedGame.title}</div>
                        <div className="flex items-center text-xs text-white/60">
                          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {relatedGame.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
