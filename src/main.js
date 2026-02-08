const colereSection = document.getElementById("section-colere");
if (colereSection) {
  colereSection.addEventListener("mousemove", (e) => {
    const rect = colereSection.getBoundingClientRect();
    colereSection.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  });
}

// Bouton de musique
const boutonColere = document.querySelector("button[data-emotion='colere']");
const boutonDeprime = document.querySelector("button[data-emotion='deprime']");
const boutonSerenite = document.querySelector(
  "button[data-emotion='serenite']",
);

const audioColere = document.getElementById("audio-colere");
const audioDeprime = document.getElementById("audio-deprime");
const audioSerenite = document.getElementById("audio-serenite");

boutonColere.addEventListener("click", function () {
  audioDeprime.pause();
  audioSerenite.pause();
  audioColere.play();
  boutonColere.classList.add("playing");
  boutonDeprime.classList.remove("playing");
  boutonSerenite.classList.remove("playing");
});

boutonDeprime.addEventListener("click", function () {
  audioColere.pause();
  audioSerenite.pause();
  audioDeprime.play();
  boutonDeprime.classList.add("playing");
  boutonColere.classList.remove("playing");
  boutonSerenite.classList.remove("playing");
});

boutonSerenite.addEventListener("click", function () {
  audioColere.pause();
  audioDeprime.pause();
  audioSerenite.play();
  boutonSerenite.classList.add("playing");
  boutonColere.classList.remove("playing");
  boutonDeprime.classList.remove("playing");
});

// Section HaHa
const hahaSection = document.getElementById("section-haha");
if (hahaSection) {
  hahaSection.addEventListener("mousemove", (e) => {
    const rect = hahaSection.getBoundingClientRect();
    hahaSection.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    hahaSection.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  });
}

// Section Insulte
const insulteSection = document.getElementById("section-insulte");
if (insulteSection) {
  insulteSection.addEventListener("mousemove", (e) => {
    const rect = insulteSection.getBoundingClientRect();
    insulteSection.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    insulteSection.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  });
}

// Bouton retour au menu
const backToTopBtn = document.getElementById("backToTopBtn");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
