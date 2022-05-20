package com.nuri.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPracticeCode is a Querydsl query type for PracticeCode
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPracticeCode extends EntityPathBase<PracticeCode> {

    private static final long serialVersionUID = 1405767526L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPracticeCode practiceCode = new QPracticeCode("practiceCode");

    public final StringPath code = createString("code");

    public final DateTimePath<java.time.OffsetDateTime> createdAt = createDateTime("createdAt", java.time.OffsetDateTime.class);

    public final NumberPath<Long> practicecodeId = createNumber("practicecodeId", Long.class);

    public final NumberPath<Integer> status = createNumber("status", Integer.class);

    public final StringPath title = createString("title");

    public final QUser user;

    public QPracticeCode(String variable) {
        this(PracticeCode.class, forVariable(variable), INITS);
    }

    public QPracticeCode(Path<? extends PracticeCode> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPracticeCode(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPracticeCode(PathMetadata metadata, PathInits inits) {
        this(PracticeCode.class, metadata, inits);
    }

    public QPracticeCode(Class<? extends PracticeCode> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user")) : null;
    }

}

