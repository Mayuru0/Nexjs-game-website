// This script would seed initial game data to Firestore
// Run this with Node.js after setting up Firebase Admin SDK

const admin = require("firebase-admin")

// Initialize Firebase Admin (you'll need to add your service account key)
// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   projectId: 'your-project-id'
// });

const db = admin.firestore()

const sampleGames = [
  {
    title: "Cyber Runner 2077",
    description: "A futuristic endless runner with stunning cyberpunk visuals and fast-paced gameplay",
    longDescription:
      "Cyber Runner 2077 takes you into a dystopian future where you play as a cyber-enhanced runner navigating through the dangerous streets of Neo Tokyo. With its stunning visual effects, dynamic soundtrack, and addictive gameplay mechanics, this game offers hours of entertainment.",
    category: "Action",
    image: "https://example.com/cyber-runner-main.jpg",
    screenshots: [
      "https://example.com/cyber-runner-1.jpg",
      "https://example.com/cyber-runner-2.jpg",
      "https://example.com/cyber-runner-3.jpg",
    ],
    downloads: "12.5K",
    rating: 4.8,
    reviews: 342,
    size: "245 MB",
    releaseDate: "2024-01-15",
    version: "1.2.3",
    developer: "NeonStudio Games",
    downloadUrl: "https://example.com/downloads/cyber-runner.zip",
    featured: true,
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
    ],
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    title: "Mystic Quest",
    description: "Embark on an epic fantasy adventure in this RPG masterpiece with deep storylines",
    longDescription:
      "Journey through mystical lands filled with ancient magic, dangerous creatures, and legendary treasures. Mystic Quest offers a rich RPG experience with character customization, skill trees, and an engaging storyline that adapts to your choices.",
    category: "RPG",
    image: "https://example.com/mystic-quest-main.jpg",
    screenshots: [
      "https://example.com/mystic-quest-1.jpg",
      "https://example.com/mystic-quest-2.jpg",
      "https://example.com/mystic-quest-3.jpg",
    ],
    downloads: "8.2K",
    rating: 4.6,
    reviews: 156,
    size: "1.2 GB",
    releaseDate: "2024-02-20",
    version: "2.1.0",
    developer: "Fantasy Forge Studios",
    downloadUrl: "https://example.com/downloads/mystic-quest.zip",
    featured: true,
    requirements: {
      os: "Windows 10/11, macOS 11.0+",
      processor: "Intel i5 / AMD Ryzen 5 or equivalent",
      memory: "8 GB RAM",
      graphics: "DirectX 12 compatible",
      storage: "2 GB available space",
    },
    features: [
      "Epic fantasy storyline",
      "Character customization",
      "Skill tree progression",
      "Multiple endings",
      "Rich dialogue system",
      "Beautiful hand-drawn art",
    ],
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    title: "Space Defender",
    description: "Defend Earth from alien invasion in this intense top-down shooter",
    longDescription:
      "Take command of Earth's last defense fleet in this action-packed space shooter. Battle through waves of alien enemies, upgrade your ships, and save humanity from extinction in this thrilling arcade-style game.",
    category: "Shooter",
    image: "https://example.com/space-defender-main.jpg",
    screenshots: [
      "https://example.com/space-defender-1.jpg",
      "https://example.com/space-defender-2.jpg",
      "https://example.com/space-defender-3.jpg",
    ],
    downloads: "15.1K",
    rating: 4.9,
    reviews: 423,
    size: "180 MB",
    releaseDate: "2024-01-08",
    version: "1.5.2",
    developer: "Cosmic Games",
    downloadUrl: "https://example.com/downloads/space-defender.zip",
    featured: true,
    requirements: {
      os: "Windows 10/11, macOS 10.14+, Linux",
      processor: "Intel i3 / AMD FX-6300 or equivalent",
      memory: "4 GB RAM",
      graphics: "DirectX 11 compatible",
      storage: "300 MB available space",
    },
    features: [
      "Intense space combat",
      "Multiple ship types",
      "Weapon upgrades",
      "Boss battles",
      "Leaderboards",
      "Achievements",
    ],
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  },
]

async function seedGames() {
  try {
    const batch = db.batch()

    sampleGames.forEach((game) => {
      const docRef = db.collection("games").doc()
      batch.set(docRef, game)
    })

    await batch.commit()
    console.log("Successfully seeded games data!")
  } catch (error) {
    console.error("Error seeding games data:", error)
  }
}

// Uncomment to run the seeding
// seedGames();

module.exports = { seedGames, sampleGames }
