package com.sqli.formation.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sqli.formation.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long>{

}
