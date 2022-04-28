package com.nuri.api.service;

import com.nuri.db.entity.Code;

public interface CodeService {
    Code getAnswer(Long mathgameId);
}
