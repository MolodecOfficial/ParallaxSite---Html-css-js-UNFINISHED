window.addEventListener('scroll', lol => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})