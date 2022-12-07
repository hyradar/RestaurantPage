//Black + White Icons
import entreesIcon from './images/menuicons/wheat.png';
import seafoodIcon from './images//menuicons/prawn.png';
import mainsIcon from './images/menuicons/food-tray.png';
import saladsIcon from './images/menuicons/salad.png';
import dessertsIcon from './images/menuicons/cupcake.png';

//Color Icons
import seafoodIconColor from './images/menuicons/prawncolor.svg';
import entreesIconColor from './images/menuicons/wheatcolor.svg';
import mainsIconColor from './images/menuicons/food-traycolor.svg';
import saladsIconColor from './images/menuicons/saladcolor.svg';
import dessertsIconColor from './images/menuicons/cupcakecolor.svg';

//Mobile Banners
import entreeMobileBanner from './images/categoryimages/entreecategorymobile.svg';
import seafoodMobileBanner from './images/categoryimages/seafoodcategorymobile.svg';
import mainsMobileBanner from './images/categoryimages/mainscategorymobile.svg';
import saladsMobileBanner from './images/categoryimages/saladscategorymobile.svg';
import dessertsMobileBanner from './images/categoryimages/dessertscategorymobile.svg';

//Desktop Banners
import entreeDesktopBanner from './images/categoryimages/entreecategorydesktop.svg';
import seafoodDesktopBanner from './images/categoryimages/seafoodcategorydesktop.svg';
import mainsDesktopBanner from './images/categoryimages/mainscategorydesktop.svg';
import saladsDesktopBanner from './images/categoryimages/saladscategorydesktop.svg';
import dessertsDesktopBanner from './images/categoryimages/dessertscategorydesktop.svg';

//Entree Food Images
import focacciaImage from './images/food/foccaccia.jpg';
import carrotLoxImage from './images/food/carrotlox.jpeg';
import pearlOystersImage from './images/food/pearloysters.jpeg';
import tempuraCalmariImage from './images/food/tempuracalamari.jpg';
import buffaloShrimpImage from './images/food/buffaloshrimp.jpg';

//Seafood Food Images
import scallopsImage from './images/food/scallops.jpg';
import grilledKingCrabImage from './images/food/grilledkingcrab.jpg';
import fishTacosImage from './images/food/fishtacos.jpg';
import veganCrabCakesImage from './images/food/vegancrabcakes.jpg';
import tunaAuPoivreImage from './images/food/tunaaupoivre.jpg';
import mixedSeafoodGrillImage from './images/food/mixedseafoodgrill.jpg';

//Mains Food Images
import mushroomPastaImage from './images/food/mushroompasta.jpg';
import yellowTailPokeBowlImage from './images/food/yellowtailpokebowl.jpg';
import seaUrchinSpaghettiImage from './images/food/seaurchinspaghetti.jpg';
import steakFritesImage from './images/food/steakfrites.jpg';
import ribeyeImage from './images/food/ribeye.jpg';

//Salads Food Images
import choppedSaladImage from './images/food/choppedsalad.jpg';
import icebergWedgeImage from './images/food/icebergwedge.jpg';
import classicCaesarImage from './images/food/caesarsalad.jpg';
import greekTomatoSaladImage from './images/food/greektomatosalad.jpg';
import seafoodSaladImage from './images/food/seafoodsalad.jpg';

//Desserts Food Images
import peanutButterPieImage from './images/food/peanutbutterpie.jpg';
import hazelnutPralineImage from './images/food/hazelnutpraline.jpg';
import bananaCreamNapoleonImage from './images/food/bananacreamnapoleon.jpg';
import pumpkinSpiceCremeBruleeImage from './images/food/cremebrulee.jpg';
import veganCaramelGelatoImage from './images/food/gelato.jpg';

//Create Food Groups for Menu
function foodGroup(name, normalImage, colorImage, mobileBanner, desktopBanner, imageElement, titleElement, isCurrentCategory) {
    return {
        name,
        normalImage,
        colorImage,
        imageElement,
        titleElement,
        isCurrentCategory,
        mobileBanner,
        desktopBanner,
    }
}

