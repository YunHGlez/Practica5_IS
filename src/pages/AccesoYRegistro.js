import React, { useEffect } from "react";
import '../assets/styles/pages/AccesoYRegistro.css';
import Panel from "../components/Panel";
import Avatar from '../assets/images/avatar.gif'
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material"; 

const AccessoYRegistro = () => {
    useEffect(() => { // Realiza el efecto de la transicion entre el login y el registro
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('sign_in_and_sign_up_container');
    
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }, []);
    return (
        <main className="container_main_si_su">
            <div className="container-si-su" id="sign_in_and_sign_up_container">
                <div className="form-container sign-up-container">
                    <form action="#" className="form-container-data">
                        <h1>Crear Cuenta</h1>
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="name">Nombre</InputLabel>
                                <Input id="name" type="text" aria-describedby="name-helper" />
                                <FormHelperText id="name-helper">Escribe tu nombre completo.</FormHelperText>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="emaill" type="email" aria-describedby="email-helperr" />
                                <FormHelperText id="email-helperr">Escribe tu dirección de Correo Electrónico.</FormHelperText>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <Input id="passwordd" type="password" aria-describedby="password-helperr" />
                                <FormHelperText id="password-helperr">Escribe tu contraseña</FormHelperText>
                            </FormControl>
                        </div>
                        <button className="button-access">Crear Cuenta</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" className="form-container-data">
                        <img src={Avatar} alt="Avatar" className="avatar" />
                        <h1>Iniciar Sesión</h1>
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="email" required aria-describedby="email-helper" />
                                <FormHelperText id="email-helper">Ingresa tu dirección de Correo Electrónico.</FormHelperText>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <Input id="password" type="password" required aria-describedby="password-helper" />
                                <FormHelperText id="password-helper">Ingresa tu contraseña.</FormHelperText>
                            </FormControl>
                        </div>
                        <button className="button-access">Iniciar Sesión</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <Panel 
                            typePanel="overlay-left"
                            title="Bienvenido de Regreso!"
                            description="Mantente conectado con nosotros. Inicia Sesión con tú información personal."
                            idButton="signIn"
                            button="Iniciar Sesión"
                        />
                        <Panel 
                            typePanel="overlay-right"
                            title="Hola, amigo!"
                            description="Ingrese sus datos personales y comience el viaje con nosotros."
                            idButton="signUp"
                            button="Crear Cuenta"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AccessoYRegistro;
