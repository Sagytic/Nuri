package com.nuri.api.service;

import com.nuri.api.request.MathCodeSavePostReq;
import com.nuri.api.request.MathGameCodeSavePostReq;
import com.nuri.db.entity.MathGameCode;
import com.nuri.db.entity.User;

import java.util.List;

public interface CodeService {
    MathGameCode getAnswer(Long mathgameId);
    MathGameCode saveMathGameCode(MathGameCodeSavePostReq mathGameCodeSavePostReq, User user);
    MathGameCode saveMathCode(MathCodeSavePostReq mathCodeSavePostReq, User user);

    List<MathGameCode> findCompletedGame(User user);
    List<MathGameCode> findViewedGame(User user);

    List<MathGameCode> findCompletedCode(User user);
    List<MathGameCode> findViewedCode(User user);
}
