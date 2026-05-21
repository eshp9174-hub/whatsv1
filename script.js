function nextStep(id){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // sempre que entrar no quiz, reseta para primeira pergunta
  if (id === "step3") {
    showQuiz("q1");
  }
}

function showQuiz(id){
  document.querySelectorAll('.quiz').forEach(q => q.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

function nextQ(nextId){
  showQuiz(nextId);
}

function finishQuiz(){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

  const result = document.getElementById('step4');
  if (result) result.classList.add('active');
}
