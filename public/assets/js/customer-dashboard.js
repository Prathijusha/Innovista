// Set customer name after login (replace with real logic)
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('customerName').textContent = localStorage.getItem('customerName') || 'Customer';
}); 