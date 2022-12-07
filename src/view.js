//Desktop
import seafraLogoWhite from './images/seafraLogoWhite.svg';

//Mobile
import seafraLogoBlack from './images/Seafralogo.svg';
import mobileArrow from './images/mobilearrow.svg';
import dropDownIcon from './images/dropdownicon.svg';

//Functions
import {removeDropDown} from './dropdown.js'
import {generateHomePage } from './homepage.js';
import {generateContactPage} from './contact';
import {generateMenu, generateMenuItems} from './menupage';
import {getCurrentCategory, updateMenuWithFilters} from './controller';
import { entreesMenu, seafoodMenu, mainsMenu, saladsMenu, dessertsMenu, filterArray, cPage} from './data.js';

export function clearContentDiv() {
    let content = document.getElementById('content');
    let children = Array.from(content.children);

    children.forEach((child) => {
        child.remove();
    });
}

export function generateContent() {
    let content = document.createElement('div');
    let body = document.querySelector('.bg');
    content.id = 'content';
    body.appendChild(content);
}

export function generateDesktop() {

    let body = document.querySelector('.bg');
    let content = document.getElementById('content');
    let menuBar = document.createElement('ul');
    menuBar.className = 'menubar';

    let menuArray = ['Home', 'Menu', 'Contact'];
    menuArray.forEach((item)  => {
        let menuItem = document.createElement('li');
        menuItem.className = 'menuitem';
    
        let itemAnchor = document.createElement('a');
        itemAnchor.innerHTML = item;
        itemAnchor.href = '#';
        itemAnchor.id = item + 'button';
    
        menuItem.append(itemAnchor);
        menuBar.appendChild(menuItem);
    });

    //If there isn't a toprow (We are arriving for the first time to the site)
    let topRow = document.querySelector('.toprow');
    if (!topRow) {        

        //Create TopRow
        let topRow = document.createElement('div');
        topRow.className = 'toprow';
        topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

        //Create Desktop Logo + Anchor
        let rowAnchor = document.createElement('a');
        rowAnchor.href = '#';

        let rowLogo = document.createElement('img');
        rowLogo.src = seafraLogoWhite;
        rowLogo.className = 'logo';
        rowLogo.alt = 'Seafra Logo';
        
        //Append everything
        rowAnchor.appendChild(rowLogo);
        topRow.appendChild(rowAnchor);
        topRow.appendChild(menuBar);
        body.appendChild(topRow);

    //If there is already a top row / we are coming from a different page
    } else {

        //Get rid of Mobile-Specific elements
        document.querySelector('.mobilemenubutton').remove();
        document.querySelector('.dropdown').remove();

        //Change to Desktop logo + background color
        let rowLogo = document.querySelector('.logo');
        rowLogo.src = seafraLogoWhite;
        topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

        //Append Desktop Menu
        topRow.appendChild(menuBar);
        body.insertBefore(topRow, content);
    }
}

