function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  mySidenav.innerHTML +=
  `
  <p style="margin-left:20px; margin-top: 200px; font-size:24px;">Shopping bag is empty</p>
  <p style="margin-left:20px; margin-top: 10px;"> Bura kimi </p>
  `


  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  