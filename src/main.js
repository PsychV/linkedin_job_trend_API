// For more information, see https://crawlee.dev/
import { CheerioCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';

const startUrls = ['https://www.linkedin.com/jobs/search/?currentJobId=3329814289&geoId=107025191&keywords=node&location=Barcelona%2C%20Catalu%C3%B1a%2C%20Espa%C3%B1a&refresh=true'];

const proxyConfiguration = new ProxyConfiguration({
    proxyUrls: [
        "https://proxy-example.com",
    ],
});

const crawler = new CheerioCrawler({
    proxyConfiguration,
    maxConcurrency: 1,
    maxRequestsPerCrawl: 1000, 
    maxRequestsPerMinute: 15, // Linkedin limit seems to be around 900 requests per hour -> https://github.com/tomquirk/linkedin-api
    requestHandler: router,
});

await crawler.run(startUrls);
