//DOM Manipulation

/*Ways of selecting include
*GetElementById()
*GetElementByClassName()
*GetElementByTagName()
*querySelector()
*querySelectorAll()*/

/*const title=document.getElementById('main-heading');
console.log(title);

const listItems=document.getElementsByClassName('list-items');

console.log(listItems)
 const tag=document.getElementsByTagName('li');

 const container=document.querySelector('div')
 console.log(container);

 const container1=document.querySelectorAll('div');*/

 const title=document.querySelector('#main-heading');
 title.style.color='red';//inline styling
 console.log(title)

 const listItems=document.querySelectorAll('.list-items');
 
 for(i=0; i<listItems.length; i++){
    listItems[i].style.fontSize ='2rem';
 }
 console.log(listItems);

 //creating elements
 

