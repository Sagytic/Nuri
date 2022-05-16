package com.nuri.db.repository;

import com.nuri.db.entity.MathGameCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CodeRepository extends JpaRepository<MathGameCode, Long> {
    @Query(value = "SELECT * from mathgamecode where user_id = 1 and mathgame_id = :id", nativeQuery = true)
    MathGameCode getAnswer(@Param("id") Long id);

    @Query(value = "SELECT * from mathgamecode where user_id = :userId and status = 1", nativeQuery = true)
    List<MathGameCode> findMathGameCompletedByUserId(@Param("userId") Long userId);

    @Query(value = "SELECT * from mathgamecode where user_id = :userId and status = 0", nativeQuery = true)
    List<MathGameCode> findMathGameViewedByUserId(@Param("userId") Long userId);

    @Query(value = "SELECT * from mathgamecode where user_id = :userId and mathgame_id = :mathgameId", nativeQuery = true)
    MathGameCode findByMathGameIdAndUserId(@Param("userId") Long userId, @Param("mathgameId") Long mathgameId);

}
