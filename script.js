function nextStep(id){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if(id === "step3"){
    showQuiz("q1");
  }
}

function showQuiz(id){
  document.querySelectorAll('.quiz').forEach(q => q.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function nextQ(id){
  showQuiz(id);
}

function finishQuiz(){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step4').classList.add('active');
}
