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

gsap.from(".page1 .nav2 p",{
    // stagger:1,
    duration:1,
    // ease:"linear",
    y:-120,
    opacity:0
})

gsap.from(".page2 .choos p",{
    stagger:1,
    duration:1,
    y:120,
    scrollTrigger:{
        trigger:"page2 choos",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 80%"
    }
})