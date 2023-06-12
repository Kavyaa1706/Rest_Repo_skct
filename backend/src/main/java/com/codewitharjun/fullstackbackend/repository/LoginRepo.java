package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface LoginRepo extends JpaRepository<Login,Integer> {

    public List<Login> findByUsernameAndPassword(String username, String password);
}
