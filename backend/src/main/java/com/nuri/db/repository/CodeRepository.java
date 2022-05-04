package com.nuri.db.repository;

import com.nuri.db.entity.MathGameCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CodeRepository extends JpaRepository<MathGameCode, Long> {
    @Query(value = "SELECT * from mathgamecode where user_id = 1 and mathgame_id = :id", nativeQuery = true)
    MathGameCode getAnswer(@Param("id") Long id);
}
