import React from "react";
import {useEffect, useState} from "react";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();


export function useAuthentication(){
	
	const [authenticated, setAuthenticated] = useState('carregando');
	
	function login(){
		//ATRIBUINDO VALOR AO LOGIN ATRAVÉS DA AUTH
		auth.signInWithPopup(provider);
		
	}
	
	function logout(){
		
		auth.signOut().then(function() {
	// Sign-out successful.
	}).catch(function(error) {
	// An error happened.
});
	
	}
	
	useEffect(() => {
		
		auth.onAuthStateChanged(function(user){
			if(user){setAuthenticated(user)} //atribuindo valor ao "user"
			else {
				setAuthenticated();
			}
			
			
		}, function(error){
			
			console.log(error);
	
	
	});
	}, []);
	//RETORNANDO ESSE VALOR
return {login, logout, logado: authenticated};
	
};