package com.sqli.formation.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sqli.formation.domain.User;
import com.sqli.formation.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class AdminController {
	
	@Autowired
	private UserRepository usersRepository;
	
	@PostMapping("/admin/user/create")
	public User create(@RequestBody User user){
		return usersRepository.save(user);
	}
	
	@GetMapping("/admin/user/list")
	public Iterable<User> readAll(){
		return usersRepository.findAll();
	}
	
	@GetMapping("/admin/user/{id}")
	public User readOne(@PathVariable long id){
		return usersRepository.findOne(id);
	}
	
	@PutMapping("/admin/user/{id}")
	public User updateOne(@RequestBody User user){
		//users.set((int) user.getId(), user);
		return usersRepository.save(user);
	}
	
	@DeleteMapping("/admin/user/{id}")
	public long deleteOne(@PathVariable long id){
		usersRepository.delete(id);
		return id;
	}
	
}
