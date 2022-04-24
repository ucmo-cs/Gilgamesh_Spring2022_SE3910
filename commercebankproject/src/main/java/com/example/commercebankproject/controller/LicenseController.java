package com.example.commercebankproject.controller;

import com.example.commercebankproject.domain.License;
import com.example.commercebankproject.service.LicenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class LicenseController {


    private final LicenseService licenseService;


    @CrossOrigin
    @PostMapping("/create")
    public ResponseEntity<?> save(@RequestBody License license){

        System.out.println("ID " + license.getId());
        System.out.println("Name " + license.getName());
        System.out.println("Date " + license.getDate());
        System.out.println("Project Name " + license.getProjectName());
        System.out.println("License " + license.getLicense());
        System.out.println("Version " + license.getVersion());
        System.out.println("Status " + license.getStatus());
        System.out.println("Date Checked " + license.getDateChecked());
        System.out.println("Project URL " + license.getUrl());
        return new ResponseEntity<>(licenseService.create(license), HttpStatus.CREATED);

    }

    @CrossOrigin
    @GetMapping("/license")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(licenseService.findAll(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/license/{id}")
    public ResponseEntity<?> find(@PathVariable Long id){
        System.out.println("find license");
        return new ResponseEntity<>(licenseService.find(id), HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping("/license/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody License license){

        System.out.println("update  license");
        System.out.println("ID " + license.getId());
        System.out.println("Name " + license.getName());
        System.out.println("Date " + license.getDate());
        System.out.println("Project Name " + license.getProjectName());
        System.out.println("License " + license.getLicense());
        System.out.println("Version " + license.getVersion());
        System.out.println("Status " + license.getStatus());
        System.out.println("Date Checked " + license.getDateChecked());
        System.out.println("Project URL " + license.getUrl());
        System.out.println("Description " + license.getDescription());
        System.out.println("Reason " + license.getReason());


        return new ResponseEntity<>(licenseService.update(id, license), HttpStatus.OK);
    }


    @CrossOrigin
    @PutMapping("/license/status/{id}")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestBody License license){

        System.out.println("update  license");
        System.out.println("Status " + license.getStatus());


        SimpleDateFormat formatter= new SimpleDateFormat("MM/dd/yy");
        Date date = new Date(System.currentTimeMillis());
        System.out.println(formatter.format(date));

        license.setDateChecked(formatter.format(date));


        return new ResponseEntity<>(licenseService.updateStatus(id, license), HttpStatus.OK);
    }






    @CrossOrigin
    @DeleteMapping("/license/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){

        System.out.println("Delete license");
        return new ResponseEntity<>(licenseService.delete(id), HttpStatus.OK);
    }

}

//    @PostMapping("create")
//    public ResponseEntity<?> create(@RequestBody License license){
//        return new ResponseEntity<>(licenseService.create(license), HttpStatus.CREATED);
//    }
//
//    @GetMapping("find/{id}")
//    public ResponseEntity<?> find(@PathVariable Long id){
//        return new ResponseEntity<>(licenseService.find(id), HttpStatus.OK);
//    }
//
//    @PutMapping("update")
//    public ResponseEntity<?> update(@RequestBody License license){
//        return  new ResponseEntity<>(licenseService.create(license), HttpStatus.OK);
//    }
//}