export function generateMobile() {

    let findRow = document.querySelector('.toprow');
    if (findRow) {
        findRow.remove();
    }
    let menuBar = document.querySelector('.menubar');
    if (menuBar != 'undefined' && menuBar != null) {
        menuBar.remove();
    }
    let dropDown = document.querySelector('.dropdown');
    if (dropDown != 'undefined' && dropDown != null) {
        dropDown.remove();
    }

    let menuArray = ['Home', 'Menu', 'Contact'];
    
    let topRow = document.createElement('div');
    topRow.className = 'toprow';
    
    let rowAnchor = document.createElement('a');
    
    setAttributes(rowAnchor, {'href': '#', 'class': 'rowanchor'});
    
    let rowLogo = document.createElement('img');
    setAttributes(rowLogo, {'alt': 'Seafra Logo', 'class': 'logo', 'src': seafraLogoBlack});

    let body = document.querySelector('.bg');
    let content = document.getElementById('content');
    let mobileMenuButton = document.querySelector('.mobilemenubutton');
    
    //Menu Button
    mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobilemenubutton';
    
    let menuButtonImage = document.createElement('img');
    menuButtonImage.src = dropDownIcon;
    menuButtonImage.alt = 'Click here to access dropdown menu in mobile';
    menuButtonImage.setAttribute('data', 'dropdown-button');
    
    rowAnchor.appendChild(rowLogo);
    mobileMenuButton.appendChild(menuButtonImage);
    
    topRow.style.backgroundColor = 'white';
    topRow.appendChild(rowAnchor);
    topRow.appendChild(mobileMenuButton);
    body.insertBefore(topRow, content);
    
    // Generating DropDown Menu
    dropDown = document.createElement('div');
    dropDown.className = 'dropdown';
    dropDown.setAttribute('data', 'dropdown');
    
    let dropDownMenu = document.createElement('ul');
    dropDownMenu.className = 'dropdown-menu';

    dropDown.appendChild(dropDownMenu);
    body.insertBefore(dropDown, content);
    
    //Geneate Dropdown Items
    menuArray.forEach((item)  => {
        let dropDownItem = document.createElement('li');
        dropDownItem.className = 'dropdown-item';
    
        let firstAnchor = document.createElement('a');
        setAttributes(firstAnchor, {'href': '#'});
        firstAnchor.innerHTML = item;
        firstAnchor.id = item + 'button';
        firstAnchor.addEventListener('click', removeDropDown);
    
        let secondAnchor = document.createElement('a');
        secondAnchor.href = '#';
    
        let arrowImage = document.createElement('img');
        arrowImage.src = mobileArrow;
        arrowImage.addEventListener('click', removeDropDown);

        switch (firstAnchor.id) {            
            case 'Homebutton': 
                arrowImage.addEventListener('click', () => {
                    clearContentDiv();
                    removeDropDown();
                    generateHomePage();
                    // setCurrentPage(homeButton);
                    });
                break;

            case 'Menubutton':
                arrowImage.addEventListener('click', () => {
                    removeDropDown();
                    clearContentDiv();
                    filterArray.resetFilters();
                    updateMenuWithFilters(entreesMenu, filterArray);
                    updateMenuWithFilters(seafoodMenu, filterArray);
                    updateMenuWithFilters(mainsMenu, filterArray);
                    updateMenuWithFilters(saladsMenu, filterArray);
                    updateMenuWithFilters(dessertsMenu, filterArray);
                    // setCurrentPage(menuButton);
                    generateMenu();
                    let category = getCurrentCategory();
                    generateMenuItems(category);
                });
                break;

            case 'Contactbutton':
                arrowImage.addEventListener('click', () => {
                    removeDropDown();
                    clearContentDiv();
                    // setCurrentPage(contactButton);
                    generateContactPage();
                });
                break;
        }
    
        dropDownItem.append(firstAnchor, secondAnchor);
        secondAnchor.append(arrowImage);
        dropDownMenu.append(dropDownItem);
    });
}

export function addButtonEventListeners() {
    let logoAnchor = document.querySelector('.logo');
    let homeButton = document.getElementById('Homebutton');
    let menuButton = document.getElementById('Menubutton');
    let contactButton = document.getElementById('Contactbutton');

    if (logoAnchor) {
        logoAnchor.addEventListener('click', () => {
            clearContentDiv();
            generateHomePage();
            setCurrentPage(homeButton);
        });
    }
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            clearContentDiv();
            generateHomePage();
            setCurrentPage(homeButton);
        });
    }
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            clearContentDiv();
            filterArray.resetFilters();
            updateMenuWithFilters(entreesMenu, filterArray);
            updateMenuWithFilters(seafoodMenu, filterArray);
            updateMenuWithFilters(mainsMenu, filterArray);
            updateMenuWithFilters(saladsMenu, filterArray);
            updateMenuWithFilters(dessertsMenu, filterArray);
            setCurrentPage(menuButton);
            let x = cPage.currentPage;
            setCurrentPage(x);
            generateMenu();
            let category = getCurrentCategory();
            generateMenuItems(category);
        });
    }
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            clearContentDiv();
            setCurrentPage(contactButton);
            generateContactPage();
        });
    }
}

export function setCurrentPage(button) {
    
    //Desktop
    //Sets all buttons to white
    //Resets button borderBottoms to none
    let menuItems = document.querySelectorAll('.menuitem');
    menuItems.forEach((item) => {
        if (item.firstChild != button) {
            item.firstChild.style.color = 'white';
            item.firstChild.style.borderBottom = 'none';
        }
    });

    //Mobile sets buttons to black
    let dropdown = document.querySelector('.dropdown');
    let dropdownActive = document.querySelector('.dropdown active');
    if (dropdown || dropdownActive) {
        let dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach((item) => {
            if (item.firstChild != button) {
                item.firstChild.style.color = 'black';
                item.firstChild.style.borderBottom = 'none';
            }
        });
    }

    // Sets currentpage to gold/accent color
        cPage.currentPage = button;
        cPage.currentPage.style.color = 'var(--clr-accent-1)';
        cPage.currentPage.style.borderBottom = '1px solid var(--clr-accent-1)';
}

export function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}