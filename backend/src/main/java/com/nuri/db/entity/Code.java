package com.nuri.db.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "code")
@NoArgsConstructor
@Getter
@Setter
public class Code {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="code_id", nullable = false)
    Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    @JsonBackReference
    User user;
    @ManyToOne
    @JoinColumn(name="math_game_id", nullable = false)
    @JsonBackReference
    MathGame math_game;
    @Column(name="code", nullable = false, length = 5000)
    String code;
    @Column(name="status", nullable = false)
    int status;
    @Column(name="created_at", nullable = false)
    OffsetDateTime created_at = OffsetDateTime.now();

}
