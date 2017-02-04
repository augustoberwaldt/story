import LocalizedStrings from 'react-localization';

 let lang = new LocalizedStrings(
    {
        en : {
          home : {
             title : "What is your Story ?"
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
          home : {
			  title : "Qual é a sua história ?"
           
         },
         formLogin : {
           name     : "Nome completo",
           user     : "Nome de usuário",
           password : "Senha",
           email    : "Número do celular ou email",
           signup     : "Cadastre-se",
		   signupFacebook :"      Entrar com o Facebook"
         }
       },
	   es : {
		   home : {
			    title : "What is your Story ?"
		   },
           formLogin : {
             name : "Full name",
             user : "User name",
             password : "Password",
             email : "Phone or email",
             signup  : "sign in",
			 signupFacebook :"Log in with Facebook"
           }
	   }
    });

lang.setLanguage('en');
export default {
    lang :  lang
};
