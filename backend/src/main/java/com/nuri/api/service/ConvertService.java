package com.nuri.api.service;

import com.nuri.convert.Convert;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ConvertService {
    public String convert(Long id, String userCode, Long mathGameId) {
        ArrayList tokens = Convert.lexical(userCode);
        String tokenCode = "";
        for(int i=0; i<tokens.size(); i++){
            tokenCode += tokens.get(i);
        }
        return tokenCode;
    }
}
