package com.codewitharjun.fullstackbackend.model;

import javax.persistence.*;

@Entity
@Table(name="user_data")
public class Login {
    public int getLid() {
        return lid;
    }

    public void setLid(int lid) {
        this.lid = lid;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int lid;



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

    private String username;
    private String password;


}
