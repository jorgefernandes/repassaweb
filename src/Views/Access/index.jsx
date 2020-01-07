import React from "react";
import LogoResenha from '../../Assets/Images/logo_resenha_app_HORIZONTAL@2x.png'

const Access = () => (
    <div className="access-view-wrapper">
        <div className="access-view-wrapper__wrapper access-view-wrapper__wrapper--flex">
            <div>
                <h1 className="logo-resenha">
                    <img src={LogoResenha} width="216" height="74" title="Resenha" alt="logo Resenha" />
                </h1>
                <div className="form-label form-label--center form-label--marginbottom26">Escolha um tipo de acesso:</div>
                <div className="wrap-buttons">
                    <button class="default-button default-button--mariner">Administrador</button>
                    <button class="default-button default-button--alto">Laboratórios</button>
                </div>
            </div>
        </div>
        <div className="access-view-wrapper__wrapper">
            <div className="contain-image"></div>
        </div>
    </div>
)

export default Access;
