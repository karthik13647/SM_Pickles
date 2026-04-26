document.addEventListener("DOMContentLoaded", function() {
  // === GRAPH CONTAINER TOGGLE (only if graph container exists) ===
  const graphContainer = document.getElementById('graphs');
  if (graphContainer) {
    graphContainer.addEventListener('click', function() {
      graphContainer.classList.toggle('expanded');
    });
  }

  // === MOBILE NAV TOGGLE ===
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const body = document.body;

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      body.classList.toggle('mobile-nav-active');
    });
  }

  // === SECTION TOGGLING (show/hide sections) ===
  const navLinks = document.querySelectorAll('#navmenu ul li a');
  const sections = document.querySelectorAll('.section');

  /**
   * Hides all sections, then shows the targeted section by ID
   */
  function showSection(sectionId) {
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add('active');
    }
  }

  // Listen for nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Prevent anchor jump
      // Deactivate all nav links
      navLinks.forEach(l => l.classList.remove('active'));
      // Activate the clicked link
      link.classList.add('active');

      // Show corresponding section
      const sectionId = link.getAttribute('data-section');
      showSection(sectionId);

      // Close mobile nav if open
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
      }
    });
  });

  // === LIGHT/DARK THEME TOGGLE ===
  const themeIcon = document.querySelector('.bi-sun'); // or .bi-moon
  if (themeIcon) {
    themeIcon.addEventListener('click', () => {
      // Toggle dark-mode class on body
      body.classList.toggle('dark-mode');
      
      // Swap icon between sun and moon
      if (themeIcon.classList.contains('bi-sun')) {
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon');
      } else {
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-sun');
      }
    });
  }

  // === PROFILE DROPDOWN TOGGLE ===
  const profileImage = document.querySelector('.profile-dropdown-toggle'); 
  const profileDropdown = document.querySelector('.profile-dropdown-menu'); 
  if (profileImage && profileDropdown) {
    // Toggle dropdown on avatar click
    profileImage.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling
      profileDropdown.classList.toggle('show');
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', (e) => {
      if (!profileDropdown.contains(e.target) && e.target !== profileImage) {
        profileDropdown.classList.remove('show');
      }
    });
  }
});
    // Function to open PDF in a popup modal
    function openPdfPopup(pdfUrl) {
      document.getElementById('pdfFrame').src = pdfUrl;
      var pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
      pdfModal.show();
    }
    
    // Profile picture handling
    function loadProfilePicture() {
      const savedImage = localStorage.getItem('profile-picture');
      if (savedImage) {
        const profilePics = document.querySelectorAll('.profile-pic-same');
        profilePics.forEach(img => {
          img.src = savedImage;
        });
      }
    }
    window.onload = loadProfilePicture;
    
    document.getElementById('profile-photo-upload').addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const profilePics = document.querySelectorAll('.profile-pic-same');
          profilePics.forEach(img => {
            img.src = e.target.result;
          });
          localStorage.setItem('profile-picture', e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
    
    const profilePicElements = document.querySelectorAll('.profile-pic-same');
    profilePicElements.forEach(element => {
      element.addEventListener('click', function () {
        document.getElementById('profile-photo-upload').click();
      });
    });

/**
 * Hides all sections, then shows the targeted section by ID
 */
function showSection(sectionId) {
  sections.forEach(sec => sec.classList.remove('active')); // Hide all sections
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active'); // Show only the targeted section
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const anchor = "{{ anchor|default('') }}";
  if (anchor === "history") {
    // e.g., scroll into view
    const historySection = document.getElementById("history");
    if (historySection) {
      historySection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

function showPDFModal(examId) {
  const modal = document.getElementById("pdfModal");
  const iframe = document.getElementById("pdfFrame");
  iframe.src = `/history/view/${examId}`;
  modal.style.display = "block";
}

function closePDFModal() {
  const modal = document.getElementById("pdfModal");
  modal.style.display = "none";
  document.getElementById("pdfFrame").src = ""; // Clear the iframe src
}
// Listen for nav link clicks
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent anchor jump
    // Deactivate all nav links
    navLinks.forEach(l => l.classList.remove('active'));
    // Activate the clicked link
    link.classList.add('active');

    // Show corresponding section
    const sectionId = link.getAttribute('data-section');
    showSection(sectionId);

    // Close mobile nav if open
    if (body.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active');
    }
  });
});
