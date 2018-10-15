const aboutYourHomePage = require('../__pages__/aboutYourHomePage');

module.exports = {
    buildingType: {
        'Free standing home': aboutYourHomePage.buildingType.freeStandingHome,
        'Apartment or Flat' : aboutYourHomePage.buildingType.apartment,
        'Townhouse' : aboutYourHomePage.buildingType.townhouse,
        'Terrace' : aboutYourHomePage.buildingType.terrace,
        'Semi detached': aboutYourHomePage.buildingType.semiDetached
    },
    builtOn: {
        'A concrete slab' : aboutYourHomePage.builtOn.concreteSlab,
        'Stumps/Foundations' : aboutYourHomePage.builtOn.stumpsFoundations,
        'Poles' : aboutYourHomePage.builtOn.poles
    },
    strataTitle: {
        'strataYes': aboutYourHomePage.strataTitle.yes,
        'strataNo': aboutYourHomePage.strataTitle.no,
    },
    constructionMaterial: {
        'Aluminium' : aboutYourHomePage.constructionMaterial.aluminium,
        'Brick veneer' : aboutYourHomePage.constructionMaterial.brickVeneer,
        'Concrete': aboutYourHomePage.constructionMaterial.concrete,
        'Double Brick': aboutYourHomePage.constructionMaterial.doubleBrick,
        'Fibro / Asbestos': aboutYourHomePage.constructionMaterial.fibroAsbestos,
        'Hardiplank / Hardiflex': aboutYourHomePage.constructionMaterial.hardiplankHardiflex,
        'Hebel': aboutYourHomePage.constructionMaterial.hebel,
        'Vinyl Cladding': aboutYourHomePage.constructionMaterial.vinylCladding,
        'Weatherboard / Wood': aboutYourHomePage.constructionMaterial.weatherboardWood
    },
    roofMaterial : {
        'Aluminium': aboutYourHomePage.roofMaterial.aluminium,
        'Concrete': aboutYourHomePage.roofMaterial.concrete,
        'Fibro / Asbestos': aboutYourHomePage.roofMaterial.fibroAsbestos,
        'Iron': aboutYourHomePage.roofMaterial.iron,
        'Slate': aboutYourHomePage.roofMaterial.slate,
        'Steel / Colorbond': aboutYourHomePage.roofMaterial.steel,
        'Tiles': aboutYourHomePage.roofMaterial.tiles,
        'Timber': aboutYourHomePage.roofMaterial.timber,
    },
    constructedYear:{
        'In_the_last_10_years':'In the last 10 years',
        '2000-2008':'2004',//consider a flexible method
        '1990-1999':'1995',
        '1980-1989':'1985',
        '1970-1979':'1975',
        '1960-1969':'1965',
        '1946-1959 (Post War)':'1953',
        '1914-1945 (War)':'1930',
        '1891-1913 (Federation)':'1902',
        'Pre 1890 (Victorian)':'1890'
    },
    homeSecurity:{
        doorsAndBuildingAccess:{
            'Key operated deadlocks fitted to all external hinged doors and key operated patio bolts fitted to all sliding/French doors': aboutYourHomePage.homeSecurity.doorsAndBuildingAccess.keyOperated,
            'Building access restricted by electronic swipe cards or a supervised reception/entrance': aboutYourHomePage.homeSecurity.doorsAndBuildingAccess.electronicCards,
        },
        windows:{
            'Key operated locks or security screens fitted to all accessible windows': aboutYourHomePage.homeSecurity.windows.keyOperated,
            'The home has no accessible windows': aboutYourHomePage.homeSecurity.windows.noAccessible,
        },
        alarms: {
            'Burglar alarm, not monitored by a security provider': aboutYourHomePage.homeSecurity.alarms.alarm0,
            'Burglar alarm, monitored by a security provider': aboutYourHomePage.homeSecurity.alarms.alarm1,
            'Smoke detectors, monitored by a security provider': aboutYourHomePage.homeSecurity.alarms.alarm2
        }
    }
};