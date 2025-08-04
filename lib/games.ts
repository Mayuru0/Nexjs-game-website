import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from "./firebase"

export interface Game {
  id?: string
  title: string
  description: string
  longDescription?: string
  category: string
  image: string
  screenshots?: string[]
  downloads: string
  rating: number
  reviews?: number
  size: string
  releaseDate: string
  version?: string
  developer?: string
  downloadUrl?: string
  featured?: boolean
  requirements?: {
    os: string
    processor: string
    memory: string
    graphics: string
    storage: string
  }
  features?: string[]
}

// Get all games
export async function getAllGames(): Promise<Game[]> {
  try {
    const gamesCollection = collection(db, "games")
    const gamesSnapshot = await getDocs(gamesCollection)
    return gamesSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Game,
    )
  } catch (error) {
    console.error("Error fetching games:", error)
    return []
  }
}

// Get featured games
export async function getFeaturedGames(): Promise<Game[]> {
  try {
    const gamesCollection = collection(db, "games")
    const featuredQuery = query(gamesCollection, where("featured", "==", true), limit(6))
    const gamesSnapshot = await getDocs(featuredQuery)
    return gamesSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Game,
    )
  } catch (error) {
    console.error("Error fetching featured games:", error)
    return []
  }
}

// Get games by category
export async function getGamesByCategory(category: string): Promise<Game[]> {
  try {
    const gamesCollection = collection(db, "games")
    const categoryQuery = query(gamesCollection, where("category", "==", category), orderBy("downloads", "desc"))
    const gamesSnapshot = await getDocs(categoryQuery)
    return gamesSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Game,
    )
  } catch (error) {
    console.error("Error fetching games by category:", error)
    return []
  }
}

// Get single game by ID
export async function getGameById(id: string): Promise<Game | null> {
  try {
    const gameDoc = doc(db, "games", id)
    const gameSnapshot = await getDoc(gameDoc)

    if (gameSnapshot.exists()) {
      return {
        id: gameSnapshot.id,
        ...gameSnapshot.data(),
      } as Game
    }
    return null
  } catch (error) {
    console.error("Error fetching game:", error)
    return null
  }
}

// Add new game
export async function addGame(game: Omit<Game, "id">): Promise<string | null> {
  try {
    const gamesCollection = collection(db, "games")
    const docRef = await addDoc(gamesCollection, game)
    return docRef.id
  } catch (error) {
    console.error("Error adding game:", error)
    return null
  }
}

// Update game
export async function updateGame(id: string, updates: Partial<Game>): Promise<boolean> {
  try {
    const gameDoc = doc(db, "games", id)
    await updateDoc(gameDoc, updates)
    return true
  } catch (error) {
    console.error("Error updating game:", error)
    return false
  }
}

// Delete game
export async function deleteGame(id: string): Promise<boolean> {
  try {
    const gameDoc = doc(db, "games", id)
    await deleteDoc(gameDoc)
    return true
  } catch (error) {
    console.error("Error deleting game:", error)
    return false
  }
}

// Upload game file
export async function uploadGameFile(file: File, gameId: string): Promise<string | null> {
  try {
    const fileRef = ref(storage, `games/${gameId}/${file.name}`)
    await uploadBytes(fileRef, file)
    const downloadUrl = await getDownloadURL(fileRef)
    return downloadUrl
  } catch (error) {
    console.error("Error uploading game file:", error)
    return null
  }
}

// Upload game image
export async function uploadGameImage(
  file: File,
  gameId: string,
  type: "main" | "screenshot",
  index?: number,
): Promise<string | null> {
  try {
    const fileName = type === "main" ? "main.jpg" : `screenshot_${index}.jpg`
    const imageRef = ref(storage, `games/${gameId}/images/${fileName}`)
    await uploadBytes(imageRef, file)
    const downloadUrl = await getDownloadURL(imageRef)
    return downloadUrl
  } catch (error) {
    console.error("Error uploading game image:", error)
    return null
  }
}

// Delete file from storage
export async function deleteGameFile(filePath: string): Promise<boolean> {
  try {
    const fileRef = ref(storage, filePath)
    await deleteObject(fileRef)
    return true
  } catch (error) {
    console.error("Error deleting file:", error)
    return false
  }
}

// Search games
export async function searchGames(searchTerm: string): Promise<Game[]> {
  try {
    // Note: Firestore doesn't support full-text search natively
    // For production, consider using Algolia or similar service
    const gamesCollection = collection(db, "games")
    const gamesSnapshot = await getDocs(gamesCollection)
    const allGames = gamesSnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Game,
    )

    // Client-side filtering (not ideal for large datasets)
    return allGames.filter(
      (game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  } catch (error) {
    console.error("Error searching games:", error)
    return []
  }
}
