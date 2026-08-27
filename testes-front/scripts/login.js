const form = document.getElementById('loginForm');
const banner = document.getElementById('formBanner');

const rules = {
    email: {
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    message: 'Informe um e-mail válido (precisa conter @ e domínio).'
    },
    senha: {
    validate: (v) => v.length > 0,
    message: 'Informe sua senha.'
    }
};

function setFieldState(fieldEl, isValid, isEmpty, message) {
    const errorEl = fieldEl.querySelector('.error-msg');
    fieldEl.classList.remove('valid', 'invalid');

    if (isEmpty) {
    errorEl.textContent = '';
    return;
    }

    if (isValid) {
    errorEl.textContent = '';
    } else {
    fieldEl.classList.add('invalid');
    errorEl.textContent = message;
    }
}

function validateField(name) {
    const input = document.getElementById(name);
    const fieldEl = form.querySelector(`[data-field="${name}"]`);
    const value = input.value;
    const isEmpty = value.trim() === '' && document.activeElement !== input;

    const isValid = rules[name].validate(value);
    setFieldState(fieldEl, isValid, isEmpty, rules[name].message);
    return isValid;
}

['email', 'senha'].forEach((name) => {
    const input = document.getElementById(name);
    input.addEventListener('input', () => validateField(name));
    input.addEventListener('blur', () => validateField(name));
});

document.querySelectorAll('.toggle-visibility').forEach((btn) => {
    btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const isPassword = target.type === 'password';
    target.type = isPassword ? 'text' : 'password';
    btn.textContent = isPassword ? 'OCULTAR' : 'MOSTRAR';
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const results = ['email', 'senha'].map((name) => validateField(name));
    const allValid = results.every(Boolean);

    banner.classList.remove('show', 'success', 'error');

    if (!allValid) {
    banner.textContent = 'Corrija os campos destacados antes de continuar.';
    banner.classList.add('show', 'error');
    return;
    }

    const payload = {
    username: document.getElementById('email').value.trim(),
    password: document.getElementById('senha').value
    };

    // Integração com o backend (POST /api/auth/login).
    // Obs.: o AuthController atual espera "username" no LoginRequest, não "email".
    // Se o login deve ser feito por e-mail, ajuste o backend para buscar o
    // usuário por e-mail em vez de username (ou aceite ambos).
    //
    // fetch('http://localhost:8080/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // })
    //   .then((res) => res.json())
    //   .then((data) => { localStorage.setItem('token', data.token); })
    //   .catch((err) => { ... });

    banner.textContent = 'Login realizado com sucesso!';
    banner.classList.add('show', 'success');
    console.log('Dados válidos prontos para envio:', payload);
});

// --- Modal esqueci a senha ---
const forgotBtn = document.getElementById('forgotBtn');
const forgotOverlay = document.getElementById('forgotOverlay');
const forgotCancel = document.getElementById('forgotCancel');
const forgotSend = document.getElementById('forgotSend');
const recoveryInput = document.getElementById('recoveryEmail');
const recoveryField = document.querySelector('[data-field="recoveryEmail"]');

function openModal() {
    forgotOverlay.classList.add('show');
    recoveryInput.value = '';
    recoveryField.classList.remove('invalid');
    recoveryInput.focus();
}

function closeModal() {
    forgotOverlay.classList.remove('show');
}

forgotBtn.addEventListener('click', openModal);
forgotCancel.addEventListener('click', closeModal);

forgotOverlay.addEventListener('click', (e) => {
    if (e.target === forgotOverlay) closeModal();
});

forgotSend.addEventListener('click', () => {
    const value = recoveryInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValid) {
    recoveryField.classList.add('invalid');
    recoveryField.querySelector('.error-msg').textContent = 'Informe um e-mail válido.';
    return;
    }

    // fetch('http://localhost:8080/api/auth/forgot-password', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: value })
    // });

    closeModal();
    banner.textContent = 'Se o e-mail estiver cadastrado, enviamos um link de recuperação.';
    banner.classList.remove('error');
    banner.classList.add('show', 'success');
});
