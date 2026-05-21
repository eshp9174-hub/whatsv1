document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".opt");

  options.forEach(opt => {
    opt.addEventListener("click", () => {
      nextStep("step4");
    });
  });
});

function nextStep(id){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
