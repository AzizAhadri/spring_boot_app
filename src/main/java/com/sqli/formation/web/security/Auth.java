package com.sqli.formation.web.security;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class Auth {
	@RequestMapping("/auth")
	  public Principal auth(Principal user) {
		System.out.println(user);
	    return user;
	  }
}
