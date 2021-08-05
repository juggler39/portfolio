'use strict';

gsap.registerPlugin(ScrollTrigger);
let speed = 100;

let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: '.scrollElement',
  start: 'top top',
  end: '45% 100%',
  scrub: 3,
});



scene1.to('#cloud1', { x: -1.6 * speed, scale: 0.1, opacity:0, ease: 'power1.in' }, 0);
scene1.to('#cloud2', { x: 3 * speed, scale: 0.1, opacity:0, ease: 'power1.in' }, 0.03);
scene1.from('#gulls', { x: -1 * speed, y: 0.5 * speed, scale: 0 });
scene1.from('#sky', { color: '#000' });

let scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: '.scrollElement',
  start: 'top top',
  end: '35% 100%',
  scrub: 4,
});

scene2.to('#dune1', { x: 1 * speed, y: -1.5 * speed, ease: 'power1.out' }, 0.2);
scene2.to('#dune2', { x: -1 * speed, y: -1.7 * speed, ease: 'power1.in' }, 0);
scene1.to('#gulls', { x: 2 * speed, y: 0.8 * speed, scale: 0 });
scene2.to('#sea', { y: 0.4 * speed, ease: 'power2.in' }, 0);

//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
