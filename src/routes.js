import { Dataset, createCheerioRouter, sleep } from 'crawlee';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ enqueueLinks, log }) => {
    log.info(`enqueueing new URLs`);
    await enqueueLinks({
        globs: ['**/jobs/view/**'],
        label: 'detail',
    });
});

router.addHandler('detail', async ({ request, $, log }) => {
    await sleep(500 + (Math.random() * 1500));

    const title = $('title').text();
    log.info(`${title}`, { url: request.loadedUrl });

    const jobDescription = $('.core-section-container__content')
        .text()
        .replace(/\s{2,}/g," ");

    log.info(`${jobDescription.substring(0, 300)}`);
    
    await Dataset.pushData({
        url: request.loadedUrl,
        title,
        jobDescription,
    });
});

