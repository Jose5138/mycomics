window.onload= function(){
   
      let img = document.getElementById('comics1');
      let img1 = document.getElementById('comics2');
      let img2 = document.getElementById('comics3');
      let img3 = document.getElementById('comics4');
      let img4 = document.getElementById('comics5');
      let img5 = document.getElementById('comics6');
      let img6 = document.getElementById('comics7');
      let img7 = document.getElementById('comics8');
      let img8 = document.getElementById('comics9');

      img.addEventListener('mouseover', animar, false);
      img1.addEventListener('mouseover', animar1, false);
      img2.addEventListener('mouseover', animar2, false);
      img3.addEventListener('mouseover', animar3, false);
      img4.addEventListener('mouseover', animar4, false);
      img5.addEventListener('mouseover', animar5, false);
      img6.addEventListener('mouseover', animar6, false);
      img7.addEventListener('mouseover', animar7, false);
      img8.addEventListener('mouseover', animar8, false);
      
      let almacen = document.getElementById('imgizq');
      function animar(){
            almacen.src = "../assets/img/comics/comics1.jpg";
      }
      function animar1(){
            almacen.src= "../assets/img/comics/comics2.jpg";
      }
      function animar2(){
            almacen.src= "../assets/img/comics/comics3.jpg";
      }
      function animar3(){
            almacen.src= "../assets/img/comics/comics4.jpg";
      }
      function animar4(){
            almacen.src= "../assets/img/comics/comics5.jpg";
      }
      function animar5(){
            almacen.src= "../assets/img/comics/comics6.jpg";
      }
      function animar6(){
            almacen.src= "../assets/img/comics/comics7.jpg";
      }
      function animar7(){
            almacen.src= "../assets/img/comics/comics8.jpg";
      }
      function animar8(){
            almacen.src= "../assets/img/comics/comics9.jpg";
      }  
}//end windows onload