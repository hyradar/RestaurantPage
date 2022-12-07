import { xfoodArray } from './data.js';

export function getCurrentCategory() {
    for (let i = 0; i < xfoodArray.length; i++) {
        if (xfoodArray[i].isCurrentCategory) {
            return xfoodArray[i];
        }
    }
}

export function setCurrentCategory(foodGroup) {
    xfoodArray.forEach((item) => {
        if (item != foodGroup) {
            item.isCurrentCategory = false
        }
        else {
            item.isCurrentCategory = true;
        }
    });
}


export function updateMenuWithFilters(menu, filterArray) {
    menu.forEach((item) => {

        if ((!item.isVegetarian && filterArray.vegetarianFilter === true)
          ||(!item.isVegan && filterArray.veganFilter === true)
          ||(!item.isDairyFree && filterArray.dairyFreeFilter === true)
          ||(!item.isGlutenFree && filterArray.glutenFreeFilter === true)
          ||(item.hasTreeNuts && filterArray.treeNutFilter === true)
          ||(item.hasPeanuts && filterArray.peanutFilter === true)
          ||(item.hasFish && filterArray.fishFilter === true)
          ||(item.hasShellfish && filterArray.shellfishFilter === true)
          ||(item.hasEgg && filterArray.eggFilter === true)
          ||(item.hasSoy && filterArray.soyFilter === true)
          ){
            item.canShow = false;
        } else {
            item.canShow = true;
        }
    });
}