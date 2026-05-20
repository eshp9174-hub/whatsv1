const nextButtons = document.querySelectorAll('[data-next]');

nextButtons.forEach(button => {

  button.addEventListener('click', () => {

    const current = button.closest('.step');
    const nextId = button.dataset.next;

    current.classList.remove('active');

    document
      .getElementById(nextId)
      .classList.add('active');

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });

  });

});

/* PHONE MASK */

const phoneInput = document.getElementById('phone');

if(phoneInput){

  phoneInput.addEventListener('input', e => {

    let value = e.target.value.replace(/\D/g,'');

    value = value.replace(/^(\d{2})(\d)/g,'($1) $2');
    value = value.replace(/(\d{5})(\d)/,'$1-$2');

    e.target.value = value.substring(0,15);

  });

}

/* SIMULAÇÃO */

const consultarBtn = document.getElementById('consultarBtn');

if(consultarBtn){

  consultarBtn.addEventListener('click', () => {

    const loader = document.getElementById('loaderArea');
    const resultado = document.getElementById('resultadoBox');
    const nextArea = document.getElementById('nextStepArea');

    consultarBtn.disabled = true;

    loader.style.display = 'block';

    setTimeout(() => {

      loader.style.display = 'none';

      resultado.style.display = 'block';

      nextArea.style.display = 'block';

      consultarBtn.disabled = false;

    },2500);

  });

}

/* FINAL */

const finalBtn = document.getElementById('finalBtn');

if(finalBtn){

  finalBtn.addEventListener('click', () => {

    window.location.href =
    'https://SEU-CHECKOUT.com';

  });

}
