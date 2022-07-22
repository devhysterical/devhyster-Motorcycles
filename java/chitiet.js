// JavaScript Document

document.addEventListener("DOMContentLoaded",function(){
var nut = document.querySelectorAll('div.nut ul li');
var slides = document.querySelectorAll('div.slide div');
for(var i = 0 ; i < nut.length; i++){
nut[i].addEventListener('click',function(){
    var nutnay = this;
    var vitrislide = 0;
    console.log(nutnay.previousElementSibling);
    for(var i = 0;nutnay = nutnay.previousElementSibling; vitrislide++){
        //chay den khi nut nay  = null thi dung.
        // chay xong lenh nay khi click vao nut ta lay dc vitrislide
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('ra');
    }
    for(var i = 0; i < slides.length; i++){
        slides[vitrislide].classList.add('ra');
    }
})
}
// Click chuyen slide
 
    auto();
    function auto(){
    var thoigian = setInterval(function(){
        var slide = document.querySelector('div.slide div.ra');
        var vitrislide = 0;
        for(var i = 0 ; slide = slide.previousElementSibling ; vitrislide ++){
        }
        for(var i = 0 ; i < slides.length; i++){
            slides[i].classList.remove('ra'); // remove hết những thằng đang có class 'ra'
        }
        if(vitrislide == slides.length - 1){
            slides[0].classList.add('ra');
                // Thằng này có nghĩa là sau khi tự động chuyển đến slide cuối cùng nó quay lại thằng 0
        }
        else{
        slides[vitrislide].nextElementSibling.classList.add('ra');
               // Đây là then chốt của auto slide nó sẽ chuyển sang cái thằng tiếp theo.
    }
    },5000)
// Tu dong chuyen slide
    for(var i = 0; i <6; i++){
        nut[i].addEventListener('click',function () {
            clearInterval(thoigian);
                //Click vào một nút bất kì dừng auto chuyển slide
        })
    }
// Dung tu dong chuyen slide
}
 
var x = setInterval(function(){
console.log('dm');
},1000);
 
},false)