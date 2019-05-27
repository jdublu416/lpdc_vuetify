<template>
  <div class="header-comp-nav">
    <h1 class="logo">
      Data<span>Concepts</span>
    </h1>
    <nav class="nav-bar-header">
      <ul class="nav-list">
        <li class="nav-list-item">
          <a href="#">Work</a>
        </li>
        <li class="nav-list-item">
          <a href="#">Services</a>
        </li>
        <li class="nav-list-item">
          <a href="#">Insights</a>
        </li>
        <li class="nav-list-item">
          <a href="#">Careers</a>
        </li>
        <li class="nav-list-item">
          <a href="#">About</a>
        </li>
        <li class="nav-list-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <!-- <i class="fas fa-bars fa-2x myfas"></i> -->
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-comp-nav {
  /* background-color: #282f38; */
  background-image: linear-gradient(left, #516683, black);
  opacity: 0.75;
  height: 105px;
  margin-top: 0;
  
}

.logo {
  width: 30%;
  max-width: 500px;
  font-size: 1.5em;
  padding: 25px 50px;
  color: whitesmoke;
  margin-right: 0;
  display: inline-block;
}
.logo span {
  color: hsl(27, 80%, 52%);
  opacity: 0.8;
}
nav {
  float: right;
}
ul {
  text-decoration: none;
  padding-top: 80px;
}

.nav-list-item {
  display: inline-block;
  text-decoration: none;
  padding: 0px 10px 0 5px;
  text-transform: uppercase;
  color: whitesmoke;
}

.nav-list-item a {
  color: whitesmoke;
  text-decoration: none;
}
.myfas{
 display: flex;
 float: right;
 color: white;

}
</style>

