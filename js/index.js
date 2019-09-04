let slideImage = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
let index = 0;
let timeout;
leftArrow.addEventListener('click',prev);
rightArrow.addEventListener('click',next);

function showSlide()
{
  hideDisp();
  
  slideImage[index].style.display = 'block';
    
  console.log(index);
  console.log(slideImage.length);
  if(index==slideImage.length-1)
  {
    index=0;
  }
  else{
    index++;
  }
  timeout= setTimeout(showSlide,2500);
}

function hideDisp()
{
  for(let i=0;i<slideImage.length;i++)
  {
    slideImage[i].style.display = 'none';
  }
}

function prev()
{
  hideDisp();
  if(index==1)
  {
    index= parseInt(slideImage.length) - 1;
    console.log(index);
  }
  else if(index==0)
  {
    index= parseInt(slideImage.length) - 2;
    console.log(index);
  }
  else
  {
    index = index -2;
  }
  clearTimeout(timeout);
  showSlide();

}
function next()
{
  hideDisp();
  clearTimeout(timeout);
  showSlide();

}

showSlide();