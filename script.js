// script.js

document.addEventListener("DOMContentLoaded", function () {
  const userSelect = document.getElementById("userSelect");
  const passCatracaBtn = document.getElementById("passCatracaBtn");
  const logDiv = document.getElementById("log");
  const confirmSection = document.getElementById("confirmSection");
  const confirmPresenceBtn = document.getElementById("confirmPresenceBtn");
  const cancelPresenceBtn = document.getElementById("cancelPresenceBtn");
  const relatorioDiv = document.getElementById("relatorio");

  // Lista de alunos (simulação de banco de dados)
  const alunos = ["João Silva", "Maria Oliveira", "Carlos Santos", "Ana Souza"];

  // Carregar alunos no select
  alunos.forEach((aluno) => {
    const option = document.createElement("option");
    option.value = aluno;
    option.textContent = aluno;
    userSelect.appendChild(option);
  });

  // Função para obter horário atual formatado
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }

  // Simular passagem na catraca
  passCatracaBtn.addEventListener("click", function () {
    const alunoSelecionado = userSelect.value;
    if (!alunoSelecionado) {
      alert("Selecione um aluno primeiro!");
      return;
    }

    logDiv.innerHTML = `<p><strong>${alunoSelecionado}</strong> passou pela catraca às ${getCurrentTime()}.</p>`;
    confirmSection.classList.remove("hidden");
  });

  // Confirmar presença
  confirmPresenceBtn.addEventListener("click", function () {
    const alunoSelecionado = userSelect.value;
    relatorioDiv.innerHTML += `<p><strong>${alunoSelecionado}</strong> presença confirmada às ${getCurrentTime()}!</p>`;
    confirmSection.classList.add("hidden");
  });

  // Cancelar confirmação de presença
  cancelPresenceBtn.addEventListener("click", function () {
    confirmSection.classList.add("hidden");
  });
});

document.getElementById('loginBtn').addEventListener('click', function () {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  const professores = {
    professor1: 'senha123',
    maria: 'maria2024',
    joao: 'joaoseguro',
    Carlos: 'carlos1234'
  };

  if (!username || !password) {
    message.style.color = 'red';
    message.textContent = 'Por favor, preencha usuário e senha.';
    return;
  }

  if (professores[username] && professores[username] === password) {
    // Login correto
    window.location.href = 'index.html';
  } else {
    message.style.color = 'red';
    message.textContent = 'Usuário ou senha inválidos.';
  }
});
