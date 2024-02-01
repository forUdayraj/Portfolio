const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.querySelector("body");

  headerBtn.addEventListener("click", () => {
    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
      body.style.overflow = "auto"; // Restore scrolling
    } else {
      mobileNav.style.display = "flex";
      body.style.overflow = "hidden"; // Disable scrolling
    }
  });
};

export default mobileNav;
