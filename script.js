$(function () {
    var carouselList = $("#carousel ul");
    
    setInterval(swapImages, 3000);
    
    function swapImages () {
        carouselList.animate({'marginLeft':-400}, 700, moveFirstSlide);
    }
    
    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
    
    var swap = $("#carousel div");
    
    $(swap).css({opacity: 0});
    $(swap).mouseover(function(){
        swap.css({opacity: 0.6});
    })
    $(swap).mouseout(function(){
        swap.css({opacity: 0});
    });
    
    var rArrowClick = $("#right");
    var lArrowClick = $("#left");
    
    $(rArrowClick).click(function(){
        console.log("right");
    })
});