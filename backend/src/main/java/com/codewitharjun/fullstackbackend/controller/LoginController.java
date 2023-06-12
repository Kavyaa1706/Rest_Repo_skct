package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.Service.LoginService;
import com.codewitharjun.fullstackbackend.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class LoginController {
    @Autowired
    public LoginService l;

    @GetMapping("/Login/{username}/{password}")
    public String getlogin(@PathVariable String username, @PathVariable String password)
    {
        List<Login> le = new ArrayList<>();
        le = l.getLoginData(username, password);

        if(!le.isEmpty()) {
            return "Login Successfull";
        }
        else {
            return "Login Failed";
        }

    }
}

