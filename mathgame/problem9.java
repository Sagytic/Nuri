import java.util.Scanner;

/**
 * 문제 9
 * 제목 : "반복문 활용하기"
 *
 * 1부터 100까지 숫자를 출력하는 코드를 작성하세요.
 * (*반복문을 활용하세요!)
 *
 * 출력 예시
 * 1
 * 2
 * ...
 * 99
 * 100
 **/
public class problem9 {
    public static void main(String[] args) {
        for(int 숫자=1;숫자<=100;숫자++){
            System.out.println(숫자);
        }
    }
}
/**
 * 한글 코드 모범 답안
 * [for문 활용]
 * 구간반복(숫자=1,100){
 *     출력(숫자);
 * }
 *
 * [while문 활용]
 * 조건반복(숫자>=1 && 숫자<=100){
 *     출력(숫자);
 * }
 *
 **/