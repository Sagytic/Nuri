import java.util.Scanner;

/**
 * 문제 7
 * "덧셈 프로그램 만들기"
 * 두 개의 숫자(정수)를 입력 받아 더하는 코드를 작성하세요.
 *
 * 출력 예시
 * 입력1
 * 10
 * 입력2
 * 20
 * 결과
 * 30
 **/
public class problem7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("입력1");
        int 입력1 = scanner.nextInt();
        System.out.println("입력2");
        int 입력2 = scanner.nextInt();

        System.out.println("결과");
        System.out.println(입력1+입력2);
    }
}
/**
 * 한글 코드 모범 답안
 *
 * 출력("입력1");
 * 정수 입력1 = 입력;
 * 출력("입력2");
 * 정수 입력2 = 입력;
 *
 * 출력("결과");
 * 출력(입력1+입력2);
 **/
