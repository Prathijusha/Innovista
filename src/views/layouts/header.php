<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Innovista - Interior Design & Restoration</title>
    <!-- Link to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   
    <!-- Link to our CSS file -->
  
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<!-- Remove the leading slash from the path below -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
<link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
<header class="main-header">
    <nav class="navbar container">
        <a href="/" class="navbar-logo">
            <!-- Remove the leading slash from the path below -->
            <img src="assets/images/logo.png" alt="Innovista Logo">
            <span>INNOVISTA</span>
        </a>
            <ul style="list-style-type:none;" class="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/public/products.html">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div class="navbar-actions">
                <a href="/login" class="btn btn-secondary">Login</a>
                <a href="/register" class="btn btn-primary">Sign Up</a>
            </div>
            <button class="navbar-toggle" id="navbar-toggle">
                ☰ <!-- Hamburger Icon -->
            </button>
        </nav>
    </header>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
});
</script>