package com.codewitharjun.fullstackbackend.Service;

import com.codewitharjun.fullstackbackend.model.Login;
import com.codewitharjun.fullstackbackend.repository.LoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoginService {

    @Autowired
    public LoginRepo lr;

    public List<Login> getLoginData(String username, String password) {

        return lr.findByUsernameAndPassword(username,password);


    }
}
