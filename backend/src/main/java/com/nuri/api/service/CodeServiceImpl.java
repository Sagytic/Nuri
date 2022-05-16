package com.nuri.api.service;

import com.nuri.api.request.MathCodeSavePostReq;
import com.nuri.api.request.MathGameCodeSavePostReq;
import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.MathGameCode;
import com.nuri.db.entity.User;
import com.nuri.db.repository.CodeRepository;
import com.nuri.db.repository.MathGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("CodeService")
public class CodeServiceImpl implements CodeService{
    @Autowired
    CodeRepository codeRepository;
    @Autowired
    MathGameRepository mathgameRepository;

    @Override
    public MathGameCode getAnswer(Long mathgameId) {
        MathGameCode answercode = codeRepository.getAnswer(mathgameId);
        return answercode;
    }

    @Override
    public MathGameCode saveMathGameCode(MathGameCodeSavePostReq mathGameCodeSavePostReq, User user) {
        MathGameCode mathGameCode = new MathGameCode();
        mathGameCode.setUser(user);
//        mathGameCode.setMathgamecodeId(mathGameCode.getMathgamecodeId());
        mathGameCode.setStatus(mathGameCodeSavePostReq.getStatus());
        MathGame mathgame = mathgameRepository.getOne(mathGameCodeSavePostReq.getMathgameId());
        mathGameCode.setMathgame(mathgame);
        MathGameCode mathGameCodeExist = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathgame.getMathgameId());
        if(mathGameCodeExist!=null) {
            codeRepository.delete(mathGameCodeExist);
        }
        codeRepository.save(mathGameCode);

        return mathGameCode;
    }

    @Override
    public MathGameCode saveMathCode(MathCodeSavePostReq mathCodeSavePostReq, User user) {
        MathGameCode mathGameCode = new MathGameCode();
        mathGameCode.setUser(user);
        mathGameCode.setCode(mathCodeSavePostReq.getCode());
//        mathGameCode.setMathgamecodeId(mathGameCode.getMathgamecodeId());
        mathGameCode.setStatus(mathCodeSavePostReq.getStatus());
        MathGame mathgame = mathgameRepository.getOne(mathCodeSavePostReq.getMathgameId());
        mathGameCode.setMathgame(mathgame);
        MathGameCode mathGameCodeExist = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathgame.getMathgameId());
        if(mathGameCodeExist!=null) {
            codeRepository.delete(mathGameCodeExist);
        }
        codeRepository.save(mathGameCode);
        return mathGameCode;
    }

    @Override
    public List<MathGameCode> findCompletedGame(User user) {
        return (List<MathGameCode>) codeRepository.findMathGameCompletedByUserId(user.getUserId());
    }

    @Override
    public List<MathGameCode> findViewedGame(User user) {
        return (List<MathGameCode>) codeRepository.findMathGameViewedByUserId(user.getUserId());
    }

    @Override
    public List<MathGameCode> findCompletedCode(User user) {
        return (List<MathGameCode>) codeRepository.findMathCompletedByUserId(user.getUserId());
    }

    @Override
    public List<MathGameCode> findViewedCode(User user) {
        return (List<MathGameCode>) codeRepository.findMathViewedByUserId(user.getUserId());
    }


}
