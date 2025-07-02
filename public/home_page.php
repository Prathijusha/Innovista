<?php 
    // We will eventually get these files from the correct path
    // For now, let's pretend we are in the views folder
    // In the final app, the router will handle this
    require_once '../src/views/layouts/header.php'; 
?>

<main>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content container">
            <h1>Transforming Spaces, Restoring Dreams</h1>
            <p>Your one-stop platform for interior design, painting, and restoration services in the Northern Province.</p>
            <a href="/services" class="btn btn-primary">Explore Services</a>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works container">
        <h2>How It Works</h2>
        <div class="steps">
            <div class="step">
                <div class="step-icon">1</div>
                <h3>Discover</h3>
                <p>Browse portfolios from top-rated local professionals.</p>
            </div>
            <div class="step">
                <div class="step-icon">2</div>
                <h3>Book & Quote</h3>
                <p>Schedule appointments and get transparent quotes.</p>
            </div>
            <div class="step">
                <div class="step-icon">3</div>
                <h3>Track</h3>
                <p>Monitor your project's progress from start to finish.</p>
            </div>
        </div>
    </section>

    <!-- Our Services Section -->
    <section class="services-section container" style="padding: 4rem 0; text-align: center;">
        <h2 style="font-size:2.2rem; margin-bottom:2.5rem; color:#1e3a8a;">Our Services</h2>
        <div class="services-grid" style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
            <!-- Interior Design -->
            <div class="service-card">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Interior Design">
                <h3 style="font-size:1.2rem; margin: 1rem 0 0.5rem 0; color:#1e3a8a;">Interior Design</h3>
            </div>
            <!-- Painting -->
            <div class="service-card">
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" alt="Painting Service">
                <h3 style="font-size:1.2rem; margin: 1rem 0 0.5rem 0; color:#1e3a8a;">Painting</h3>
            </div>
            <!-- Restoration -->
            <div class="service-card">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Restoration Service">
                <h3 style="font-size:1.2rem; margin: 1rem 0 0.5rem 0; color:#1e3a8a;">Restoration</h3>
            </div>
        </div>
    </section>
</main>

<?php 
    require_once '../src/views/layouts/footer.php'; 
?>