function nextStep(id){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function nextQ(nextId){
  document.querySelectorAll('.quiz').forEach(q => q.classList.remove('active'));
  document.getElementById(nextId).classList.add('active');
}

function finishQuiz(){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step4').classList.add('active');
}
