import { neon } from "@neondatabase/serverless"
import "dotenv/config"

export  const sql = noen(process.env.DATABASE_URL)