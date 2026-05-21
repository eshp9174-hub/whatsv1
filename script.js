document.addEventListener("DOMContentLoaded", () => {
  const stepsOrder = ["step1", "step2", "step3", "step4", "step5"];

  window.nextStep = function(id){
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  };

  // QUIZ FLOW (respostas levam pra próxima pergunta dentro do step3)
  const quizSteps = document.querySelectorAll(".opt");

  quizSteps.forEach(opt => {
    opt.addEventListener("click", () => {
      const current = document.getElementById("step3");
      const next = document.getElementById("step4");

      current.classList.remove("active");
      next.classList.add("active");
    });
  });
});
