package com.nuri.api.service;

import com.nuri.api.request.*;
import com.nuri.db.entity.User;

import java.util.HashMap;
import java.util.List;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User createUser(UserRegisterPostReq userRegisterInfo);
	User getUserByUserId(String userId);
	User checkUser(String userId);
	void updateUser(User user, UserUpdatePostReq userUpdatePostReq);
	void deleteUser(User user);
	void updateUserPhoto(User user, String userPhoto);

    String kakaoToken(String code);

	HashMap<String, Object> kakaoUserInfo(String accessToken);

	User checkUserNickname(String userNickname);

	User getUserByUserNickname(String userNickname);
}
