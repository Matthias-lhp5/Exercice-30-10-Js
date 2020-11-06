
const img = document.getElementById('imageToChange');

function changeImgClick() {


  if (img.src.match("img1.jpeg") != null) 
  {
      img.src="img/img2.jpeg";
  }
  else 
  {
      img.src="img/img1.jpeg";
  }
};



function changeImgOver() {

  img.style.width='40rem'

};

function changeImgOut() {

  img.style.width='30rem'
  
};