// Service data with detailed information
const serviceData = {
    'interior-design': {
        title: 'Interior Design Services',
        description: 'Comprehensive interior design solutions for your dream space',
        icon: 'fas fa-palette',
        categories: [
            { name: 'Ceiling & Lighting', price: 'Rs. 8,000', description: 'Professional ceiling design and lighting solutions' },
            { name: 'Space Planning', price: 'Rs. 12,000', description: 'Optimal space utilization and layout design' },
            { name: 'Modular Kitchen', price: 'Rs. 35,000', description: 'Custom modular kitchen design and installation' },
            { name: 'Bathroom Design', price: 'Rs. 25,000', description: 'Modern bathroom design and renovation' },
            { name: 'Carpentry & Woodwork', price: 'Rs. 20,000', description: 'Custom woodwork and carpentry services' },
            { name: 'Furniture Design', price: 'Rs. 18,000', description: 'Custom furniture design and selection' },
            { name: 'Consultation', price: 'Rs. 5,000', description: 'Professional design consultation and advice' }
        ],
        packagePrice: 'Rs. 95,000',
        packageSavings: 'Rs. 28,000'
    },
    'painting': {
        title: 'Professional Painting Services',
        description: 'Expert painting services for residential and commercial spaces',
        icon: 'fas fa-paint-roller',
        features: [
            'Interior & Exterior Painting',
            'Wall Texturing',
            'Color Matching',
            'Surface Preparation',
            'Quality Finishes',
            'Professional Techniques'
        ],
        pricing: [
            { plan: 'Basic', price: 'Rs. 15,000', features: ['Initial Consultation', 'Surface Preparation', 'Basic Painting', 'Quality Check'] },
            { plan: 'Standard', price: 'Rs. 25,000', features: ['Everything in Basic', 'Premium Paints', 'Texturing Options', 'Color Consultation', 'Project Management'] },
            { plan: 'Premium', price: 'Rs. 40,000', features: ['Everything in Standard', 'Custom Finishes', 'Artistic Painting', 'Full Implementation', '1 Year Warranty'] }
        ]
    },
    'restoration': {
        title: 'Restoration Services',
        description: 'Restore and preserve the beauty of your property',
        icon: 'fas fa-hammer',
        features: [
            'Furniture Restoration',
            'Wall & Ceiling Repairs',
            'Floor Restoration',
            'Heritage Conservation',
            'Damage Assessment',
            'Quality Restoration'
        ],
        pricing: [
            { plan: 'Basic', price: 'Rs. 20,000', features: ['Initial Assessment', 'Basic Repairs', 'Surface Restoration', 'Quality Check'] },
            { plan: 'Standard', price: 'Rs. 35,000', features: ['Everything in Basic', 'Advanced Techniques', 'Material Matching', 'Project Management', '6 Months Support'] },
            { plan: 'Premium', price: 'Rs. 55,000', features: ['Everything in Standard', 'Heritage Techniques', 'Custom Solutions', 'Full Restoration', '1 Year Support'] }
        ]
    }
};

// Service provider redirect URLs
const serviceProviders = {
    'interior-design': {
        'ceiling-lighting': '/providers/interior-design/ceiling-lighting',
        'space-planning': '/providers/interior-design/space-planning',
        'modular-kitchen': '/providers/interior-design/modular-kitchen',
        'bathroom-design': '/providers/interior-design/bathroom-design',
        'carpentry-woodwork': '/providers/interior-design/carpentry-woodwork',
        'furniture-design': '/providers/interior-design/furniture-design',
        'consultation': '/providers/interior-design/consultation',
        'complete-package': '/providers/interior-design/complete-package'
    },
    'painting': {
        'interior-painting': '/providers/painting/interior-painting',
        'exterior-painting': '/providers/painting/exterior-painting',
        'water-proofing': '/providers/painting/water-proofing',
        'commercial-painting': '/providers/painting/commercial-painting',
        'wall-art': '/providers/painting/wall-art',
        'consultation': '/providers/painting/consultation',
        'complete-package': '/providers/painting/complete-package'
    },
    'restoration': {
        'wall-repairs': '/providers/restoration/wall-repairs',
        'floor-replacement': '/providers/restoration/floor-replacement',
        'space-transformation': '/providers/restoration/space-transformation',
        'carpentry-repairs': '/providers/restoration/carpentry-repairs',
        'renovation': '/providers/restoration/renovation',
        'complete-package': '/providers/restoration/complete-package'
    }
};

// Redirect function for service providers
function redirectToProviders(serviceType, category = null) {
    if (serviceType && category && category !== 'complete-package') {
        // For individual categories, pass category name as query param
        let categoryName = '';
        if (serviceType === 'interior-design') {
            if (category === 'ceiling-lighting') categoryName = 'Lighting Installation';
            else if (category === 'space-planning') categoryName = 'Interior Design';
            else if (category === 'modular-kitchen') categoryName = 'Kitchen Remodeling';
            else if (category === 'bathroom-design') categoryName = 'Bathroom Renovation';
            else if (category === 'carpentry-woodwork') categoryName = 'Furniture Upholstery';
            else if (category === 'furniture-design') categoryName = 'Furniture Upholstery';
            else if (category === 'consultation') categoryName = 'Interior Design';
        } else if (serviceType === 'painting') {
            categoryName = 'Painting Services';
        } else if (serviceType === 'restoration') {
            if (category === 'wall-repairs' || category === 'floor-replacement' || category === 'space-transformation' || category === 'carpentry-repairs' || category === 'renovation') {
                categoryName = 'Wall Finishing';
            }
        }
        window.location.href = `service-provider.html?category=${encodeURIComponent(categoryName)}`;
    } else if (serviceType && category === 'complete-package') {
        // For complete package, show all providers for the service type
        window.location.href = `service-provider.html?service=${encodeURIComponent(serviceType)}&package=1`;
    }
}

// Add smooth animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate service cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects for service cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .service-card, .feature-card, .step {
        opacity: 0;
        transform: translateY(30px);
    }

    .service-card.animate-in, .feature-card.animate-in, .step.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .notification-content i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);

// JS to make 'Get Service' link green when clicked
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.get-service-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Remove 'clicked' from all
      document.querySelectorAll('.get-service-link').forEach(function(l) {
        l.classList.remove('clicked');
      });
      // Add to this one
      this.classList.add('clicked');
    });
  });
}); 