const themeButtonLink = document.querySelector(".theme-container");
const navbar = document.querySelector(".navbar");
//Changes theme by changing body class to dark/light. (saving it to localstorage)
changeTheme = () => {
  themeButtonLink.classList.toggle("dark-theme-button");
  document.body.className = themeButtonLink.classList.contains(
    "dark-theme-button"
  )
    ? "dark"
    : "light";

  localStorage.setItem(
    "theme",
    document.body.className === "dark" ? "dark" : "light"
  );
};

//Checks the localstorage at start and sets the body to dark/light
startFunction = () => {
  if (localStorage.getItem("theme") === "dark") {
    themeButtonLink.classList.toggle("dark-theme-button");
    document.body.className = "dark";
  } else if (localStorage.getItem("theme") === "light") {
    document.body.className = "light";
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.className = "dark";
      themeButtonLink.classList.toggle("dark-theme-button");
    } else {
      document.body.className = "light";
    }
  }

  // document.querySelector("header").remove();
};

triggerMobileNavbar = () => {
  navbar.classList.toggle("mobile-navbar");
};

submitSubscription = () => {
  alert("Thank you for subscribing for our newsletter :)");
};
