    const langSelectorBtn = document.querySelector('#lang-selector-btn')
    langSelectorBtn.addEventListener('click', (e) => {
        e.target.offsetParent.classList.toggle('open')
    })
