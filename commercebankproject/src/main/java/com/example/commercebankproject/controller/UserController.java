package com.example.commercebankproject.controller;

import com.example.commercebankproject.domain.Account;
import com.example.commercebankproject.domain.Login;
import com.example.commercebankproject.domain.User;
import com.example.commercebankproject.repository.AccountRepository;
import com.example.commercebankproject.repository.UserRepository;
import com.example.commercebankproject.service.SecurityService;
import com.example.commercebankproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/jpa")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AccountRepository accountRepository;


    @Autowired
    private SecurityService securityService;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }


    @GetMapping("/users/{id}")
    public ResponseEntity<User> createUser(@PathVariable int id){
        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent()){
            throw new UserNotFoundException(String.format("ID[%d] not found", id));
        }

        return new ResponseEntity(user, HttpStatus.OK);

    }


//    @CrossOrigin
//    @GetMapping("/admin")
//    public ResponseEntity<?> find(@PathVariable Integer admin){
//        return new ResponseEntity<>(UserService.find(admin), HttpStatus.OK);
//    }

    //    public ResponseEntity<Object> validateUserLogin(@RequestBody Login login) {
    @PostMapping(path = "/signin")
    @CrossOrigin
    public ResponseEntity<Map<String,Object>> validateUserLogin(@RequestBody Login login) {
        System.out.println("Login Server TEST");
        System.out.println(login.getEmail());
        System.out.println(login.getPassword());



        //System.out.println("token: "+token);
        //System.out.println("validation " + userService.validateUserLogin(login));


        if (userService.validateUserLogin(login)) {

            Optional<Account> account= accountRepository.findById(login.getEmail());

            System.out.println("Admin "+ account.get().getAdmin());

            String token = securityService.createToken(login.getEmail(),(1*1000*10));
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("token", token);
            map.put("admin",account.get().getAdmin());


            return ResponseEntity.status(200).body(map);
        }

        return ResponseEntity.status(400).body(null);

    }

}