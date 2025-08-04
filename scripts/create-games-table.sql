-- Create games table in Firestore (this is a reference for the document structure)
-- In Firestore, this would be a collection called 'games' with documents containing these fields:

/*
Document structure for 'games' collection:
{
  title: string,
  description: string,
  longDescription: string,
  category: string,
  image: string,
  screenshots: array of strings,
  downloads: string,
  rating: number,
  reviews: number,
  size: string,
  releaseDate: string (ISO date),
  version: string,
  developer: string,
  downloadUrl: string,
  featured: boolean,
  requirements: {
    os: string,
    processor: string,
    memory: string,
    graphics: string,
    storage: string
  },
  features: array of strings,
  createdAt: timestamp,
  updatedAt: timestamp
}
*/

-- Sample data insertion (this would be done through the Firebase Admin SDK or console)
-- This is just for reference of the data structure
