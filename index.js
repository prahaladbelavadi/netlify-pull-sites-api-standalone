import { NetlifyAPI } from 'netlify'
import * as dotenv from 'dotenv'
dotenv.config()

const NETLIFY_AUTH_TOKEN = process.env.NETLIFY_AUTH_TOKEN

const client = new NetlifyAPI(NETLIFY_AUTH_TOKEN)

// Fetch sites
const sites = await client.listSites()

console.log(sites.map(obj=> obj.url))

// Create a site. Notice `body` here for sending OpenAPI body
// const site = await client.createSite({
//   body: {
//     name: `my-awesome-site`,
//     // ... https://open-api.netlify.com/#/default/createSite
//   },
// })

// // Delete site. Notice `site_id` is a path parameter https://open-api.netlify.com/#/default/deleteSite
// await client.deleteSite({ site_id: siteId })