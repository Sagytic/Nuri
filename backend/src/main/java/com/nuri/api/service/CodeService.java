package com.nuri.api.service;

import com.nuri.db.entity.MathGameCode;

public interface CodeService {
    MathGameCode getAnswer(Long mathgameId);
}
