// Scroll to features on CTA click
document.getElementById("tryAppBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});

// Feature buttons
const featureButtons = document.querySelectorAll(".feature-btn");

featureButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const feature = btn.getAttribute("data-feature");

    switch (feature) {
      case "style-advisor":
        alert("👟 Style Advisor coming soon! You'll get AI-powered fashion tips.");
        break;
      case "ar-tryon":
        alert("🕶️ AR Try-On launching in future versions. Stay tuned!");
        break;
      case "hype-fly":
        window.open("https://hypefly.co.in", "_blank");
        break;
      default:
        alert("Feature coming soon!");
    }
  });
});

console.log("Tiger Panje website initialized.");
