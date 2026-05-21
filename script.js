function nextStep(id){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

  const el = document.getElementById(id);
  if(el) el.classList.add('active');

  if(id === "step3"){
    showQuiz("q1");
  }
}

function showQuiz(id){
  document.querySelectorAll('.quiz').forEach(q => q.classList.remove('active'));

  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

function nextQ(id){
  showQuiz(id);
}

function finishQuiz(){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

  const el = document.getElementById('step4');
  if(el) el.classList.add('active');
}
