let page;

module.exports = {
    search:{
        searchBar:'#search-bar-input',
        searchButton: '#util-menu > li:nth-child(1) > div > form > button',
    },

    inventingAndDelivering:{
        technologyRadar: '#home-tile-201807-radar',
        podcasts: '#home-tile-2018010-podcasts',
        agileHabits: '#home-tile-201807-agile-habits-leader',
        '25 years': '#home-tile-201810-25years',
        '2019 tech radar': '#home-tile-201810-radar-subscription',
        careers: '#home-tile-201807-careers'
    },
    podcastsText: '#content-item > div.modules > div.modules__list > div:nth-child(3) > div > div > div > div > div > div > h2',
    thankYou: '#content-item > div.modules > div.modules__list > div.module.module-side_by_side_image_text > div > div > div > div > div > div:nth-child(2) > div > div > div > h2',
    seleniumBirth: 'body > div:nth-child(7) > div > div.grid__cell.unit-2-3--lap > div.search-results > div:nth-child(1) > div.search-result__title > a',

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