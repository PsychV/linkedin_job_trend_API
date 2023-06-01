// For more information, see https://crawlee.dev/
import { CheerioCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';
import proxyPool from './proxyPool.js';

const startUrls = ['https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=node&location=Barcelona, Cataluña, España&refresh=true&start=25'];
// 25 * 39 = los casi 975 jobs que muestran publicos

const crawler = new CheerioCrawler({
    maxConcurrency: 1,
    maxRequestsPerCrawl: 1000, 
    maxRequestsPerMinute: 15, // Linkedin limit seems to be around 900 requests per hour -> https://github.com/tomquirk/linkedin-api
    requestHandler: router,
    
});

await crawler.run(startUrls);
