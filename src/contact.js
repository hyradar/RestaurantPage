// Initialize and add the map
import mapIcon from './images/contacticons/mapmarker.svg';
import timeIcon from './images/contacticons/clock.svg';
import phoneIcon from './images/contacticons/phone.svg';
import emailIcon from './images/contacticons/envelope.svg';
import { setAttributes } from './view';

export function generateContactPage() {
    let content = document.getElementById('content');
    
    //Title Card
    let contactTitle = document.createElement('h1');
    let contactTitleCard = document.createElement('div');
    contactTitle.className = 'title';
    contactTitle.innerHTML = 'Contact';
    contactTitleCard.className = 'titlecard';

    contactTitleCard.appendChild(contactTitle);
    content.appendChild(contactTitleCard);

    //Contact Page 
    let contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contactpagediv';
    
    //Info Div At Top
    let infoDiv = document.createElement('div');
    infoDiv.id = 'contactinfodiv';
    contactPageDiv.appendChild(infoDiv);

    //Information Sections
    //Address
    let addressDiv = document.createElement('div');
    addressDiv.className = 'infodetailsdiv';
    
    let seafraAddress = document.createElement('p');
    seafraAddress.className = 'contactinfobox';
    seafraAddress.innerText = '12 Acland St, St. Kilda';
    
    let mapIconImage = document.createElement('img');
    setAttributes(mapIconImage , {'src': mapIcon, 'alt': 'Map Icon', 'class': 'contactpageicon'});

    //Clock
    let hoursDiv = document.createElement('div');
    hoursDiv.className = 'infodetailsdiv';

    let seafraHours = document.createElement('p');
    seafraHours.className = 'contactinfobox';
    seafraHours.innerText = 'Wed - Sun : 8am - 8pm';

    let timeIconImage = document.createElement('img');
    setAttributes(timeIconImage , {'src': timeIcon, 'alt': 'Time Icon', 'class': 'contactpageicon'});

    //Phone
    let phoneDiv = document.createElement('div');
    phoneDiv.className = 'infodetailsdiv';

    let seafraPhone = document.createElement('p');
    seafraPhone.className = 'contactinfobox';
    seafraPhone.innerText = '+61 388 355 553';

    let phoneIconImage = document.createElement('img');
    setAttributes(phoneIconImage , {'src': phoneIcon, 'alt': 'Phone Icon', 'class': 'contactpageicon'});

    //Append Divs to contact info box
    addressDiv.append(mapIconImage, seafraAddress);
    hoursDiv.append(timeIconImage, seafraHours);
    phoneDiv.append(phoneIconImage, seafraPhone);
    
    infoDiv.append(addressDiv, hoursDiv, phoneDiv);

    //Contact Form
    let contactForm = document.createElement('form');
    contactForm.id = 'contactform';
    

    //Email
    let emailDiv = document.createElement('div');
    emailDiv.className = 'infodetailsdiv';

    let seafraEmail = document.createElement('p');
    seafraEmail.className = 'contactinfobox';
    seafraEmail.id = 'seafraemail';
    seafraEmail.innerText = 'Message Us';
    
    let emailIconImage = document.createElement('img');
    setAttributes(emailIconImage , {'src': emailIcon, 'alt': 'Email Icon', 'class': 'contactpageicon'});

    emailDiv.append(emailIconImage, seafraEmail);

    //Fieldset for Inputs
    let inputFieldset = document.createElement('fieldset');
    inputFieldset.id = 'inputfieldset';

    //Inputs + Labels

    //Name
    let nameInput = document.createElement('input');
    setAttributes(nameInput, {'type': 'text', 'id': 'nameInput', 'name': 'nameInput'});

    let nameLabel = document.createElement('label');
    setAttributes(nameLabel, {'htmlFor': nameInput.id, 'class': 'contactlabel'});
    nameLabel.innerText = 'Full Name:';

    //Email
    let emailInput = document.createElement('input');
    setAttributes(emailInput, {'type': 'email', 'id': 'emailinput', 'name': 'emailinput'});

    let emailLabel = document.createElement('label');
    setAttributes(emailLabel, {'htmlFor': emailInput.id, 'class': 'contactlabel'});
    emailLabel.innerText = 'Email:';

    //Message
    let messageInput = document.createElement('textarea');
    setAttributes(messageInput, {'rows': '3', 'cols': '20', 'id': 'messageinput', 'name': 'messageinput'});

    let messageLabel = document.createElement('label');
    setAttributes(messageLabel, {'htmlFor': messageInput.id, 'class': 'contactlabel'});
    messageLabel.innerText = 'Enter your message below:';

    //Submit
    let submitButton = document.createElement('button');
    setAttributes(submitButton, {'type': 'submit', 'id': 'contactsubmitbutton'});
    submitButton.innerText = 'Submit';

    //Appending Contact Form together
    inputFieldset.append(nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageInput);
    contactForm.append(emailDiv, inputFieldset, submitButton);

    //Google Maps
    let mapDiv = document.createElement('div');
    mapDiv.id = 'map';

    //Appending sections to Contact Page
    contactPageDiv.append(infoDiv, contactForm, mapDiv);
        content.appendChild(contactPageDiv);
    
    //Initializing Google Maps API
    initMap();    
}

function initMap() {

    // The location of Seafra
    const seafraLocation = { lat: -37.863379, lng: 144.975158 };

    // The map, centered at Seafra
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: seafraLocation,
    });
    // The marker, positioned at Seafra
    const marker = new google.maps.Marker({
      position: seafraLocation,
      map: map,
    });
  }

  