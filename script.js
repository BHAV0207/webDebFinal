const heart = document.querySelector('.heart');

heart.addEventListener('click' , function(){
    heart.style.background = 'red';
})
heart.addEventListener('dblclick' , function(){
    heart.style.background = 'whitesmoke';
})

const heart1 = document.querySelector('.heart1');

heart1.addEventListener('click' , function(){
    heart1.style.background = 'red';
})
heart1.addEventListener('dblclick' , function(){
    heart1.style.background = 'whitesmoke';
})


const heart2 = document.querySelector('.heart2');

heart2.addEventListener('click' , function(){
    heart2.style.background = 'red';
})
heart2.addEventListener('dblclick' , function(){
    heart2.style.background = 'whitesmoke';
})



const comm =  document.querySelector('.comment');
comm.addEventListener('click' , function(){
    const userInput = prompt('Please enter some text:');
    console.log(userInput);
})


const comment =  document.querySelector('.comment1');
comment.addEventListener('click' , function(){
    const userInput = prompt('Please enter some text:');
    console.log(userInput);
})



const comment1 =  document.querySelector('.comm');
comment1.addEventListener('click' , function(){
    const userInput = prompt('Please add some comment:');
    console.log(userInput);
})


