package com.codewitharjun.fullstackbackend.model;

import javax.persistence.*;

@Entity
@Table(name="user_data")
public class Signup
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int lid;
    private String email;
    private String username;
    private String password;


    public int getLid() {
        return lid;
    }

    public void setLid(int lid) {
        this.lid = lid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
