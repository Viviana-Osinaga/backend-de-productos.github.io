document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
  aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <!-- <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li> -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a class="dropdown-item" href="productos.html">Productos</a>
        <a class="dropdown-item" href="#">Users</a>
      </div>
    </li>
  </ul>
  <form class="d-flex my-2 my-lg-0">
    <input class="form-control me-sm-2" type="text" placeholder="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</div>
</nav>` 
//aplicará todos los estilos a todos los documentos html que tengan el mismo id

// LogIn
// function loguear() {
//   let useremail = document.getElementById("useremail").value;
//   let pass = document.getElementById("clave").value;
//   if(useremail=="usermail@gmail.com" && pass=="1234") {
//     window.location="productos.html";
//   }
//   else{
//     alert("Email o Contraseña incorrectos!")
//   }
// }