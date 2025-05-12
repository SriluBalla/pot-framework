// scripts/seo.js

function insertSEO({
    title = "Product Owner in Test™",
    description = "Redefining software quality through deep product understanding.",
    image = "https://sriluballa.github.io/pot-framework/images/og-preview.jpg",
    url = window.location.href
  } = {}) {
    const head = document.head;
  
    // Basic Meta Tags
    document.title = title;
    head.insertAdjacentHTML("beforeend", `
      <meta name="description" content="${description}">
      <meta name="keywords" content="Product Owner in Test, QA, exploratory testing, check cases, product quality, Srilu Balla">
      <meta name="author" content="Srilu Balla">
  
      <!-- Open Graph -->
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${image}">
      <meta property="og:url" content="${url}">
      <meta property="og:type" content="website">
  
      <!-- Twitter -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${description}">
      <meta name="twitter:image" content="${image}">
    `);
  }
  
  // Export if using modules (optional)
  window.insertSEO = insertSEO;
  