var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');

//when the user clicks on the password field, show the message box
myInput.onfocus  = function () {
    document.getElementById('message').style.display = 'block';
};
//when the user clicks outside the password field, hide the message box
myInput.onblur = function () {
    document.getElementById('message').style.display = 'none';
};
//when the user starts to type into the password field
myInput.onkeyup = function () {
    //validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }
    else{
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }
    //validate capital letters
    var upperCaseLetters = /[A-Z]g/;
    if (myInput.value.match(upperCaseLetters)){
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }
    else{
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }
    //validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)){
        number.classList.remove('invalid');
        number.classList.add('valid');
    }
    else
        number.classList.remove('valid');
        number.classList.add('invalid');
    }
    //validate length
    if (myInput.value.length >= 8){
        length.classList.remove('invalid');
        length.classList.add('valid');
    }
    else{
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
  }
