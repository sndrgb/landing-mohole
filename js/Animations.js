import gsap from 'gsap/all'
import splitting from 'splitting'

const animations = new Map()
  // .set(CHIAVE, VALORE)
  // .get(CHIAVE) -> VALORE

// const obj = {
//   title: () => {
//     console.log(this)
//   }
// }

// obj.title
// obj['title']
// const type = 'title'
// obj[type]

// animations.get('title')
// animations.get(type)

// obj.image = () => {}

// animations.set('image', () => {})

animations.set('title', (el) => {
  const letters = splitting({
    target: el,
    by: 'chars'
  })[0].chars

  el.style.opacity = 1

  return gsap.from(letters, {
    opacity: 0,
    translateX: 20,
    translateY: 20,
    rotate: 20,
    duration: 0.8,
    stagger: 0.04,
  })
})

animations.set('image', (el) => {
  return gsap.from(el, {
    scale: 1.1,
    filter: 'blur(30px)',
    duration: 1
  })
})

animations.set('text', (el) => {
  const letters = splitting({
    target: el,
    by: 'chars'
  })[0].chars

  el.style.opacity = 1

  return gsap.from(letters, {
    opacity: 0,
    translateX: 20,
    translateY: 40,
    rotate: 20,
    duration: 0.2,
    stagger: 0.005,
  })
})


export default animations;