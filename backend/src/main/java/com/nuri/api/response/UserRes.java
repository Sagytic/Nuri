package com.nuri.api.response;

import com.nuri.db.entity.User;

//import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.sql.Blob;
import java.util.Date;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class UserRes{
	@ApiModelProperty(name="User ID", example = "nuri@naver.com")
	String userNickname;
	String userId;
	String userPhoto;
	Integer isAdmin;
	Date createdAt;

	public UserRes(String userId, Integer isAdmin, String userPhoto, String userNickname, Date createdAt) {
		this.userId = userId;
		this.isAdmin = isAdmin;
		this.userPhoto = userPhoto;
		this.userNickname = userNickname;
		this.createdAt = createdAt;
	}

	public static UserRes of(User user) {
		UserRes res = new UserRes(user.getUserId(),user.getIsAdmin(), user.getUserPhoto(), user.getUserNickname(), user.getCreatedAt());
		return res;
	}
}