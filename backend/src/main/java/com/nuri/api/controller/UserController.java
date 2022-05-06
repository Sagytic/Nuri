package com.nuri.api.controller;

import com.nuri.api.request.UserUpdatePostReq;
import com.nuri.api.response.UserRes;
import com.nuri.api.service.UserService;
import com.nuri.common.auth.NuriUserDetails;
import com.nuri.common.model.response.BaseResponseBody;
import com.nuri.db.entity.User;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.util.Base64;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/v1/user")
public class UserController {
	
	@Autowired
	UserService userService;

	@Autowired
	PasswordEncoder passwordEncoder;
	
	@GetMapping()
	@ApiOperation(value = "회원 본인 정보 조회(토큰 기반)", notes = "로그인한 회원 본인의 정보를 응답한다.")
    @ApiResponses({
        @ApiResponse(code = 200, message = "성공"),
        @ApiResponse(code = 401, message = "인증 실패"),
        @ApiResponse(code = 404, message = "사용자 없음"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<UserRes> getUserInfo(@ApiIgnore Authentication authentication) {
		/**
		 * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
		 * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
		 */
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);
		return ResponseEntity.status(200).body(UserRes.of(user));
	}

	private final Logger log = LoggerFactory.getLogger(UserController.class);

	// Update(갱신)
	@PatchMapping()
	@ApiOperation(value = "회원 수정(로그인 후 토큰 방식)", notes = "해당 아이디 회원의 정보를 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> updateUser(@RequestBody @ApiParam(value="수정 내용", required = true)UserUpdatePostReq userUpdatePostReq, @ApiIgnore Authentication authentication) {
		NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
		String getUserEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(getUserEmail);
		userService.updateUser(user, userUpdatePostReq);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	// profile image Update(갱신)
	@PatchMapping("/user_photo")
	@ApiOperation(value = "프로필 이미지 수정", notes = "해당 아이디 회원의 프로필 이미지를 수정한다.")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> updateProfileImage(@RequestPart("userPhoto") MultipartFile userPhoto, @ApiIgnore Authentication authentication) throws IOException {
		NuriUserDetails userDetails = (NuriUserDetails) authentication.getDetails();
		String getUserEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(getUserEmail);
		System.out.println(userPhoto.getContentType());

		Base64.Encoder encoder = Base64.getEncoder();
		byte[] photoEncode = encoder.encode(userPhoto.getBytes());
		String photoImg = new String(photoEncode, "UTF8");

		userService.updateUserPhoto(user, photoImg);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	// 삭제
	@DeleteMapping()
	@ApiOperation(value = "유저 정보 삭제", notes = "유저 정보 삭제")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<? extends BaseResponseBody> deleteUser(@ApiIgnore Authentication authentication){
		NuriUserDetails userDetails = (NuriUserDetails)authentication.getDetails();
		String userEmail = userDetails.getUsername();
		User user = userService.getUserByUserEmail(userEmail);
		userService.deleteUser(user);
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}

	@GetMapping("checkid")
	@ApiOperation(value = "아이디 중복 체크(사용가능한 아이디 true)", notes = "아이디 중복 체크")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<Boolean> checkUserId(String userId){
		if(userService.getUserByUserEmail(userId)!=null){
			return ResponseEntity.status(200).body(false);
		}
		return ResponseEntity.status(200).body(true);
	}

	@GetMapping("checkname")
	@ApiOperation(value = "닉네임 중복 체크(사용가능한 닉네임 true)", notes = "닉네임 중복 체크")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<Boolean> checkUserNickname(String userNickname){
		if(userService.checkUserNickname(userNickname)!=null){
			return ResponseEntity.status(200).body(false);
		}
		return ResponseEntity.status(200).body(true);
	}

	@GetMapping("{user_nickname_photo}")
	@ApiOperation(value = "닉네임을 통해 프로필 사진 반환", notes = "닉네임을 통해 프로필 사진 반환")
	@ApiResponses({
			@ApiResponse(code = 200, message = "성공"),
			@ApiResponse(code = 401, message = "인증 실패"),
			@ApiResponse(code = 404, message = "사용자 없음"),
			@ApiResponse(code = 500, message = "서버 오류")
	})
	public ResponseEntity<String> checkUserNicknamePhoto(String userNickname){
		User user = userService.getUserByUserNickname(userNickname);
		return ResponseEntity.status(200).body(user.getUserPhoto());

	}
}
