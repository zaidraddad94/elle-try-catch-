async function getTargetingMap() {
    const script = `return gptLayer.slots.find((e)=>{return e.getTargetingMap().position[0] == "breaker" }).getTargetingMap()`;
      return  browser.executeScript(script);
    
};

async function getPageInfo() {
    const script = `return gptLayer.kv`;
    return browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));

};

async function getSize() {
    const script = `return gptLayer.getSlotById('gpt_lb_mn').getSizes()`
    let sizes = await browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));
    return sizes.map((obj, i) => {
        if (typeof obj === "object") {
            return [obj.j, obj.l]
        } else {
            return obj
        };

    });
};

async function getIuParts() {
    const script = `return gptLayer.getSlotById('gpt_lb_mn').getAdUnitPath()`
    return browser.wait(() => browser.executeScript(script), 20000).then(() => browser.executeScript(script));
};

async function scrollToFooter() {
    await browser.wait(protractor.ExpectedConditions.visibilityOf($('body > div.site-content > footer > div')), 10000);
    browser.actions().mouseMove($('body > div.site-content > footer > div')).perform();

}

module.exports = {
    getTargetingMap,
    getSize,
    getIuParts,
    getPageInfo,
    scrollToFooter,
};
