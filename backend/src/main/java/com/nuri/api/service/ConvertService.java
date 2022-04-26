package com.nuri.api.service;

import com.nuri.convert.Convert;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ConvertService {
    public ArrayList<String> convert(Long id, String userCode, Long mathGameId) {
        ArrayList tokens = Convert.lexical(userCode);
        return tokens;
    }
}