const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const pass = document.getElementById('password');
const passCon = document.getElementById('password-con');
const date = document.getElementById('date');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementsByName('gender');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    provera();
})


function provera(){
    const fnameValue = fname.value
    const lnameValue = lname.value
    const passValue = pass.value
    const passConValue = passCon.value
    const dateValue = date.value
    const emailValue = email.value
    const phoneValue = phone.value

    prazno(passValue, pass);

    prazno(dateValue, date);
    prazno(emailValue, email);
    

    slova(fnameValue, fname);
    slova(lnameValue, lname);

    brojevi(phoneValue, phone);

    emailProvera(emailValue, email);

    isti(passValue, passConValue, passCon);

    pol(gender);
}
function greska(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
function uspeh(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function prazno(vrednostValue, vrednost) {
    if(vrednostValue === ""){
        greska(vrednost, 'This field can not be blank.')
    }
    else {
        uspeh(vrednost)
    }
}

function slova(vrednostValue, vrednost){
    if(!isNaN(vrednostValue)&& (vrednostValue !== "")){
        greska(vrednost, 'Only characters allowed.')
    }
    else {
        prazno(vrednostValue, vrednost)
    }
}

function brojevi(vrednostValue, vrednost){
    if(isNaN(vrednostValue)&&(vrednostValue !== "")){
        greska(vrednost, 'Only digits allowed.')
    }
    else {
        prazno(vrednostValue, vrednost)
    }
}

function emailProvera(vrednostValue, vrednost){
    var lastAtPos = vrednostValue.lastIndexOf('@');
    var lastDotPos = vrednostValue.lastIndexOf('.');
    if((lastAtPos > lastDotPos || lastAtPos < 0 || vrednostValue.indexOf('@@') == 1 || lastDotPos < 2 || (vrednostValue.length - lastDotPos) < 2) &&(vrednostValue !== "")){
        greska(vrednost, 'This email is not valid.')
    }
    else{
        prazno(vrednostValue, vrednost)
    }
}

function isti(vrednostValue1, vrednostValue2, vrednost){
    if (vrednostValue1 != vrednostValue2 &&(vrednostValue2 !== "")) {
        greska(vrednost, 'Values do not match.')
    }
    else {
        prazno(vrednostValue2, vrednost)
    }
}
function pol(vrednost){
    if (!(vrednost[0].checked || vrednost[1].checked)) {
        alert('Please select one gender.');
    }
}
