from alchemyClasses import db
from datetime import datetime, date
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship

class Torneo(db.Model):

    __tablename__ = 'torneo'
    idTorneo = Column(Integer, primary_key=True)
    numParticipantes = Column(Integer)
    juego = Column(String(50))    
    fechaInicio = Column(DateTime)
    fechaFin = Column(DateTime)
    nombreTorneo = Column(String(50))
    consola = Column(String(30))
    correo = Column(String(50))
    reglas = relationship("Reglas", back_populates="torneo")

    def __init__(self, numParticipantes, juego, fechaInicio, fechaFin, 
                 idTorneo, nombreTorneo, consola, nombreUsuario):
        if(fechaInicio != ''):
            fechaInit = datetime.strptime(fechaInicio, '%Y-%m-%d').date()
        else:
            fechaInit = date.today()
        if(fechaFin != ''):
            fechaEnd = datetime.strptime(fechaFin, '%Y-%m-%d').date()
        else:
            fechaEnd = date.today()
        self.numParticipantes=numParticipantes
        self.juego=juego
        self.fechaInicio=fechaInit
        self.fechaFin=fechaEnd
        self.idTorneo=idTorneo
        self.nombreTorneo=nombreTorneo
        self.consola=consola
        self.nombreUsuario=nombreUsuario

    
    def __str__(self):
        return f'Num Participantes: {self.numParticipantes}\nJuego: {self.juego} 
            \nFecha inicio: {self.fechaInicio} \nFecha fin: {self.fechaFin} 
            \nID torneo: {self.idTorneo} \nNombre torneo: {self.nombreTorneo} 
            \nConsola: {self.consola} \nNombre usuario: {self.nombreUsuario}'