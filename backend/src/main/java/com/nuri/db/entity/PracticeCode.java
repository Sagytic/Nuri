package com.nuri.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "practicecode")
@NoArgsConstructor
@Getter
@Setter
public class PracticeCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="practicecode_id", nullable = false)
    Long practicecodeId;

    @ManyToOne
    @JoinColumn(name="user_id")
    User user;
    @Column(name="title", nullable = false)
    String title;
    @Column(name="code", nullable = false)
    String code;
    @Column(name="status", nullable = false)
    int status;
    @Column(name="created_at", nullable = false)
    OffsetDateTime createdAt = OffsetDateTime.now();

    @Override
    public String toString() {
        return "PracticeCode{" +
                "practicecodeId=" + practicecodeId +
                ", user=" + user +
                ", title='" + title + '\'' +
                ", code='" + code + '\'' +
                ", status=" + status +
                ", createdAt=" + createdAt +
                '}';
    }
}
