package com.example.commercebankproject.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Login {
    private String email;
    private String password;

}