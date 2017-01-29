import LocalizedStrings from 'react-localization';
class I18n
{

 constructor()
 {
    this.lang = new LocalizedStrings(
    {
        en : {
          index : {
            choice:"Come scegliere luovo"
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
            choice:"Come scegliere luovo"
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
}

getTranslater(name, name2) {
    return  this.lang[name][name2];
}

}
export default I18n;
