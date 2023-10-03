const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
toggleBtn.onclick = function (){
    dropdownMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open');
}
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