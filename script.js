function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function validateForm() {
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const classSelect = document.getElementById("class")?.value;
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !classSelect || !message) {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  alert("🎓 Application submitted successfully!");
  return true;
}

// DARK MODE
const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkModeToggle.textContent = isDark ? "☀️" : "🌙";
  });
}


// PRELOADER
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 1200); // allows animation to finish smoothly
});



// PRELOADER with glowing tagline
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const typingText = document.getElementById("typing-text");

  const messages = [
    "Welcome to EduWave School...",
    "Inspiring Minds 💡"
  ];

  let messageIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < messages[messageIndex].length) {
      typingText.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 80);
    } else {
      if (messageIndex < messages.length - 1) {
        // Pause before second line
        setTimeout(() => {
          typingText.textContent = "";
          messageIndex++;
          charIndex = 0;
          type();
        }, 800);
      } else {
        // Add glowing animation to tagline
        typingText.classList.add("glow");

        // Fade out after a short delay
        setTimeout(() => {
          preloader.classList.add("hide");
        }, 1500);
      }
    }
  }

  type();
});






function showBooks(subject) {
  let books = [];

  if (subject === "All") {
    // Combine all subjects
    Object.keys(bookSubjects).forEach(sub => {
      books = books.concat(bookSubjects[sub]);
    });
  } else {
    books = bookSubjects[subject] || [];
  }

  // Build slider items
  bookSlider.innerHTML = books.map(b => `
    <div class="slide" data-id="${b.id}">
      <img src="${b.img}" alt="${escapeHtml(b.title)}" />
      <h4>${escapeHtml(b.title)}</h4>
      <p>${escapeHtml(b.desc)}</p>
      <div class="price">₦${b.price.toLocaleString()}</div>
      <div style="margin-top:auto;display:flex;gap:8px">
        <button class="btn small" onclick="openBuy('${b.id}')">Buy</button>
        <button class="btn small ghost" onclick="quickPreview('${b.id}')">Preview</button>
      </div>
    </div>
  `).join('');

  // Reinitialize slider navigation
  sliderControl(bookSlider, document.getElementById('bookPrev'), document.getElementById('bookNext'));
}
showBooks('all');



bookSlider.style.opacity = "0";
setTimeout(() => {
  bookSlider.style.transition = "opacity 0.4s ease";
  bookSlider.style.opacity = "1";
}, 50);


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
