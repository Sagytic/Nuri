package com.ssafy.api.response;

import com.ssafy.db.entity.User;

//import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class UserRes{
	@ApiModelProperty(name="User ID", example = "ssafy@naver.com")
	String userNickname;
	String userEmail;
	String userPhoto;
	Integer isAdmin;

	public UserRes(String userEmail, Integer isAdmin, String userPhoto, String userNickname) {
		this.userEmail = userEmail;
		this.isAdmin = isAdmin;
		this.userPhoto = userPhoto;
		this.userNickname = userNickname;
	}

	public static UserRes of(User user) {
		UserRes res = new UserRes(user.getUserEmail(),user.getIsAdmin(), user.getUserPhoto(), user.getUserNickname());
		return res;
	}
}
