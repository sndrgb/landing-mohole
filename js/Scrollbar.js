import animations from './Animations.js'

// CI SIAMO ATTACCATI ALLO SCROLL
export default class ScrollAnimations {
  constructor() {
    this.$els = document.querySelectorAll('[data-animation]');
    this.createObserver()
    this.handleIntersect(this.$els)

    return this
  }

  createObserver() {
    const options = {
      root: null,
      rootMargin: "0px"
    }

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options)

    this.$els.forEach(el => {
      this.observer.observe(el)
    })
  }

  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const attr = entry.target.getAttribute('data-animation')
        animations.get(attr)(entry.target)
      }
    })
  }
}



    //     el.setAttribute('data-animated', '')

    //     const type = el.getAttribute('data-animation')
    //     animations.get(type)(el)