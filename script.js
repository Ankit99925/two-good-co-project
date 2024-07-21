// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


let videocon= document.querySelector('#video-container');
let play=document.querySelector('#play');

videocon.addEventListener("mouseenter",()=>{
    gsap.to(play,{
        opacity:1,
        scale:1
    })
    
})
videocon.addEventListener("mouseleave",()=>{
    gsap.to(play,{
        opacity:0,
        scale:0
    })
})
videocon.addEventListener('mousemove',(dets)=>{
    gsap.to(play,{
        left:dets.x-75,
        top:dets.y-350
    })
})

// let h1=document.querySelector();
gsap.from("#page1 h1",{
    y:50,
    opacity:0,
    stagger:0.3,
    duration:1,
    delay:.5
})
gsap.from(videocon,{
    y:50,
    opacity:0,
    stagger:0.3,
    duration:.5,
    delay:1,
    scale:.5
})
// let dd=document.querySelector(".dtls")
// let ddd=document.querySelectorAll("#page2 .elem .dtls .dropdown")
// let animation = gsap.to("#page2 .elem .dtls .dropdown", {
//     display: "flex",
//     height: 15,
//     width: 70,
// });
// dd.addEventListener("mouseenter", () => animation.play());
    
// dd.forEach((g)=>{g.addEventListener('mouseleave',()=>{
    
//     ddd.forEach((h)=>{
//         h.style.display="none";
//     })
    
// })})

document.addEventListener('mousemove',(dets)=>{
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

let pg3hover=document.querySelectorAll(".child");

pg3hover.forEach((e)=>{
    e.addEventListener("mouseenter",(dets)=>{
        gsap.to('#cursor',{
            transform: "translate(-50%,-50%) scale(1)"
        }
        )
    })
    e.addEventListener("mouseleave",(dets)=>{
        gsap.to('#cursor',{
            transform: "translate(-50%,-50%) scale(0)"
        }
        )
    })
})

gsap.to('.nav1 svg', {
    transform:"translateY(-100%)",
    scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    start:"top 0",
    end:"top -5%",
    // markers:true,
    scrub:true}
});
gsap.to('.nav2 a', {
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    start:"top 0",
    end:"top -5%",
    
    scrub:1}
});
document.querySelector("#quote1").addEventListener("click",()=>{
    
    gsap.from('.blockQuote blockquote',{  
    transform:"translateY(10vw)",
    opacity:0,
    stagger:.1

})})
document.querySelector("#quote2").addEventListener("click",()=>{gsap.from('.blockQuote .feedback2 blockquote',{  
    transform:"translateY(-95vh)",
    opacity:0,
    stagger:.2,
    duration:.2

})})
document.querySelector("#quote3").addEventListener("click",()=>{gsap.from('.blockQuote blockquote',{  
    transform:"translateY(1200px)",
    opacity:0,
    stagger:.2,
    duration:.2

})})
document.querySelector("#quote4").addEventListener("click",()=>{gsap.from('.blockQuote blockquote',{  
    transform:"translateY(1200px)",
    opacity:0,
    stagger:.2,
    duration:.2

})})
document.querySelector("#quote5").addEventListener("click",()=>{gsap.from('.blockQuote blockquote',{  
    transform:"translateY(1200px)",
    opacity:0,
    stagger:.2,
    duration:.2

})})
document.querySelector("#quote6").addEventListener("click",()=>{gsap.from('.blockQuote blockquote',{  
    transform:"translateY(1200px)",
    opacity:0,
    stagger:.2,
    duration:.2

})})

