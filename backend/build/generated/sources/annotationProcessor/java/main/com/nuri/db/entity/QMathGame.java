package com.nuri.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMathGame is a Querydsl query type for MathGame
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMathGame extends EntityPathBase<MathGame> {

    private static final long serialVersionUID = 229721016L;

    public static final QMathGame mathGame = new QMathGame("mathGame");

    public final ListPath<MathGameCode, QMathGameCode> codes = this.<MathGameCode, QMathGameCode>createList("codes", MathGameCode.class, QMathGameCode.class, PathInits.DIRECT2);

    public final StringPath content = createString("content");

    public final ListPath<GameRank, QGameRank> gameranks = this.<GameRank, QGameRank>createList("gameranks", GameRank.class, QGameRank.class, PathInits.DIRECT2);

    public final StringPath help = createString("help");

    public final StringPath image = createString("image");

    public final NumberPath<Long> mathgameId = createNumber("mathgameId", Long.class);

    public final StringPath thumbnail = createString("thumbnail");

    public final StringPath title = createString("title");

    public final NumberPath<Integer> type = createNumber("type", Integer.class);

    public final NumberPath<Integer> views = createNumber("views", Integer.class);

    public QMathGame(String variable) {
        super(MathGame.class, forVariable(variable));
    }

    public QMathGame(Path<? extends MathGame> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMathGame(PathMetadata metadata) {
        super(MathGame.class, metadata);
    }

}

