function nextStep(id){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function nextQ(nextId){
  document.querySelectorAll('.quiz').forEach(q => q.classList.add('hidden'));
  document.getElementById(nextId).classList.remove('hidden');
}

function finishQuiz(){
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step4').classList.add('active');
}
