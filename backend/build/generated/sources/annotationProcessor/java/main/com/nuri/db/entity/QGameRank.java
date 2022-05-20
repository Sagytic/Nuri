package com.nuri.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QGameRank is a Querydsl query type for GameRank
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QGameRank extends EntityPathBase<GameRank> {

    private static final long serialVersionUID = -1840053284L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QGameRank gameRank = new QGameRank("gameRank");

    public final NumberPath<Long> gamerankId = createNumber("gamerankId", Long.class);

    public final QMathGame mathgame;

    public final NumberPath<Double> time = createNumber("time", Double.class);

    public final QUser user;

    public QGameRank(String variable) {
        this(GameRank.class, forVariable(variable), INITS);
    }

    public QGameRank(Path<? extends GameRank> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QGameRank(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QGameRank(PathMetadata metadata, PathInits inits) {
        this(GameRank.class, metadata, inits);
    }

    public QGameRank(Class<? extends GameRank> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mathgame = inits.isInitialized("mathgame") ? new QMathGame(forProperty("mathgame")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

