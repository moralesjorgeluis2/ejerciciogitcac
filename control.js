function verify() {
    if (document.getElementById('name').value == '') {
        window.alert('El usuario esta vacio')
    } else if (document.getElementById('name').value.indexOf('@') == -1) {
        window.alert('El usuario Ingresado debe llevar @');
    } else if (document.getElementById('pass').value == '') {
        window.alert('La clave no puede estar vacia');
    }else{
        document.forms['login'].submit();
    }
}