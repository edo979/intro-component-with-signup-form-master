const btn = document.querySelector('.btn'),
  inputEls = document.querySelectorAll('.input-group')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  inputEls.forEach((inputEl) => {
    const input = inputEl.querySelector('input')

    if (input.value == '') {
      // check if p element created
      if (!inputEl.querySelector('p')) {
        const pEl = document.createElement('p')
        pEl.classList.add('error-text')
        pEl.innerText = `${input.placeholder} cannot be empty`

        inputEl.appendChild(pEl)
      }

      if (input.placeholder === 'Email Address') {
        inputEl.querySelector(
          'p'
        ).innerText = `${input.placeholder} cannot be empty`
      }

      inputEl.classList.add('error')
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
