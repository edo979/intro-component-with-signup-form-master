const btn = document.querySelector('.btn'),
  inputEls = document.querySelectorAll('.input-group')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  inputEls.forEach((inputEl) => {
    const input = inputEl.querySelector('input')

    if (input.value == '') {
      inputEl.classList.add('error')

      if (input.placeholder === 'Email Address') {
        inputEl.querySelector('p').innerText = 'Email Address cannot be empty'
      }
    } else {
      inputEl.classList.remove('error')

      // Check is email address valid
      if (input.placeholder === 'Email Address') {
        const re = /\S+@\S+\.\S+/
        const isValidEmail = re.test(input.value)

        if (isValidEmail) {
          inputEl.classList.remove('error')
        } else {
          inputEl.classList.add('error')
          inputEl.querySelector('p').innerText =
            'Look like this is not an email'
        }
      }
    }
  })
})
