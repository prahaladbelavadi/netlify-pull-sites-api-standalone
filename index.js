import { NetlifyAPI } from 'netlify'
import * as dotenv from 'dotenv'
dotenv.config()

const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN

const client = new NetlifyAPI(NETLIFY_AUTH_TOKEN)

// Fetch sites
const sites = await client.listSites()

console.log(sites.map(obj=> obj.url))
