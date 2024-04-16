function initCarousel() 
{
  const imageContainer = document.getElementsByClassName('image')[0];
  const images = imageContainer.getElementsByTagName('div');
  const buttons = document.getElementsByClassName('radio');
  let currentIndex = 0;
  images[currentIndex].classList.add('visible');
  buttons[currentIndex].checked = true;
  function showImage(index) 
  {
    images[currentIndex].classList.remove('visible');
    currentIndex = index;
    images[currentIndex].classList.add('visible');
    for (let i = 0; i < buttons.length; i++) 
    {
      buttons[i].checked = false;
    }
    buttons[currentIndex].checked = true;
  }
  function showNextImage() 
  {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }

  function showPreviousImage() 
  {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }
  setInterval(showNextImage, 5000);
  const nextArrow = document.getElementsByClassName('arrow next')[0];
  const previousArrow = document.getElementsByClassName('arrow previous')[0];
  if (nextArrow && previousArrow) 
  {
    nextArrow.addEventListener('click', showNextImage);
    previousArrow.addEventListener('click', showPreviousImage);
  }
  for (let i = 0; i < buttons.length; i++) 
  {
    buttons[i].addEventListener('change', function () 
    {
      showImage(i);
    });
  }
}

document.addEventListener('DOMContentLoaded', initCarousel);