//The only reason I'm exporting this is because I'm hardcoding the default value rather than loading
export let entrees = foodGroup('Entrees', entreesIcon, entreesIconColor, entreeMobileBanner, entreeDesktopBanner, document.getElementById('Entreesmenuicon'), document.getElementById('Entreestitle'), true);
let seafood = foodGroup('Seafood', seafoodIcon, seafoodIconColor, seafoodMobileBanner, seafoodDesktopBanner, document.getElementById('Seafoodmenuicon'), document.getElementById('Seafoodtitle'), false);
let mains = foodGroup('Mains', mainsIcon, mainsIconColor, mainsMobileBanner, mainsDesktopBanner, document.getElementById('Mainsmenuicon'), document.getElementById('Mainstitle'), false);
let salads = foodGroup('Salads', saladsIcon, saladsIconColor, saladsMobileBanner, saladsDesktopBanner, document.getElementById('Saladsmenuicon'), document.getElementById('Saladstitle'), false);
let desserts = foodGroup('Desserts', dessertsIcon, dessertsIconColor, dessertsMobileBanner, dessertsDesktopBanner, document.getElementById('Dessertsmenuicon'), document.getElementById('Dessertstitle'), false);

export const xfoodArray = [entrees, seafood, mains, salads, desserts];

function foodItem(name, description, foodGroup, price, canShow, foodImage, isVegetarian, isVegan, isDairyFree, isGlutenFree, hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy) {

    return {
        name,
        description,
        foodGroup,
        price,
        canShow,
        isVegetarian,
        isVegan,
        isDairyFree,
        isGlutenFree,
        hasTreeNuts,
        hasPeanuts,
        hasFish,
        hasShellfish,
        hasEgg,
        hasSoy,
        foodImage,
    }
}

export const filterArray = {
    vegetarianFilter: false,
    veganFilter: false,
    dairyFreeFilter: false,
    glutenFreeFilter: false,
    treeNutFilter: false,
    peanutFilter: false,
    fishFilter: false,
    shellfishFilter: false,
    eggFilter: false,
    soyFilter: false,

    setFilter: function filterMenu(id) {
        const checkboxes = document.querySelectorAll('.filterinput');
        const filter = document.getElementById(id);
            switch (id) {
                case 'filterinputVego':
                    if (filter.checked === true) {
                        this.vegetarianFilter = true;
                    }
                    else {
                        this.vegetarianFilter = false;
                    }
                    break;
                case 'filterinputDairy-Free':
                    if (filter.checked === true) {
                        this.dairyFreeFilter = true;
                    }
                    else {
                        this.dairyFreeFilter = false;
                    }
                    break;
                case 'filterinputTreenut':
                    if (filter.checked === true) {
                        this.treeNutFilter = true;
                    }
                    else {
                        this.treeNutFilter = false;
                    }
                    break;
                case 'filterinputVegan':
                    if (filter.checked === true) {
                        this.veganFilter = true;
                    }
                    else {
                        this.veganFilter = false;
                    }
                    break;
                case 'filterinputFish':
                    if (filter.checked === true) {
                        this.fishFilter = true;
                    }
                    else {
                        this.fishFilter = false;
                    }
                    break;
                case 'filterinputGluten-Free':
                    if (filter.checked === true) {
                        this.glutenFreeFilter = true;
                    }
                    else {
                        this.glutenFreeFilter = false;
                    }
                    break;
                case 'filterinputPeanut':
                    if (filter.checked === true) {
                        this.peanutFilter = true;
                    }
                    else {
                        this.peanutFilter = false;
                    }
                    break;
                case 'filterinputSoy':
                    if (filter.checked === true) {
                        this.soyFilter = true;
                    }
                    else {
                        this.soyFilter = false;
                    }
                    break;
                case 'filterinputShellfish':
                    if (filter.checked === true) {
                        this.shellfishFilter = true;
                    }
                    else {
                        this.shellfishFilter = false;
                    }
                    break;
                case 'filterinputEgg':
                    if (filter.checked === true) {
                        this.eggFilter = true;
                    }
                    else {
                        this.eggFilter = false;
                    }
                    break;
                default:
                    break;
            }
    },

    resetFilters: function resetFilters() {
        this.veganFilter = false;
        this.dairyFreeFilter = false;
        this.vegetarianFilter = false;
        this.glutenFreeFilter = false;
        this.treeNutFilter = false;
        this.peanutFilter = false;
        this.fishFilter = false;
        this.shellfishFilter = false;
        this.eggFilter = false;
        this.soyFilter = false;
    },

    getFilters: function getFilters() {
        let trueFilters = [];
        this.booleanArray.forEach(item => {
            if (item === true) {
                trueFilters.push(item);
            }
        });
        return trueFilters;
    }
};

