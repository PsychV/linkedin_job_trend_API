// For more information, see https://crawlee.dev/
import { CheerioCrawler, ProxyConfiguration } from 'crawlee';
import { router } from './routes.js';

const startUrls = ['https://www.linkedin.com/jobs/search/?currentJobId=3329814289&geoId=107025191&keywords=node&location=Barcelona%2C%20Catalu%C3%B1a%2C%20Espa%C3%B1a&refresh=true'];

const crawler = new CheerioCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
});

await crawler.run(startUrls);
