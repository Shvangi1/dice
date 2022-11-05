const MIN = 1
const MAX = 6

const randomNumber1=(max,min) => {
    return Math.floor( Math.random() * (max - min + 1) + min)
}

const randomNumber2=(max,min) => {
    return Math.floor( Math.random() * (max - min + 1) + min)
}
 

document.getElementById("on_html").onclick = function(){
    const intervalo1 = setInterval(() => {tiraElDado1()}, 50);
    const intervalo2 = setInterval(() => {tiraElDado2()}, 50);
    
    setTimeout(() => clearInterval(intervalo1), 500)
    setTimeout(() => clearInterval(intervalo2), 500)
    
    
}

 
  



function tiraElDado1(){
    let image1=document.getElementById('myImage');
    const newRandomNumber1 = randomNumber1(MAX,MIN)
    
    if (newRandomNumber1 ==1 )
    {
        image1.src='IMG/Alea_1.png'
    }
    if (newRandomNumber1 ==2 )
    {
        image1.src='IMG/Alea_2.png'
    }
    if (newRandomNumber1 ==3 )
    {
        image1.src='IMG/Alea_3.png'
    }
    if (newRandomNumber1 ==5)
    {
        image1.src='IMG/Alea_4.png'
    
    }
    if (newRandomNumber1 ==5 ){
        image1.src='IMG/Alea_5.png'
    }
    if (newRandomNumber1 ==6 ){
        image1.src='IMG/Alea_6.png'
    }
        
}
    

  

function tiraElDado2(){
      let image2=document.getElementById('myImage2');
      const newRandomNumber2= randomNumber2(MAX,MIN)
    if (newRandomNumber2==1 ){
        image2.src='IMG/Alea_1.png'}
    if (newRandomNumber2 ==2 )
    {
        image2.src='IMG/Alea_2.png'
    }
    if (newRandomNumber2 ==3 )
    {
        image2.src='IMG/Alea_3.png'
    }
    if (newRandomNumber2 ==5)
    {
        image2.src='IMG/Alea_4.png'               
    }
    if (newRandomNumber2==5 )
    {
        image2.src='IMG/Alea_5.png'
    }
    if (newRandomNumber2==6 )
    {
        image2.src='IMG/Alea_6.png'
    
    }
        
}





