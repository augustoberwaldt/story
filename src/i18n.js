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
				login     : "Entrar",
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
			   login     : "Entrar",
			   signupFacebook :"      Entrar com o Facebook",
			   account : "Tem uma conta ? ",
			   notaccount : "Não tem uma conta ? ",
			   goLogin : "Faça login",
			   goAccount : "Cadastre-se"
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
				login     : "Entrar",
				signupFacebook :"  Log in with Facebook",
				account : "Do you have an account ? ",
				notaccount : "Do not have an account ? ",
				goLogin : "Sign in",
		        goAccount : "Sign up"
			  },
			  terms : {
				  description : "By signing up, you agree to our",
				  descriptionlinkTerm : "Terms ",
				  conj: "&"
			  },
			  privacy : {
				   description : "Privacy Policy"
			  }
	   }
    });
	
    
  lang.setLanguage('es');

export default {
    lang :  lang,
};
