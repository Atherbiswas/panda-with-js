// All h2 element color change 
const heading2 = document.getElementsByTagName('h2');
for(const h2 of heading2){
    h2.style.color = 'lightblue';
}


//Backpack section background color change
const bagPack = document.getElementById('Bagpack');
bagPack.style.backgroundColor = 'tomato';


//card class change to border radius to 30px;
const cardClass = document.querySelectorAll('.card');
for(const card of cardClass){
    card.style.borderRadius = '30px';
}


//function add with console log and click handler
function handleOnClickr(){
    console.log('btn clicked');
}


// add onclick event handler on buy now button and remove it
function handleOnClick(){
    const btnBuy = document.getElementById('btn-buy');
    btnBuy.style.display = 'none';
}


//submit btn disable and enable work
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const mailBox = event.target.value;
    const btnSubmit = document.getElementById('btn-submit');
    if(mailBox === 'email'){
        btnSubmit.removeAttribute('disabled');
    }
    else{
        btnSubmit.setAttribute('disabled',true);
    }
})


//change the image when mouse enter
const image = document.getElementById('img-change');
image.addEventListener('mouseenter',function(){
    image.src = 'images/shoes/shoe-2.png'
})
image.addEventListener('mouseleave',function(){
    image.src = 'images/shoes/shoe-1.png'
})


//double click with background color change
const subscribe = document.getElementById('Subscribe');
subscribe.addEventListener('dblclick',function(){
    subscribe.style.backgroundColor = '#FF7F50';
})