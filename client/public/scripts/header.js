//Create a variable called header that points to the header tag.
const header = document.querySelector('header')

//Create a div element with a class name header-container
//Create the main container
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

//Create the left side (Logo + Title)
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Music Discovery'

// Append logo and title to left side
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

//Create the right side (Navigation Button)
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

//Create a button element and set its text content to Home. 
// Register a click event listener to the button that redirects the window to the root page.
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

// Append button to right side
headerRight.appendChild(headerButton)

//Assemble the header
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

//add the container to the actual <header> tag in HTML
header.appendChild(headerContainer)