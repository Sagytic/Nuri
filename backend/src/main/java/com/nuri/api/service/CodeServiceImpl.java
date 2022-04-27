package com.nuri.api.service;

import com.nuri.db.entity.Code;
import com.nuri.db.repository.CodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("CodeService")
public class CodeServiceImpl implements CodeService{
    @Autowired
    CodeRepository codeRepository;

    @Override
    public Code getAnswer(Long mathgameId) {
        Code answercode = codeRepository.getAnswer(mathgameId);
        return answercode;
    }
}
