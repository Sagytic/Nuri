package com.nuri.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.nuri.db.entity.QUser;
import com.nuri.db.entity.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * 유저 모델 관련 디비 쿼리 생성을 위한 구현 정의.
 */
@Repository
public class UserRepositorySupport {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QUser qUser = QUser.user;

    public Optional<User> findUserByUserId(String UserId) {
        User user = jpaQueryFactory.select(qUser).from(qUser)
                .where(qUser.userId.eq(UserId)).fetchOne();
        if(user == null) return Optional.empty();
        return Optional.ofNullable(user);
    }
    public Optional<User> findUserByUserNickname(String userNickname) {
        User user = jpaQueryFactory.select(qUser).from(qUser)
                .where(qUser.userNickname.eq(userNickname)).fetchOne();
        if(user == null) return Optional.empty();
        return Optional.ofNullable(user);
    }
}
