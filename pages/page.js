let page;

module.exports = {

    inventingAndDelivering:{
        technologyRadar: '#home-tile-201807-radar',
        podcasts: '#home-tile-201807-podcasts',
        agileHabits: '#home-tile-201807-agile-habits-leader',
        '25 years': '#home-tile-201807-25-years',
        careers: '#home-tile-201807-careers'
    },
    thankYou: '#content-item > div.modules > div.modules__list > div.module.module-side_by_side_image_text > div > div > div > div > div > div:nth-child(2) > div > div > div > h2',


    _init(currentPage){
        page = currentPage;
    },


    async chooseBuildingType(buildingType){//this needs navigation
        const navigation = await page.waitForNavigation({'waitUntil':'load'});
        await page.click(buildingType);
        await navigation;
    },

    async chooseBuiltOn(builtOn){
        await page.waitForSelector(builtOn);
        await page.click(builtOn);
    },
};