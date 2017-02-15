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
			  },
			  terms : {
				  description : "By signing up, you agree to our",
				  descriptionlinkTerm : "Terms ",
				  conj: "&"
			  },
			  privacy : {
				   description : "Privacy Policy"
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
			 },
			 terms : {
				  description : "Ao cadastrar-se, você concorda com nossos",
				  descriptionlinkTerm : "Termos ",
				  conj: "e"
			 },
			 privacy : {
				   description : "Política de Privacidade"
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
	
	 var lang2 = new LocalizedStrings({
		  en: {
			  test: 'welcome'
		  },
		  pt : {
			  test: 'ola'
		  }
		 
	 });
    lang2.setLanguage('en');

export default {
    lang :  lang,
    lang2 :  lang2
};
