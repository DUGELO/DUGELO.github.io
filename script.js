const heart = document.querySelector('.heart-container');

heart.addEventListener('mouseover', () => {
  heart.querySelector('.fa-heart').style.transform = 'scale(1.1)';
});

heart.addEventListener('mouseout', () => {
  heart.querySelector('.fa-heart').style.transform = 'scale(1)';
});

