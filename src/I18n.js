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
            user : "Nome de usuário",
            password : "Password",
            email : "Phone or email",
            sign  : "sign in"
          }
        },
        pt : {
          index : {
            choice:"Come scegliere luovo"
         },
         formLogin : {
           name  : "Nome completo",
           user  : "User name",
           password : "Senha",
           email : "Número do celular ou email",
           sign  : "Entrar"
         }
       }
    });
}

getTranslater(name, name2) {
    return  this.lang[name][name2];
 }

}
export default I18n;
