// This script handles GitHub Pages redirection for Angular SPA
(function() {
  // Redirect based on session storage from 404.html
  if (sessionStorage.redirect) {
    // Capture the URL that led to 404
    const savedPath = sessionStorage.redirect;
    // Clear it
    delete sessionStorage.redirect;
    // And redirect to the intended page
    if (savedPath !== window.location.pathname) {
      window.history.replaceState(null, null, savedPath);
    }
  }
})(); 