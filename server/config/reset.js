import { pool } from './database.js'
import './dotenv.js'
import musicData from '../data/discovery.js'

const createMusicTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS music;

        CREATE TABLE IF NOT EXISTS music (
            id SERIAL PRIMARY KEY,
            eventName VARCHAR(255) NOT NULL,
            artists TEXT NOT NULL,
            dataTime VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            venue TEXT NOT NULL,
            genre VARCHAR(255) NOT NULL,
            ticketPrice VARCHAR(50) NOT NULL
        )
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 music table created successfully')
    } catch (err) {
        console.error('⚠️ error creating music table', err)
    }
}

const seedMusicTable = async () => {
    await createMusicTable()

    musicData.forEach((music) => {
        const insertQuery = {
            text: 'INSERT INTO music (eventName, artists, dataTime, image, venue, genre, ticketPrice) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            music.eventName,
            music.artists,
            music.dataTime,
            music.image,
            music.venue,
            music.genre,
            music.ticketPrice
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting music', err)
                return
            }
            console.log(`✅ ${music.eventName} added successfully`)
        })
    })
}

seedMusicTable()