$(function () {
    var carouselList = $("#carousel ul"),
        intervalId;
    
    intervalId = setInterval(changeRightSlide, 3000);
    
    function changeRightSlide() {
        carouselList.animate({marginLeft: -400},700, moveFirstSlide);
    }
    function changeLeftSlide() {
        moveLastSlide();
        carouselList.animate({
            marginLeft: 0
        }, 700);
    }
    
    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
    
    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});
    }
    
    var swap = $("#carousel div");
    
    $(swap).css({opacity: 0});
    $(swap).mouseover(function() {
        clearInterval(intervalId);
        swap.css({opacity: 0.6});
    })
    $(swap).mouseout(function() {
        intervalId = setInterval(changeRightSlide, 3000);
        swap.css({opacity: 0});
    });
    
    var rArrowClick = $("#right");
    var lArrowClick = $("#left");
    
    $(rArrowClick).click(function() {
        changeRightSlide();
    });
    $(lArrowClick).click(function() {
        changeLeftSlide();
    })
});