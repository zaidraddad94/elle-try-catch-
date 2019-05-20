const helper = require('./helper');
const target = require('./target');

describe('Ads', () => {
    beforeAll(() => {
        browser.get('/culture/celebrities/a27267952/kate-beckinsale-pete-davidson-not-dating-anymore/')
        browser.wait(async () => {
            var x, f
            try {
                await browser.executeScript("window.scrollTo(0, document.body.scrollHeight);")
                x = await browser.executeScript("return gptLayer")
                f = await browser.executeScript("return gptLayer.slots.length");
            } catch (error) {
                x = undefined
                f = undefined
            }
            return x != undefined && f == 4
        }, 60000)
    });

    describe(`${target.page.ad.position} position`, () => {
        let adsTargeting, adsSize, iuParts;

        beforeAll(async () => {
            adsTargeting = await helper.getTargetingMap();
            adsSize = await helper.getSize();
            iuParts = await helper.getIuParts();
        });

        it(`should have the adid of ${target.page.ad.adid}`, () => {
            expect(adsTargeting.pos).toEqual(target.page.ad.pos);
        });

        it(`should have the loc of ${target.page.ad.loc}`, () => {
            expect(adsTargeting.loc).toEqual(target.page.ad.loc);
        });

        it(`should have the position of ${target.page.ad.position}`, () => {
            expect(adsTargeting.position).toEqual(target.page.ad.position);
        });

        it(`should have the load of ${target.page.ad.load}`, () => {
            expect(adsTargeting.load).toEqual(target.page.ad.load);
        });

        it(`should have the iu - parts of [${target.page.ad.iu.split("/")}]`, () => {
            expect(iuParts).toEqual(target.page.ad.iu);
        });

        it(`should have the sizes of ${target.page.ad.sizes}`, () => {
            expect(adsSize).toEqual(target.page.ad.sizes);
        });
    });
});
