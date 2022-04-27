/**
 * 문제 3
 *
 * 반지름이 9cm인 원의 원주를 구하는 코드를 작성 하세요.
 * (원주율 값은 3.14로 계산합니다)
 *
 * 출력 예시
 * 56.52cm
 **/
public class problem3 {
    public static void main(String[] args) {
        double 원주 = 2 * 3.14 * 9;
        System.out.println(원주+"cm");
    }
}
/**
 * 도우미 설명
 * 원주의 길이는 2*원주율*반지름길이로 구할 수 있습니다.
 *
 * 한글 코드 모범 답안
 * 소수 circumference = 2*3.14*9;
 * 출력(circumference + "cm");
 **/
