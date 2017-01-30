import LocalizedStrings from 'react-localization';

 const lang = new LocalizedStrings(
    {
        en : {
          index : {
            
          },
          formLogin : {
            name : "Full name",
            user : "User name",
            password : "Password",
            email : "Phone or email",
            signup  : "sign in",
			signupFacebook :"Log in with Facebook"
          }
        },
        pt : {
          index : {
           
         },
         formLogin : {
           name     : "Nome completo",
           user     : "Nome de usuário",
           password : "Senha",
           email    : "Número do celular ou email",
           signup     : "Cadastre-se",
		   signupFacebook :"      Entrar com o Facebook"
         }
       }
    });


export default {
    lang :  lang
};
