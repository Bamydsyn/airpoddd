TweenMax.from(".navbar", 1, {
  opacity: 0,
  y: -100,
  delay: 0.1,
  ease: Expo.easeInOut
}, 10)

TweenMax.from(".img1", 1, {
  opacity: 0,
  y: -500,
  delay: 0.3,
  ease: Expo.easeInOut
}, 10)

TweenMax.from(".img2", 1, {
  opacity: 0,
  y: 500,
  delay: 0.4,
  ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".body-Header", 1, {
  opacity: 0,
  x: -500,
  delay: 0.2,
  ease: Expo.easeInOut
}, 10)

TweenMax.from(".body-Note", 1, {
  opacity: 0,
  x: 500,
  delay: 0.3,
  ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".body-Link", 1, {
  opacity: 0,
  y: 500,
  delay: 0.5,
  ease: Expo.easeInOut
}, 0.08)
