package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.Service.SignupService;
import com.codewitharjun.fullstackbackend.model.Signup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class SignupController {
    @Autowired
    private SignupService ss;

    @PostMapping("/signup")
    public String createAcc(@RequestBody Signup s)
    {
        ss.createacc(s);
        return "Account Created...";
    }

}
