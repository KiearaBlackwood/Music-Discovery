import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
//import musicData from '../data/discovery.js'
import MusicController from '../controllers/discovery.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', MusicController.getMusic)

router.get('/:musicId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/music.html'))
})

export default router