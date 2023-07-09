
window.onscroll = function() {
    showScrollToTopButton();
  };
  
  function showScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  
  // When the button is clicked, scroll to the top of the document
  document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  