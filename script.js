/**
 * Contact Form Script
 */
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0l32qxjxgdOdHT8qwlxH4YXvnJjcggTRhOArziQbp5Dg0gwsmAdCpaCv5So0MYZw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message Sent!!"
        })
        setTimeout(function() {
          msg.innerHTML = ""
  
        }, 10000)
        form.reset()
        .catch(error => console.error('Error!', error.message))
    })