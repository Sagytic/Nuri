package com.nuri.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTestcase is a Querydsl query type for Testcase
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTestcase extends EntityPathBase<Testcase> {

    private static final long serialVersionUID = -1217173664L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTestcase testcase = new QTestcase("testcase");

    public final StringPath answer = createString("answer");

    public final QMathGame mathgame;

    public final StringPath problem = createString("problem");

    public final NumberPath<Long> testcaseId = createNumber("testcaseId", Long.class);

    public QTestcase(String variable) {
        this(Testcase.class, forVariable(variable), INITS);
    }

    public QTestcase(Path<? extends Testcase> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTestcase(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTestcase(PathMetadata metadata, PathInits inits) {
        this(Testcase.class, metadata, inits);
    }

    public QTestcase(Class<? extends Testcase> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mathgame = inits.isInitialized("mathgame") ? new QMathGame(forProperty("mathgame")) : null;
    }

}

