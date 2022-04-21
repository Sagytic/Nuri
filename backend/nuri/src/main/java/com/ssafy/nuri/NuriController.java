package com.ssafy.nuri;
import org.springframework.stereotype.Controller;


@Controller
public class NuriController {
    public String home(){
        return "Hi Spring Boot! 안녕하세요!";

    }
}
