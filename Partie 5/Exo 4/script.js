
function changeImgClick() {

  let imgForExercice = document.getElementById('imageToChange');

  if (imgForExercice.src == 'http://127.0.0.1:5500/Partie%205/Exo%204/img/img1.jpeg') 
  {
      imgForExercice.src='http://127.0.0.1:5500/Partie%205/Exo%204/img/img2.jpeg';
  }
  else 
  {
      imgForExercice.src='http://127.0.0.1:5500/Partie%205/Exo%204/img/img1.jpeg';
  }
}

function changeImgOver() {

  let imgForExercice = document.getElementById('imageToChange');

  imgForExercice.style.width='500px'
  imgForExercice.style.height='200px'

}

function changeImgOut() {

  let imgForExercice = document.getElementById('imageToChange');

  imgForExercice.style.width='400px'
  imgForExercice.style.height='150px'
  
}