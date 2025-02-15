var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrb.style.left = dets.x - 150 + "px";
    crsrb.style.top = dets.y - 150 + "px";
});

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2.5
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor :"#000",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top-10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top-30%",
        end:"top -75%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 40%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 80%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:3
    }
    
})



