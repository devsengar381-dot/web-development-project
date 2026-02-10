<!DOCTYPE html>
<html>
<head>
<title>My Shop</title>

<style>
body {
  margin: 0;
  font-family: Arial;
  background: #f2f2f2;
}

header {
  background: black;
  color: white;
  text-align: center;
  padding: 15px;
}

nav a {
  color: white;
  margin: 10px;
  text-decoration: none;
}

.banner {
  background: green;
  color: white;
  text-align: center;
  padding: 30px;
}

.products {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  background: white;
  width: 200px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px gray;
}

button {
  background: orange;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 5px;
}

footer {
  background: black;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>

</head>

<body>

<header>
  <h1>My E-Commerce Store</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
  </nav>
</header>

<div class="banner">
  <h2>Welcome to My Shop</h2>
  <p>Best Deals Everyday</p>
</div>

<div class="products">

  <div class="card">
    <img src="https://via.placeholder.com/150">
    <h3>Product 1</h3>
    <p>₹499</p>
    <button>Add to Cart</button>
  </div>

  <div class="card">
    <img src="https://via.placeholder.com/150">
    <h3>Product 2</h3>
    <p>₹799</p>
    <button>Add to Cart</button>
  </div>

</div>

<footer>
  © 2026 My Shop
</footer>

</body>
</html>
