import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Game } from "@/lib/games"

interface GameCardProps {
  game: Game
  variant?: "default" | "compact"
}

export function GameCard({ game, variant = "default" }: GameCardProps) {
  if (variant === "compact") {
    return (
      <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
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
              <p className="text-white/60 text-sm mb-2 line-clamp-2">{game.description}</p>
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
    )
  }

  return (
    <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
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
          {game.featured && <Badge className="absolute top-3 right-3 bg-yellow-600 text-white">Featured</Badge>}
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
            <span className="text-xs text-white/50">{game.size}</span>
          </div>
          <div className="flex gap-2">
            <Link href={`/games/${game.id}`} className="flex-1">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </Link>
            <Link href={`/games/${game.id}`}>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                View
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
