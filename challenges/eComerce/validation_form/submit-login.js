const login = document.getElementById('login');
const loginFail = document.getElementById('login-failed');

login.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'email@mail.com' && password === 'password') {
    // inicio de sesión exitoso
    console.log('Inicio de sesión exitoso');
    window.location.href = '../navigation/productos.html';
  } else {
    // inicio de sesión fallido
    console.log('Inicio de sesión fallido');
    loginFail.style.display = 'flex';
  }
});
