import { pool } from '../config/database.js'

const getMusic = async (req, res) => {
  try {
    
    const results = await pool.query('SELECT * FROM music ORDER BY id ASC')
    
    // Send a 200 OK status along with the data rows
    res.status(200).json(results.rows)
  } catch (error) {
    // 409 Conflict: Something went wrong with the database request
    res.status(409).json({ error: error.message })
  }
}

// Export the function so it can be used in our routes
export default {
  getMusic
}