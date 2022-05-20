package com.nuri.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMathGameCode is a Querydsl query type for MathGameCode
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMathGameCode extends EntityPathBase<MathGameCode> {

    private static final long serialVersionUID = -2020030011L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMathGameCode mathGameCode = new QMathGameCode("mathGameCode");

    public final StringPath code = createString("code");

    public final DateTimePath<java.time.OffsetDateTime> createdAt = createDateTime("createdAt", java.time.OffsetDateTime.class);

    public final QMathGame mathgame;

    public final NumberPath<Long> mathgamecodeId = createNumber("mathgamecodeId", Long.class);

    public final NumberPath<Integer> status = createNumber("status", Integer.class);

    public final QUser user;

    public QMathGameCode(String variable) {
        this(MathGameCode.class, forVariable(variable), INITS);
    }

    public QMathGameCode(Path<? extends MathGameCode> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMathGameCode(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMathGameCode(PathMetadata metadata, PathInits inits) {
        this(MathGameCode.class, metadata, inits);
    }

    public QMathGameCode(Class<? extends MathGameCode> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mathgame = inits.isInitialized("mathgame") ? new QMathGame(forProperty("mathgame")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

