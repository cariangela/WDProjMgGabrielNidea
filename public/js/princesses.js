const themeMap = {
  Belle: {
    color: '255, 205, 148',
    video: '../assets/videos/belle-login.gif',
    phrase: 'A curious booklover with a brave heart.'
  },
  Ariel: {
    color: '88, 182, 204',
    video: '../assets/videos/ariel-login.gif',
    phrase: 'A dreamy explorer chasing the unknown.'
  },
  Aurora: {
    color: '241, 167, 213',
    video: '../assets/videos/aurora-login.gif',
    phrase: 'A gentle dreamer wrapped in graceful magic.'
  },
  Cinderella: {
    color: '182, 206, 248',
    video: '../assets/videos/cinderella-login.gif',
    phrase: 'A kind spirit with a wish upon a star.'
  },
  Rapunzel: {
    color: '246, 176, 123',
    video: '../assets/videos/rapunzel-login.gif',
    phrase: 'A creative spirit ready to break free.'
  },
  Tiana: {
    color: '98, 170, 97',
    video: '../assets/videos/tiana-login.gif',
    phrase: 'A determined achiever with a green glow of ambition.'
  }
};

const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroGif = document.getElementById('heroGif');
const heroOverlay = document.querySelector('.hero-overlay');

function applyPrincessTheme(princess) {
  const theme = themeMap[princess];
  if (!theme) {
    heroGif.style.display = 'none';
    return;
  }

  heroGif.src = theme.video;
  heroGif.style.display = 'block';
  heroSubtitle.textContent = `${theme.phrase} Based on your personality match.`;
  heroOverlay.style.background = `linear-gradient(180deg, rgba(${theme.color}, 0.24), rgba(8, 12, 20, 0.82))`;
  document.body.style.background = `linear-gradient(180deg, rgba(${theme.color}, 0.14), rgba(235, 245, 239, 0.55))`;
}

function highlightMatchedCard(princess) {
  if (!princess) return;
  const matchedCard = document.getElementById(princess.toLowerCase());
  if (matchedCard) {
    matchedCard.classList.add('active');
    matchedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

const storedUser = localStorage.getItem('userLogin');
if (storedUser) {
  try {
    const user = JSON.parse(storedUser);
    const princess = user.princess;
    if (princess) {
      heroTitle.textContent = `Your matched princess is ${princess}`;
      applyPrincessTheme(princess);
      highlightMatchedCard(princess);
    }
  } catch (error) {
    console.warn('Could not read user login data', error);
  }
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.animationDuration = 3 + Math.random() * 2 + 's';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 5000);
}

setInterval(createSparkle, 600);
