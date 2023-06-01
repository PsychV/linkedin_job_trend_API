// For more information, see https://crawlee.dev/
import { CheerioCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';
import proxyPool from './proxyPool.js';

const keywords = 'node';

const location = 'Barcelona, Cataluña, España';

const baseURL = 'https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?';

let URLlist = [];

//Linkedin shows for free without an account about 975 jobs, jobs can be retrieved in packs of 25 using their api
for(let i = 25; i < 1000; i+=25){
    URLlist.push(baseURL+`keywords=${keywords}&location=${location}&refresh=true&start=${i}`);
}
console.log(URLlist);

const crawler = new CheerioCrawler({
    maxConcurrency: 1,
    maxRequestsPerCrawl: 1000, 
    maxRequestsPerMinute: 15, // Linkedin limit seems to be around 900 requests per hour -> https://github.com/tomquirk/linkedin-api
    requestHandler: router,
    
});

await crawler.run(startUrls);
