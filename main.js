$(document).ready(function(){
  $("header .main-nav .menu i,.toggle-menu ul li a,header .main-nav.scrolled .menu i").click(function(){
    $("header .main-nav .menu i").toggleClass("fa-times-circle");
    $(".toggle-menu").toggleClass("active");
  });
});

$(function () {
  $(document).scroll(function () {
    let nav = $("header .main-nav");
    nav.toggleClass('scrolled', $(this).scrollTop()>91);
  });
});

  const height = $("header .main-nav").outerHeight();
  $(function(){
    $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset - 91}, 1000);
                return false;

            }
        }
      });
    });


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyA4o0s6YMv78_m-MivqAAmBwdU8EW6_p00",
  authDomain: "portfolio-contact-edcad.firebaseapp.com",
  databaseURL: "https://portfolio-contact-edcad.firebaseio.com",
  projectId: "portfolio-contact-edcad",
  storageBucket: "portfolio-contact-edcad.appspot.com",
  messagingSenderId: "800087795947"
};
firebase.initializeApp(config);

 //initializing firebase in app
 var messageRef = firebase.database().ref('messages');

 //form values
document.getElementById('contact-me').addEventListener('submit',submitForm);

function submitForm(e){
   e.preventDefault();

  const name = getInput('yourname');
  const email = getInput('email');
  const Telephone = getInput('telephone');
  const companyname = getInput('companyname');
  const website = getInput('website');
  const position= getInput('position');
  const message= getInput('message');
 

  //function referenced to DOM
  function getInput(id){
    return document.getElementById(id).value;
   }

  //save values to data base
  saveMessage(name,email,message, Telephone,companyname,website,position);
  
   document.querySelector("#showalert").style.display ="block";
  setTimeout(function(){
    document.querySelector("#showalert").style.display ="none";
    document.getElementById('contact-me').reset(); 
  },3000);
  
};

//save message to fire base
  function saveMessage(name,email,message,Telephone,companyname,position,website) {
  const newMessageRef = messageRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    Telephone:Telephone,
    companyname:companyname,
    website:website,
    position: position,
     message:message
  });
};

   