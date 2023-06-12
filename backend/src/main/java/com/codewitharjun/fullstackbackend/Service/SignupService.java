package com.codewitharjun.fullstackbackend.Service;

import com.codewitharjun.fullstackbackend.model.Signup;
import com.codewitharjun.fullstackbackend.repository.SignupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    @Autowired
    private SignupRepo sr;

    public void createacc(Signup s)
    {
        sr.save(s);
    }

}
