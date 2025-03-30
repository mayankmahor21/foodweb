gsap.to(".page1 .box .item2 img ",{
    rotate:"360deg",
    repeat: -1,
    duration:15,
    ease:"linear",
    
    
})

gsap.from(".page1 .box .item1",{
    opacity:1,
    x:-500,
    duration:1,
    ease:"linear",
})
gsap.from(".page1 .box .item2",{
    opacity:1,
    x:500,
    duration:1,
    ease:"linear",
})

// gsap.from(".page1 .box .item2",{
//     // rotate:"360deg",
//     // repeat: -1,
//     duration:2,

//     // ease:"linear",
//     x:500,
    
// })

// gsap.from(".page1 .box",{
//     x:-500,
//     duration:2,
// })

// gsap.from(".page2 .choos h1 p",{
//     opacity:0,
//     duration:2,
//     x:500,
//     // stagger:1,

// })

// gsap.from(".page2 .choos h1 p", { opacity: 0, duration: 1, y: 50 }); //Example