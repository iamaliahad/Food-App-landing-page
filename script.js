//..............................


//Navbar style
//select menu class
document.querySelector('.menu').addEventListener('click', function(){
    document.querySelectorAll('.target').forEach(function(element){
        element.classList.toggle('active');
    });
})


//.....................................................
//select all icons
const icons= document.querySelectorAll('.section-1-icons i');

let i=1; //counter

//set animation with setinterval
setInterval(()=>{
    i++ //increment counter
    //select first icon
const icon= document.querySelector('.section-1-icons i.change');
//remove class change
icon.classList.remove('change');
if(i>icons.length){
    icons[0].classList.add('change'); //if counter is greater than length of icons, set counter to 1
    i=1;
}else{
//add class change
icon.nextElementSibling.classList.add('change');
}

}, 3000) //1000 miliseconds


