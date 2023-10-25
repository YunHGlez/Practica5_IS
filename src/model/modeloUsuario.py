from classes.Usuario import Usuario
from classes import db
from sqlalchemy import update, delete
from hashlib import sha256
from CryptoUtils.CryptoUtils import cipher

def get_all_users():
    return Usuario.query.all()

def get_user_by_key(correo=''):
    return Usuario.query.filter(Usuario.correo == correo).first()

def search_user(nombre='', correo='', contraseña=''):
    if(nombre == '' and correo == '' and contraseña == ''):
        return get_all_users()
    filter_data = {'correo': ''}
    if(nombre != ''):
        filter_data['nombre'] = nombre
    if(contraseña == ''):
        del filter_data['contraseña']
    if(correo == ''):
        del filter_data['correo']
    else:
        filter_data['correo'] = correo
    return Usuario.query.filter_by(**filter_data)
    

def add_user(nombre='', correo='', contraseña=''):
    if(nombre == ''):
        print("Nombre inválido")
        return None
    if(correo == ''):
        print("correo inválido")
        return None
    if(contraseña == ''):
        print("contraseña inválida")
        return None
    consult = Usuario.query.filter(Usuario.correo == correo)
    if(consult.count() > 0):
        print("Ya hay un usuario registrado con ese correo")
        return None
    usuario = Usuario(nombre, correo, contraseña)
    db.session.add(usuario)
    db.session.commit()
    return usuario

def update_user(correo='', nombre='', nuevoNombre='', nuevoCorreo='', passwd=''):
    usuario = None
    if(correo != '' or nombre != ''):
        usuario = search_user(nombre, correo, '').first()
    if(usuario != None):
        if(nuevoCorreo == '' and nuevoNombre == '' and passwd == ''):
            return usuario
        if(nuevoCorreo != ''):
            if(get_user_by_key(nuevoCorreo) != None):
                return None
            usuario.correo = nuevoCorreo
        if(nuevoNombre != ''):
            usuario.nombre = nuevoNombre
        if(passwd != ''):
            contraseña = sha256(cipher(passwd)).hexdigest()
            usuario.contraseña = contraseña
        try:
            db.session.commit()
        except:
            return None
    else:
        return None
    return usuario

def delete_user(correo):
    usuario = get_user_by_key(correo)
    if(usuario != None):
        consult = Usuario.query.filter(Usuario.correo == correo)
        datos = str(consult.first())
        consult.delete(synchronize_session=False)
        db.session.commit()
        return datos
    else:
        return None


    