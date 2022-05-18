package com.nuri.api.service;

import com.nuri.api.request.MathCodeSavePostReq;
import com.nuri.api.request.MathGameCodeSavePostReq;
import com.nuri.api.request.PracticeCodeSavePostReq;
import com.nuri.api.response.MathGameCodeRes;
import com.nuri.api.response.PracticeCodeRes;
import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.MathGameCode;
import com.nuri.db.entity.PracticeCode;
import com.nuri.db.entity.User;
import com.nuri.db.repository.CodeRepository;
import com.nuri.db.repository.MathGameRepository;
import com.nuri.db.repository.PracticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service("CodeService")
public class CodeServiceImpl implements CodeService{
    @Autowired
    CodeRepository codeRepository;
    @Autowired
    MathGameRepository mathgameRepository;
    @Autowired
    PracticeRepository practiceRepository;

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
        MathGameCode mathGameCodeExist = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathGameCodeSavePostReq.getMathgameId());
        if(mathGameCodeExist.getStatus()!=1) {
            if(mathGameCodeExist!=null) {
                codeRepository.delete(mathGameCodeExist);
            }
            codeRepository.save(mathGameCode);
        }
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
        MathGameCode mathGameCodeExist = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathCodeSavePostReq.getMathgameId());
        if(mathGameCodeExist!=null) {
            codeRepository.delete(mathGameCodeExist);
        }
        codeRepository.save(mathGameCode);
        return mathGameCode;
    }


    @Override
    public List<MathGameCodeRes> findCompletedGame(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathGameCompletedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findViewedGame(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathGameViewedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findCompletedCode(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathCompletedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findViewedCode(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findMathViewedByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }

    @Override
    public List<MathGameCodeRes> findAllCode(User user) {
        List<MathGameCode> mathGameCodeList = codeRepository.findAllMathByUserId(user.getUserId());
        List<MathGameCodeRes> mathgameCodeResList = new LinkedList<>();
        for(int i=0; i<mathGameCodeList.size(); i++){
            MathGame mathGame = mathgameRepository.getOne(mathGameCodeList.get(i).getMathgame().getMathgameId());
            mathgameCodeResList.add(MathGameCodeRes.of(mathGameCodeList.get(i), mathGame));
        }
        return mathgameCodeResList;
    }


    @Override
    public PracticeCode savePracticeCode(PracticeCodeSavePostReq practiceCodeSavePostReq, User user) {
        PracticeCode practiceCode = new PracticeCode();
        practiceCode.setUser(user);
        practiceCode.setCode(practiceCodeSavePostReq.getCode());
        practiceCode.setTitle(practiceCodeSavePostReq.getTitle());
        PracticeCode practiceCodeExist = practiceRepository.findByTitleAndUserId(user.getUserId(), practiceCodeSavePostReq.getTitle());
        if(practiceCodeExist!=null) {
            practiceRepository.delete(practiceCodeExist);
        }
        practiceRepository.save(practiceCode);
        return practiceCode;
    }

    @Override
    public List<PracticeCodeRes> findPracticeByUserId(User user) {
        List<PracticeCode> practiceCodeList = practiceRepository.findPracticeByUserId(user.getUserId());
        List<PracticeCodeRes> practiceCodeResList = new LinkedList<>();
        for(int i=0; i<practiceCodeList.size(); i++){
            practiceCodeResList.add(PracticeCodeRes.of(practiceCodeList.get(i)));
        }
        return practiceCodeResList;
    }

    @Override
    public MathGameCode findByMathGameIdAndUserId(User user, Long mathgamecodeId) {
        MathGameCode mathGameCode = codeRepository.findByMathGameIdAndUserId(user.getUserId(), mathgamecodeId);
        return mathGameCode;
    }

    @Override
    public PracticeCode findByPracticeCodeIdAndUserId(User user, Long practicecodeId) {
        PracticeCode practiceCode = practiceRepository.findByPracticeCodeIdAndUserId(user.getUserId(), practicecodeId);
        return practiceCode;
    }


}
