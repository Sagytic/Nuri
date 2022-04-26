package com.nuri.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * 유저 모델 정의.
 */
@Entity
@Getter
@Setter
@Table(name="user")
public class User extends BaseEntity{

    String userNickname;
    String userId;
    String userPhoto;
    Integer isAdmin;
    Date createdAt;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String userPassword;

    @Override
    public String toString() {
        return "User{" +
                ", userNickname='" + userNickname + '\'' +
                ", userId='" + userId + '\'' +
                ", userPhoto='" + userPhoto + '\'' +
                ", isAdmin='" + isAdmin + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", createdAt='" + createdAt + '\'' +
                '}';
    }

}