const renderMusic = async () => {
    //Parse the ID as an int from the URL
    const requestedID = parseInt(window.location.href.split('/').pop())

    //Fetch the music data from the /discovery endpoint
    const response = await fetch('/discovery')
    const data = await response.json()

    //Point to the content container
    const musicContent = document.getElementById('music-content')

    //Find the specific gift in the data array
    let music 
    if (data) {
        music = data.find(music => music.id === requestedID)
    }
    
    //Conditional Rendering
    if (music) {
        document.getElementById('image').src = music.image
        document.getElementById('eventName').textContent = music.eventName
        document.getElementById('venue').textContent = 'Venue: ' + music.venue
        document.getElementById('genre').textContent = 'Genre: ' + music.genre
        document.getElementById('ticketPrice').textContent = 'Price: ' + music.ticketPrice
        document.getElementById('artists').textContent = music.artists
        document.getElementById('dataTime').textContent = 'Data & Time: ' + music.dataTime
        // Set the browser tab title to the event name
        document.title = `Music Discovery - ${music.eventName}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Events Available 😞'
        musicContent.appendChild(message)
    }

}

renderMusic()