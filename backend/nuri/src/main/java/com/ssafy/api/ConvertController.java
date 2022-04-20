package com.ssafy.api;

import com.ssafy.service.ConvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/console")
public class ConvertController {

    @Autowired
    ConvertService convertService;

    @PostMapping("/convert")
    public ResponseEntity<String> convert(Long id, String userCode, Long mathGameId){
        String convertCode = convertService.convert(id, userCode, mathGameId);
        if(convertCode!=null){
            return ResponseEntity.status(200).body(convertCode);
        }else{
            return ResponseEntity.status(500).body(null);
        }
    }
}
