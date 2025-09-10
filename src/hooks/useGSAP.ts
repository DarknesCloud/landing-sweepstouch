'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Enhanced fade in animation for elements with class 'fade-in'
      gsap.fromTo('.fade-in', 
        { 
          opacity: 0, 
          y: 60,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
            onEnter: () => gsap.to('.fade-in', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }),
            onLeave: () => gsap.to('.fade-in', { opacity: 0.3, y: -30, filter: 'blur(5px)', duration: 0.8, ease: 'power2.in' }),
            onEnterBack: () => gsap.to('.fade-in', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }),
            onLeaveBack: () => gsap.to('.fade-in', { opacity: 0, y: 60, filter: 'blur(10px)', duration: 0.8, ease: 'power2.in' })
          }
        }
      );

      // Enhanced scale animation for cards with smooth transitions
      gsap.fromTo('.scale-in', 
        { 
          scale: 0.7, 
          opacity: 0,
          rotationY: 15,
          transformOrigin: 'center center'
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.scale-in',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
            onEnter: () => gsap.to('.scale-in', { scale: 1, opacity: 1, rotationY: 0, duration: 1, ease: 'back.out(1.7)' }),
            onLeave: () => gsap.to('.scale-in', { scale: 0.9, opacity: 0.4, rotationY: -10, duration: 0.6, ease: 'power2.in' }),
            onEnterBack: () => gsap.to('.scale-in', { scale: 1, opacity: 1, rotationY: 0, duration: 1, ease: 'back.out(1.7)' }),
            onLeaveBack: () => gsap.to('.scale-in', { scale: 0.7, opacity: 0, rotationY: 15, duration: 0.6, ease: 'power2.in' })
          }
        }
      );

      // Enhanced slide in from left with smooth fade
      gsap.fromTo('.slide-left', 
        { 
          x: -120, 
          opacity: 0,
          filter: 'blur(8px)'
        },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.slide-left',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
            onEnter: () => gsap.to('.slide-left', { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out' }),
            onLeave: () => gsap.to('.slide-left', { x: -60, opacity: 0.2, filter: 'blur(5px)', duration: 0.8, ease: 'power2.in' }),
            onEnterBack: () => gsap.to('.slide-left', { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out' }),
            onLeaveBack: () => gsap.to('.slide-left', { x: -120, opacity: 0, filter: 'blur(8px)', duration: 0.8, ease: 'power2.in' })
          }
        }
      );

      // Enhanced slide in from right with smooth fade
      gsap.fromTo('.slide-right', 
        { 
          x: 120, 
          opacity: 0,
          filter: 'blur(8px)'
        },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.slide-right',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
            onEnter: () => gsap.to('.slide-right', { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out' }),
            onLeave: () => gsap.to('.slide-right', { x: 60, opacity: 0.2, filter: 'blur(5px)', duration: 0.8, ease: 'power2.in' }),
            onEnterBack: () => gsap.to('.slide-right', { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power3.out' }),
            onLeaveBack: () => gsap.to('.slide-right', { x: 120, opacity: 0, filter: 'blur(8px)', duration: 0.8, ease: 'power2.in' })
          }
        }
      );

      // Enhanced parallax effect for hero section
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      // Smooth navbar background change on scroll
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
          className: 'scrolled',
          targets: '.header'
        },
        onEnter: () => gsap.to('.header', { backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', duration: 0.3 }),
        onLeaveBack: () => gsap.to('.header', { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', duration: 0.3 })
      });

      // Global smooth scroll animation for all elements
      gsap.utils.toArray('section, .animate-on-scroll').forEach((element: any) => {
        gsap.fromTo(element, 
          { 
            opacity: 0.8, 
            y: 30,
            filter: 'blur(3px)'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              end: 'bottom 10%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

