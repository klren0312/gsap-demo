import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function doGsapInit() {
  // 横向滚动
  const boxContainer: HTMLElement | null = document.querySelector('.box-container')
  const boxItems = gsap.utils.toArray('.box-container .box')
  if (!boxContainer) return
  gsap.to(boxItems, {
    xPercent: -100 * (boxItems.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: boxContainer,
      pin: true,
      start: 'top top',
      scrub: 1,
      markers: true,
      end: `+=${boxContainer.offsetWidth || 0 - innerWidth}`,
    },
  })

  // 卡片效果
  const cardContainer: HTMLElement | null = document.querySelector('.card-container')
  if (!cardContainer) return
  gsap.timeline({
    scrollTrigger: {
      trigger: cardContainer,
      pin: true,
      start: 'top top',
      scrub: 1,
      end: `+=${cardContainer.offsetWidth || 0 - innerWidth}`,
      markers: true,
    },
  })
    .to('.card-5', { xPercent: -110, scale: 1.1 }, 0)
    .to('.card-5', { xPercent: -250, scale: 1 }, 1)
    .to('.card-4', { xPercent: -110, scale: 1.1 }, 1)
    .to('.card-4', { xPercent: -250, scale: 1 }, 2)
    .to('.card-3', { xPercent: -110, scale: 1.1 }, 2)
    .to('.card-3', { xPercent: -250, scale: 1 }, 3)
    .to('.card-2', { xPercent: -110, scale: 1.1 }, 3)
    .to('.card-2', { xPercent: -250, scale: 1 }, 4)
    .to('.card-1', { xPercent: -110, scale: 1.1 }, 4)
    .to('.card-1', { xPercent: -250, scale: 1 }, 5)
}
