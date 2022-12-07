// For explanation, watch https://www.youtube.com/watch?v=S-VeYcOCFZw

document.addEventListener('click', e => {
    let currentDropDown;
    const isDropDownButton = e.target.matches("[data=dropdown-button]");
    let menubar = document.querySelector('.menubar');

    // Makes sure not to close dropdown if user clicks inside it
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) {
        return;
        
        //Closes Dropdown if Window is Clicked
        //added the check against mobile menu button since both this if and the Toggle if's were firing simultaneously
        //added !menubar since menubar is only in desktop. Before it was still firing in desktop even though there's no dropdown menu in that layout
    } else if (!menubar && window && e.target.closest('[data-dropdown]') === null && e.target.closest('.dropdown-menu') === null && e.target.closest('.mobilemenubutton') === null) {
        currentDropDown = document.querySelector('.dropdown');
        currentDropDown.classList.remove('active');
        let x = document.querySelector('.centerbottomblue');
        if (x) {
            if (x.style.color != 'rgb(0, 166, 255)') {
                x.style.color = 'rgb(0, 166, 255)';
            }
        }
    };
    
    //Toggles dropdown if button is clicked
    if (isDropDownButton) {
        currentDropDown = document.querySelector('.dropdown');
        currentDropDown.classList.toggle('active');
        let x = document.querySelector('.centerbottomblue');
    }
});

//Adds Event Listener to Dropdown Menu Buttons
export function removeDropDown() {
    document.addEventListener('click', e => {
        if (e.target === this) {
            let currentDropDown = document.querySelector('.dropdown');
            if (currentDropDown) {
                currentDropDown.classList.remove('active');
            }
        }   
    });

}