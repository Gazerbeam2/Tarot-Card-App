const updateButton = document.querySelector('#update-button')

updateButton.addEventListener('click', () => {
  fetch('/random')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.text() // or response.json() if you're sending JSON
    })

  })
