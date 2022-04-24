package com.example.commercebankproject.service;

import com.example.commercebankproject.domain.License;
import com.example.commercebankproject.repository.LicenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Supplier;

@RequiredArgsConstructor
@Service
public class LicenseService {

    // dependency injection so don't instantiate
    private final LicenseRepository licenseRepository;

    @Transactional
    public License create(License license){
        // save function is inside inherited Jpa class of licenseRepository
        return licenseRepository.save(license);
    }

    @Transactional
    public License update(Long id, License license){
        License licenseEntity = licenseRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("check Id"));  //Persistence Context

        licenseEntity.setName(license.getName());
        licenseEntity.setDate(license.getDate());
        licenseEntity.setProjectName(license.getProjectName());
        licenseEntity.setLicense(license.getLicense());
        licenseEntity.setVersion(license.getVersion());
        licenseEntity.setStatus(license.getStatus());
        licenseEntity.setDateChecked(license.getDateChecked());
        licenseEntity.setUrl(license.getUrl());
        licenseEntity.setDescription(license.getDescription());
        licenseEntity.setReason(license.getReason());
        return null;
    }


    @Transactional
    public License updateStatus(Long id, License license){
        License licenseEntity = licenseRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("check Id"));  //Persistence Context


        licenseEntity.setStatus(license.getStatus());
        licenseEntity.setDateChecked(license.getDateChecked());

        return null;
    }







    @Transactional(readOnly = true)
    public List<License> findAll(){
        return licenseRepository.findAll();
    }

    @Transactional(readOnly = true)
    public License find(Long id) {
        License licenseEntity = licenseRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("check license"));
        return licenseEntity;
    }
    @Transactional
    public String delete(Long id){
        licenseRepository.deleteById(id);
        return "ok";
    }
}