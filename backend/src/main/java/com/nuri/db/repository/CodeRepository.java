package com.nuri.db.repository;

import com.nuri.db.entity.Code;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CodeRepository extends JpaRepository<Code, Long> {
    @Query(value = "SELECT * from code where user_id = 1 and math_game_id = :id", nativeQuery = true)
    Code getAnswer(@Param("id") Long id);
}
