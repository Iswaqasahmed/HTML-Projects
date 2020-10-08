// alert('yes')
let count=0;
let clientOne = document.querySelector('.clientOne');
let clientTwo = document.querySelector('.clientTwo');
let clientThree = document.querySelector('.clientThree');
let nextButton = document.querySelector('.nextButton');
let prevButton = document.querySelector('.prevButton');

const nextClient = ()=>{
    count++;
    if(count==1){
        clientTwo.style.display = 'block';
        clientOne.style.display = 'none'; 
        clientThree.style.display = 'none';  
    }
    
    if(count==2){
        clientTwo.style.display = 'none';
        clientOne.style.display = 'none'; 
        clientThree.style.display = 'block';
        nextButton.style.display = 'none';
       
    }
    
}
const prevClient = ()=>{
    count--;
   
    if(count==0){
        clientOne.style.display = 'block';
        clientTwo.style.display = 'none';
        clientThree.style.display = 'none';
        // // nextButton.style.display = 'block';
        prevButton.style.display = 'none'
        
    }
    if(count==1){
        clientTwo.style.display = 'block';
        clientOne.style.display = 'none';
        clientThree.style.display = 'none';
    }
    
   
    
}
