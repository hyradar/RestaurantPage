
export function generateHomePage() {
    
    // Generating Center Box
    let content = document.getElementById('content');
    let centerBox = document.createElement('div');
    centerBox.className = 'centerbox';
    
    let centerTop = document.createElement('h1');
    centerTop.className = 'centertop';
    
    
    let centerBottomDiv = document.createElement('div');
    let centerBottomText = document.createElement('h2');
    let centerBottomBlue = document.createElement('h2');

    if (window.innerWidth >= 700) {
        centerTop.innerHTML = 'Explore and Discover'
        centerBottomText.innerHTML = 'The Seafra Seafood Collection';
        centerBottomBlue.innerHTML = 'The Seafra Seafood Collection';
    }
    else {
        centerTop.innerHTML = 'Discover'
        centerBottomText.innerHTML = 'Seafra Seafood';
        centerBottomBlue.innerHTML = 'Seafra Seafood';
    }

    centerBottomDiv.className = 'centerbottomdiv';
    centerBottomText.className = 'centerbottomtext';
    centerBottomBlue.className = 'centerbottomblue';
    
    centerBottomDiv.appendChild(centerBottomText);
    centerBottomDiv.appendChild(centerBottomBlue);

    centerBox.appendChild(centerTop);
    centerBox.appendChild(centerBottomDiv);
    content.appendChild(centerBox);
}

