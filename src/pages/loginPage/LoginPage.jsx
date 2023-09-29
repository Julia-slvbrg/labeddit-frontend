import { useState } from "react"
import labedditLogo from "../../assets/logo-labeddit.svg"
import { Divisor, EmailSection, FormArticle, Header, LoginWrapper, LogoImg, Input, PasswordInput, PasswordSection, VisibilityBtn, LoginBtn, SignupBtn } from "./LoginPageStyle";
;

export const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <LoginWrapper>
            <div className="LogoContainer">
                <LogoImg src={labedditLogo} alt='Labeddit Logo'/>
                <Header>O projeto de rede social da Labenu</Header>
            </div>
            
            <FormArticle>
                <form /* onSubmit={} */>
                    <EmailSection>
                        <Input
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            //value
                            type="email"
                            //onChange={}
                            pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g" //ou ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
                            required
                        />
                    </EmailSection>
                    
                    <PasswordSection>
                        <PasswordInput
                            id="password"
                            name="password"
                            placeholder="Senha"
                            //value
                            type={showPassword? 'text' : 'password'}
                            //onChange={}
                            pattern="/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,10}$/g"                   
                            required
                        />

                        <VisibilityBtn onClick={() => setShowPassword(!showPassword)} >
                            {showPassword? 
                                <i className="fa-regular fa-eye-slash"></i> : 
                                <i className="fa-regular fa-eye"></i>
                            }
                        </VisibilityBtn>
                    </PasswordSection>

                    <LoginBtn>Continuar</LoginBtn>

                    <Divisor></Divisor>

                    <SignupBtn>Crie uma conta!</SignupBtn>
                    
                </form>
            </FormArticle>
        </LoginWrapper>
    )
}

export default LoginPage