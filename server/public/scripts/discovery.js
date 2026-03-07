const renderMusic = async () => {
    //Fetch data from the /discovery endpoint
    const response = await fetch('/discovery')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(music => {
            // Create the card container
            const card = document.createElement('div')
            card.classList.add('card')

            // Create top container for the image
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            // Create bottom container for details
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${music.image})`

            const eventName = document.createElement('h3')
            eventName.textContent = music.eventName
            bottomContainer.appendChild(eventName)

            const artists = document.createElement('p')
            artists.textContent = 'Artists: ' + music.artists
            bottomContainer.appendChild(artists)

            const dataTime = document.createElement('p')
            dataTime.textContent = 'Data & Time: ' + music.dataTime
            bottomContainer.appendChild(dataTime)

            const ticketPrice = document.createElement('p')
            ticketPrice.textContent = 'Price: ' + music.ticketPrice
            bottomContainer.appendChild(ticketPrice)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/discovery/${music.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Event Available 😞'
        mainContent.appendChild(message)
    }

}

renderMusic()