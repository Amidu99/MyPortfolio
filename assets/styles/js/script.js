AOS.init();
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Start redirecting...");
});
window.onload = () =>{
    console.log("Loading...");
    setInterval(close_loader,3000);
}
function close_loader() {
    $("#preloader").css({"display": "none"});
}
$(window).ready(() => {
    console.log("Done.");
});
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
toggleBtn.onclick = function (){
    dropdownMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
}
let btn_changed = false;
$('#color_changer').on('click', ()=> {
    if(!btn_changed){
        $("#color_btn_set").css({"display": "flex"});
        $("#color_changer_icon").css({"transform": "rotate(180deg)"});
        btn_changed = true;
    }else if(btn_changed){
        $("#color_btn_set").css({"display": "none"});
        $("#color_changer_icon").css({"transform": "rotate(360deg)"});
        btn_changed = false;
    }
});
var stylesheetsToRemove = [
    './assets/styles/css/theme_red.css',
    './assets/styles/css/theme_blue.css',
    './assets/styles/css/theme_green.css'
];
function removeStylesheets(stylesheetsToRemove) {
    stylesheetsToRemove.forEach(function(stylesheet) {
        var stylesheetToRemove = $('link[href="' + stylesheet + '"]');
        if (stylesheetToRemove.length > 0) {
            stylesheetToRemove.remove();
        }
    });
}
$('#color_btn_set .color_btn').eq(0).on('click', ()=> {
    removeStylesheets(stylesheetsToRemove);
    $('head').append('<link rel="stylesheet" type="text/css" href="./assets/styles/css/theme_red.css">');
    $('#home > figure > img').attr('src', './assets/images/myImg_r.png');
    $('#about > article > figure > img').attr('src', './assets/images/myImg2_r.png');
    $('footer > a > img').attr('src', './assets/images/buttons/up_r.png');
    $('#color_changer_icon').attr('src', './assets/images/buttons/up_r.png');
});
$('#color_btn_set .color_btn').eq(1).on('click', ()=> {
    removeStylesheets(stylesheetsToRemove);
    $('head').append('<link rel="stylesheet" type="text/css" href="./assets/styles/css/theme_green.css">');
    $('#home > figure > img').attr('src', './assets/images/myImg_g.png');
    $('#about > article > figure > img').attr('src', './assets/images/myImg2_g.png');
    $('footer > a > img').attr('src', './assets/images/buttons/up_g.png');
    $('#color_changer_icon').attr('src', './assets/images/buttons/up_g.png');
});
$('#color_btn_set .color_btn').eq(2).on('click', ()=> {
    removeStylesheets(stylesheetsToRemove);
    $('head').append('<link rel="stylesheet" type="text/css" href="./assets/styles/css/theme_blue.css">');
    $('#home > figure > img').attr('src', './assets/images/myImg_b.png');
    $('#about > article > figure > img').attr('src', './assets/images/myImg2_b.png');
    $('footer > a > img').attr('src', './assets/images/buttons/up_b.png');
    $('#color_changer_icon').attr('src', './assets/images/buttons/up_b.png');
});
$('#color_btn_set .color_btn').eq(3).on('click', () => {
    location.reload();
});
const texts = ["Full-stack Developer", "Web Developer", "UI/UX Designer"];
let textIndex = 0;
let index = 0;
const speed = 75;
function typeWriter() {
    if (index < texts[textIndex].length) {
        document.getElementById("j_role").innerHTML += texts[textIndex].charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(resetText, 1000);
    }
}
function resetText() {
    document.getElementById("j_role").innerHTML = "|";
    index = 0;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, speed);
}
typeWriter();
$('#assignment1').on('click', ()=> {
    window.open('./assets/assignments/case-01/case_01.html', '_blank');
});
$('#assignment2').on('click', ()=> {
    window.open('./assets/assignments/case-02/case_02.html', '_blank');
});
$('#assignment3').on('click', ()=> {
    window.open('./assets/assignments/case-03/case_03.html', '_blank');
});
$('#assignment4').on('click', ()=> {
    window.open('./assets/assignments/case-04/case_04.html', '_blank');
});
$('#assignment5').on('click', ()=> {
    window.open('./assets/assignments/case-05-I/case_05-I.html', '_blank');
});
$('#assignment6').on('click', ()=> {
    window.open('./assets/assignments/case-06-I/case_06-I.html', '_blank');
});
$('#assignment7').on('click', ()=> {
    window.open('./assets/assignments/case-07-I/case_07-I.html', '_blank');
});
$('#assignment8').on('click', ()=> {
    window.open('./assets/assignments/case-08/case_08.html', '_blank');
});
$('#assignment9').on('click', ()=> {
    window.open('./assets/assignments/case-09/case_09.html', '_blank');
});
$('#assignment10').on('click', ()=> {
    window.open('./assets/assignments/case-10/case_10.html', '_blank');
});
$('#assignment11').on('click', ()=> {
    window.open('./assets/assignments/case-11-I/case_11-I.html', '_blank');
});
$('#assignment12').on('click', ()=> {
    window.open('./assets/assignments/case-12/case_12.html', '_blank');
});
const mainCard = document.querySelector('.main-card');
let activeDot = 0;
mainCard.addEventListener('mousedown', handleMouseDown, false);
mainCard.addEventListener('mousemove', handleMouseMove, false);
mainCard.addEventListener('mouseup', handleMouseUp, false);
mainCard.addEventListener('touchstart', handleTouchStart, false);
mainCard.addEventListener('touchmove', handleTouchMove, false);
let xDown = null;
function handleMouseDown(event) {
    xDown = event.clientX;
}
function handleMouseMove(event) {
    if (!xDown) {
        return;
    }
    const xUp = event.clientX;
    const xDiff = xDown - xUp;
    if (xDiff > 0) {
        if (activeDot < 3) {
            activeDot++;
            updateCheckedRadio(activeDot);
        }
    } else {
        if (activeDot > 0) {
            activeDot--;
            updateCheckedRadio(activeDot);
        }
    }
    xDown = null;
}
function handleMouseUp() {
    xDown = null;
}
function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    xDown = firstTouch.clientX;
}
function handleTouchMove(event) {
    if (!xDown) {
        return;
    }
    const xUp = event.touches[0].clientX;
    const xDiff = xDown - xUp;
    if (xDiff > 0) {
        if (activeDot < 3) {
            activeDot++;
            updateCheckedRadio(activeDot);
        }
    } else {
        if (activeDot > 0) {
            activeDot--;
            updateCheckedRadio(activeDot);
        }
    }
    xDown = null;
}
function updateCheckedRadio(index) {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio, i) => {
        radio.checked = i === index;
    });
}
function send_email(){
    let client_name = $("#client-name").val();
    let client_email = $("#client-email").val();
    let client_message = $("#client-message").val();
    let email_body = "Client Name : "+client_name+'<br/>Client Email : '+client_email+'<br/>Client Message : '+client_message;
    Email.send({
        SecureToken : "7046cbac-5347-4597-9b6d-61ef01c6df3e",
        To : 'amidushamika@gmail.com',
        From : "htcone9pw@gmail.com",
        Subject : "New message from your website",
        Body : email_body
    }).then(
        message => {
            if(message=='OK'){
                Swal.fire({width: '240px', position: 'center', icon: 'success', title: 'Message sent', showConfirmButton: false, timer: 2500});
            }else{
                Swal.fire({width: '240px', position: 'center', icon: 'error', title: 'Message not sent', showConfirmButton: false, timer: 2000});
            }
        }
    );
}