export let cPage = {
    currentPage: 'x',
};

//Creating Entree Menu
let focaccia = foodItem(
    //name, description, goodGroup, price, canShow
    'Cheese-Baked Foccacia', 'Served with House-Cured Olives', 'entrees', 15, true, focacciaImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let carrotLox = foodItem(
    //name, description, goodGroup, price, can show
    'Carrot Lox', 'carrot strips flavored with tamari, liquid smoke and kelp seasoning', 'entrees', 18, true, carrotLoxImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let oysters = foodItem(
    //name, description, goodGroup, price, canShow
    'Pearl Oysters', 'Six Oysters from Bay of Bedec in New Brunswick, Canada', 'entrees', 21, true, pearlOystersImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, true, false, false);

let calamari = foodItem(
    //name, description, goodGroup, price
    'Tempura Calamari', 'served with piparra peppers and a garlic aioli drizzle', 'entrees', 24, true, tempuraCalmariImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, true, false, false);

let shrimp = foodItem(
    //name, description, goodGroup, price, canShow
    'Buffalo Shrimp', 'tossed in our signature buffalo sauce, blue cheese dressing', 'entrees', 25, true, buffaloShrimpImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, true, true, false);



//Creating Seafood Menu

let scallops = foodItem(
    //name, description, goodGroup, price, canShow
    'Scallops', 'Lightly floured and shallow fried served with a yuzu chipotle aioli', 'seafood', 20, true, scallopsImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, false, false);

                        
let kingCrab = foodItem(
    //name, description, goodGroup, price, canShow
    'Grilled King Crab', 'Herb-Garlic Butter, Curry Aioli', 'seafood', 25, true,  grilledKingCrabImage,

    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,

    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, true, false);

let fishTacos = foodItem(
    //name, description, foodGroup, price, canShow
    'Fish Tacos', 'Alaskan Halibut, Crispy Batter, Salsa Verde', 'seafood', 26, true,  fishTacosImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, true, true);


let veganCrabCakes = foodItem(
    //name, description, foodGroup, price, canShow
    'Vegan Crab Cakes', 'Made with hearts of palm and chickpeas for a savory, satisfying appetizer or main course.', 'seafood', 30, true,  veganCrabCakesImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let tuna = foodItem(
    //name, description, foodGroup, price, canShow
    'Tuna au Poivre', 'Green Peppercorn Sauce', 'seafood', 42,  true,  tunaAuPoivreImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, true, true, false, false);

                                
let mixedSeafoodGrill = foodItem(
    //name, description, foodGroup, price, canShow
    'Mixed Seafood Grill', 'King Crab, Spanish Octopus, Blue Prawn, Flamed Table-Side', 'seafood', 80,  true,  mixedSeafoodGrillImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, true, true, true, false);



    //Creating Mains Menu


let mushroomPasta = foodItem(
    //name, description, goodGroup, price, canShow
    'Woods Mushroom Pasta', 'with Roasted Garlic and Pesto', 'mains', 32, true,  mushroomPastaImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, false, false, true);

let pokeBowl = foodItem(
    //name, description, goodGroup, price, canShow
    'Yellowtail Poke Bowl', 'jasmine rice, edamame, avocado, carrots, red cabbage, cilantro, ginger vinaigrette', 'mains', 36, true,  yellowTailPokeBowlImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, true, false, false, true);

let urchinSpaghetti = foodItem(
    //name, description, goodGroup, price, canShow
    'Sea Urchin Spaghetti', 'Japanese Uni, Housemade Pasta, Black Truffle', 'mains', 47, true,  seaUrchinSpaghettiImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, true, false, true);


let steakFrites = foodItem(
    //name, description, goodGroup, price, canShow
    'Steak Frites', 'Wood-Grilled, Truffle Béarnaise', 'mains', 52, true,  steakFritesImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let ribeye = foodItem(
    //name, description, goodGroup, price, canShow
    'Grass-Fed Bone-in Ribeye', 'Reidsville, GA', 'mains', 73, true,  ribeyeImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);



//Creating Salads Menu

let chopped = foodItem(
    //name, description, goodGroup, price, canShow
    'Chopped Salad', 'Haricots Verts, Avocado, Almonds', 'salads', 19, true, choppedSaladImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, false, false, false);

let wedge = foodItem(
    //name, description, goodGroup, price, canShow
    'Iceberg Wedge', 'blue cheese dressing, herb vinaigrette, bacon, egg, tomatoes, croutons', 'salads', 20, true, icebergWedgeImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, true, false);

let caesar = foodItem(
    //name, description, goodGroup, price, canShow
    'Classic Caesar', 'Aged Parmesan, Anchovy', 'salads', 21, true, classicCaesarImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, true, false);

let greek = foodItem(
    //name, description, goodGroup, price, canShow
    'Greek Tomato Salad', 'Feta, Peppers, Olives', 'salads', 25, true, greekTomatoSaladImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

let seafoodSalad = foodItem(
    //name, description, goodGroup, price, canShow
    'Signature Seafood Salad', 'alaskan bairdi crab, shrimp, lobster, hearts of palm, avocado, egg, cucumber, olives, tomatoes, scallions, louis dressing and italian vinaigrette', 'salads', 28, true, seafoodSaladImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    false, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, true, true, true);


//Create Desserts Menu


let pie = foodItem(
    //name, description, goodGroup, price, canShow
    'Peanut Butter Pie', 'with Chocolate gluten-free cust', 'desserts', 10, true, peanutButterPieImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, true, false, false, false, false);

let praline = foodItem(
    //name, description, goodGroup, price, canShow
    'Hazelnut Praline', 'Chocolate Shell, Salted Caramel', 'desserts', 11, true, hazelnutPralineImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, true, false, false, false, false);

let napoleon = foodItem(
    //name, description, goodGroup, price, canShow
    'Banana Cream Napoleon', 'Warm Caramel, Phyllo, Whipped Cream', 'desserts', 13, true, bananaCreamNapoleonImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, false,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, true, false);

let cremebrulee = foodItem(
    //name, description, goodGroup, price, canShow
    'Pumpkin Spice Crème Brûlée', 'Candied Pecans, Pumpkin Gelato', 'desserts', 15, true, pumpkinSpiceCremeBruleeImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, false, false, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    true, false, false, false, true, false);

let gelato = foodItem(
    //name, description, goodGroup, price, canShow
    'Vegan Caramel Gelato', 'Chocolate Shell, Salted Caramel', 'desserts', 17, true, veganCaramelGelatoImage,
    
    //isVegetarian, isVegan, isDairyFree, isGlutenFree
    true, true, true, true,
    
    //hasTreeNuts, hasPeanuts, hasFish, hasShellfish, hasEgg, hasSoy
    false, false, false, false, false, false);

export let entreesMenu = [focaccia, carrotLox, oysters, calamari, shrimp];
export let seafoodMenu = [scallops, kingCrab, fishTacos, veganCrabCakes, tuna, mixedSeafoodGrill];
export let mainsMenu = [mushroomPasta, pokeBowl, urchinSpaghetti, steakFrites, ribeye];
export let saladsMenu = [chopped, wedge, caesar, greek, seafoodSalad];
export let dessertsMenu = [pie, praline, napoleon, cremebrulee, gelato];