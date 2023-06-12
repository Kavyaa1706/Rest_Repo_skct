package com.codewitharjun.fullstackbackend.repository;

import com.codewitharjun.fullstackbackend.model.Signup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepo extends JpaRepository<Signup,Integer> {
}
