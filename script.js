var layer=document.querySelector("#layer");

document.querySelector("#nav").addEventListener("mouseenter",function(){
    // console.log("aaya");
    gsap.to(".cover",{
        // stagger:.1,
        // ease:Expo.easeInOut,
        duration:.2,
        height:"100%",
        opacity:1
    })
    layer.style.opacity=0;
})

document.querySelector("#nav").addEventListener("mouseleave",function(){
    // console.log("chala gaya");
    gsap.to(".cover",{
        // stagger:.1,
        // ease:Expo.easeInOut,
        duration:.2,
        height:0,
        opacity:0
    })
    layer.style.opacity=1;
})


gsap.from("#section1 #box h1",{
    x:-30,
    opacity:0,
    duration:1
})
gsap.from("#section1 #box p",{
    x:-30,
    opacity:0,
    delay:.5,
    duration:1
})
gsap.from("#section1 #box a",{
    x:-30,
    opacity:0,
    delay:1,
    duration:1
})
gsap.from("#section1 img",{
    x:30,
    opacity:0,
    delay:1.5,
    duration:1
})

gsap.from("#a",{
    scrollTrigger:{
        trigger: "#a",
        start: "top 98%",
        // markers: true,
        scrub:1
    },
    x:-100,
    duration:.5,
    opacity:0
})
gsap.from("#b",{
    scrollTrigger:{
        trigger: "#a",
        start: "top 98%",
        // markers: true,
        scrub:1
    },
    y:100,
    duration:.5,
    opacity:0
})
gsap.from("#c",{
    scrollTrigger:{
        trigger: "#a",
        start: "top 98%",
        // markers: true,
        scrub:1
    },
    x:100,
    duration:.5,
    opacity:0
})

gsap.from("#section4 #content",{
    scrollTrigger:{
        trigger: "#content",
        start: "top 80%",
        // markers: true,
        // scrub:1
    },
    y:-50,
    duration:1,
    opacity:0
})

gsap.from("#d",{
    scrollTrigger:{
        trigger: "#a",
        start: "top 98%",
        // markers: true,
        scrub:2
    },
    x:-400,
    duration:.5,
    opacity:0
})
gsap.from("#e",{
    scrollTrigger:{
        trigger: "#a",
        start: "top 98%",
        // markers: true,
        scrub:2
    },
    y:400,
    duration:.5,
    opacity:0
})
gsap.from("#f",{
    scrollTrigger:{
        trigger: "#a",
        start: "top 85%",
        // markers: true,
        scrub:2
    },
    x:400,
    duration:1,
    opacity:0
})


gsap.from("#section5>h1",{
    scrollTrigger:{
        trigger: "#section5>h1",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:-100,
    duration:1,
    opacity:0
})

gsap.from(".item",{
    scrollTrigger:{
        trigger: ".item",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:100,
    duration:1,
    stagger:.5,
    opacity:0
})

gsap.from("#section5>button",{
    scrollTrigger:{
        trigger: "#section5>button",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    duration:2,
    opacity:0
})


gsap.from("#section6 #dets h1",{
    scrollTrigger:{
        trigger: "#section6 #dets h1",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:50,
    duration:1,
    opacity:0
})
gsap.from("#section6 #dets h4",{
    scrollTrigger:{
        trigger: "#section6 #dets h4",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:50,
    duration:1,
    opacity:0
})
gsap.from("#section6 #box",{
    scrollTrigger:{
        trigger: "#section6 #box",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:50,
    duration:1,
    opacity:0
})


gsap.from("#section7 h1",{
    scrollTrigger:{
        trigger: "#section7 h1",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:50,
    duration:1,
    opacity:0
})
gsap.from("#section7 #mail",{
    scrollTrigger:{
        trigger: "#section7 #mail",
        start: "top 85%",
        // markers: true,
        // scrub:2
    },
    y:50,
    duration:1.5,
    opacity:0
})