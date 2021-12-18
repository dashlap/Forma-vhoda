$('#button').on('click', function() {
    let login = $('#text').val();
    let password = $('#password').val();

    if (login == 'admin' && password == 'admin') {
        alert('Вы вошли в аккаунт');
    }
    else {
        alert('Неверный логин или пароль');
    }
});
