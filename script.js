document.addEventListener("DOMContentLoaded", function () {
  const flower = document.querySelector(".flower")
  flower.classList.add("bloom")

  // Animation
  const petals = document.querySelectorAll(".petal")
  petals.forEach((petal, index) => {
    setTimeout(() => {
      petal.style.transform = "scale(1)"
    }, index * 300)
  })
})
