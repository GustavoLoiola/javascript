    const form = document.getElementById('registerForm');
    const banner = document.getElementById('formBanner');
    const strengthFill = document.getElementById('strengthFill');

    const rules = {
      nome: {
        validate: (v) => v.trim().length >= 3,
        message: 'Informe pelo menos 3 caracteres.'
      },
      email: {
        validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
        message: 'Informe um e-mail válido (precisa conter @ e domínio).'
      },
      telefone: {
        validate: (v) => v.trim() === '' || /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(v.trim()),
        message: 'Informe um telefone válido, ex.: (11) 91234-5678.'
      },
      senha: {
        validate: (v) => v.length >= 6,
        message: 'A senha deve ter no mínimo 6 caracteres.'
      },
      confirmarSenha: {
        validate: (v) => v.length > 0 && v === document.getElementById('senha').value,
        message: 'As senhas não são idênticas.'
      }
    };

    function setFieldState(name, isValid, isEmpty) {
      const fieldEl = form.querySelector(`[data-field="${name}"]`);
      const errorEl = fieldEl.querySelector('.error-msg');

      fieldEl.classList.remove('valid', 'invalid');

      if (isEmpty) {
        errorEl.textContent = '';
        return;
      }

      if (isValid) {
        fieldEl.classList.add('valid');
        errorEl.textContent = '';
      } else {
        fieldEl.classList.add('invalid');
        errorEl.textContent = rules[name].message;
      }
    }

    function validateField(name) {
      const input = document.getElementById(name);
      const value = input.value;
      const isOptionalAndEmpty = name === 'telefone' && value.trim() === '';
      const isEmpty = value.trim() === '' && name !== 'telefone';

      if (isOptionalAndEmpty) {
        setFieldState(name, true, true);
        return true;
      }

      const isValid = rules[name].validate(value);
      setFieldState(name, isValid, isEmpty && document.activeElement !== input);
      return isValid;
    }

    function updateStrength() {
      const value = document.getElementById('senha').value;
      let score = 0;
      if (value.length >= 6) score++;
      if (value.length >= 10) score++;
      if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
      if (/[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value)) score++;

      const colors = ['#DCE3E0', '#B3452F', '#C98A3A', '#4C8C6F', '#1F6F5C'];
      const widths = [0, 25, 50, 75, 100];

      strengthFill.style.width = widths[score] + '%';
      strengthFill.style.background = colors[score];
    }

    ['nome', 'email', 'telefone', 'senha', 'confirmarSenha'].forEach((name) => {
      const input = document.getElementById(name);
      input.addEventListener('input', () => {
        validateField(name);
        if (name === 'senha') {
          updateStrength();
          // revalida a confirmação sempre que a senha original mudar
          if (document.getElementById('confirmarSenha').value) {
            validateField('confirmarSenha');
          }
        }
      });
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

      const fieldNames = ['nome', 'email', 'telefone', 'senha', 'confirmarSenha'];
      const results = fieldNames.map((name) => validateField(name));
      const allValid = results.every(Boolean);

      banner.classList.remove('show', 'success', 'error');

      if (!allValid) {
        banner.textContent = 'Corrija os campos destacados antes de continuar.';
        banner.classList.add('show', 'error');
        return;
      }

      const payload = {
        username: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        telefone: document.getElementById('telefone').value.trim() || null,
        password: document.getElementById('senha').value
      };


      banner.textContent = 'Conta criada com sucesso!';
      banner.classList.add('show', 'success');
      console.log('Dados válidos prontos para envio:', payload);
    });