package com.nuri.api.controller;

import com.nuri.api.service.CodeService;
import com.nuri.api.service.MathGameService;
import com.nuri.db.entity.MathGame;
import com.nuri.db.entity.MathGameCode;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:8081")
@Api(value = "게임, 수학문제 API", tags = {"MathGame"})
@RestController
@RequestMapping("/api/v1/mathgame")
public class MathGameController {

    @Autowired
    MathGameService mathgameService;

    @Autowired
    CodeService codeService;

    @GetMapping("{type}")
    @ApiOperation(value = "전체 게임/문제 목록 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<MathGame>> findMathGameList(@PathVariable("type") int type){
        List<MathGame> mathgameList = mathgameService.findMathGame(type);
        return ResponseEntity.status(200).body(mathgameList);
    }

    @PatchMapping("{mathgame_id}")
    @ApiOperation(value = "특정 게임/문제 선택 후 조회수 증가")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Integer> updateMathGameViews(@PathVariable("mathgame_id") int mathgameId){
        int updateviews = mathgameService.updateMathGameViews(mathgameId);
        return ResponseEntity.status(200).body(updateviews);
    }

    @GetMapping("/answer/{mathgame_id}")
    @ApiOperation(value = "")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<MathGameCode> getAnswer(@PathVariable("mathgame_id") Long mathgameId){
        MathGameCode answercode = codeService.getAnswer(mathgameId);
         if(answercode!=null) {
             return ResponseEntity.status(200).body(answercode);
         }else return ResponseEntity.status(500).body(null);
    }
}
