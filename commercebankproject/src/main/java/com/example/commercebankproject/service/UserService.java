package com.example.commercebankproject.service;

import com.example.commercebankproject.domain.Account;
import com.example.commercebankproject.domain.License;
import com.example.commercebankproject.domain.Login;
import com.example.commercebankproject.domain.User;
import com.example.commercebankproject.repository.AccountRepository;
import com.example.commercebankproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountRepository accountRepository;

    public boolean validateUserLogin(Login login) {

        System.out.println("login pass " + login.getEmail());
        System.out.println("login pass " + login.getPassword());

        Optional<Account> account = accountRepository.findById(login.getEmail());


        System.out.println("login pass " + login.getPassword());
        System.out.println("database pass " + account.get().getPassword());

        if (!account.isPresent()) {
            return false;
        }


        return login.getPassword().equals(account.get().getPassword());
    }

//    @Transactional(readOnly = true)
//    public static Account find(Integer admin) {
//        Account adminEntity = accountRepository.findById(admin).orElseThrow(() -> new IllegalArgumentException("not admin"));
//        return adminEntity;
//    }
}