package com.nuri.db.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mathgame")
@NoArgsConstructor
@Getter
@Setter
public class MathGame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable = false)
    Long id;

    @JsonManagedReference
    @OneToMany(mappedBy = "math_game")
    List<Code> codes = new ArrayList<>();

    @Column(name="content", nullable = false, length = 5000)
    String content;
    @Column(name="type", nullable = false)
    int type;
    @Column(name="title", nullable = false)
    String title;
    @Column(name="image", nullable = false)
    String image;
    @Column(name="views", nullable = false)
    int views;

    @Override
    public String toString() {
        return "MathGame{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", type=" + type +
                ", title='" + title + '\'' +
                ", image='" + image + '\'' +
                ", views=" + views +
                '}';
    }
}
