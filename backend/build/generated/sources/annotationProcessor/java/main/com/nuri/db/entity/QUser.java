package com.nuri.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 25373545L;

    public static final QUser user = new QUser("user");

    public final StringPath backgroundImage = createString("backgroundImage");

    public final ListPath<MathGameCode, QMathGameCode> codes = this.<MathGameCode, QMathGameCode>createList("codes", MathGameCode.class, QMathGameCode.class, PathInits.DIRECT2);

    public final DateTimePath<java.util.Date> createdAt = createDateTime("createdAt", java.util.Date.class);

    public final ListPath<GameRank, QGameRank> gameranks = this.<GameRank, QGameRank>createList("gameranks", GameRank.class, QGameRank.class, PathInits.DIRECT2);

    public final NumberPath<Integer> isAdmin = createNumber("isAdmin", Integer.class);

    public final StringPath userEmail = createString("userEmail");

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public final StringPath userNickname = createString("userNickname");

    public final StringPath userPassword = createString("userPassword");

    public final StringPath userPhoto = createString("userPhoto");

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

