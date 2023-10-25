from alchemyClasses import db
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

class Usuario(db.Model):
    __tablename__ = 'usuario'
    nombre = Column(String(40))
    correo = Column(Integer, String(50), primary_key=True)    
    contraseña = Column(String(50))
    reglas = relationship("Reglas", back_populates="usuario")

    def __init__(self, nombre, correo, contraseña):
        self.nombre=nombre
        self.correo=correo
        self.contraseña=contraseña

    
    def __str__(self):
        return f'Nombre: {self.nombre}\nCorreo: {self.correo} 
                \nContraseña: {self.contraseña}'