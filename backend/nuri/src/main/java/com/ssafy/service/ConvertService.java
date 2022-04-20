package com.ssafy.service;

import com.ssafy.convert.Convert;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ConvertService {
    public String convert(Long id, String userCode, Long mathGameId) {
        ArrayList tokens = Convert.lexcial(userCode);
        return null;
    }
}
