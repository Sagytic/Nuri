import java.util.Scanner;

/**
 * 문제 8
 * 제목 : "더 큰 숫자 구하기"
 *
 * 두 개의 숫자(정수)를 입력받아 더 큰 숫자를 출력하는 코드를 작성하세요.
 * (단, 입력 시 같은 숫자는 입력하지 않는다.)
 *
 * 출력 예시
 * 입력1
 * 3
 * 입력2
 * 5
 * 결과
 * 5
 **/
public class problem8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("입력1");
        int 입력1 = scanner.nextInt();
        System.out.println("입력2");
        int 입력2 = scanner.nextInt();

        System.out.println("결과");
        if(입력1>입력2){
            System.out.println(입력1);
        }
        if(입력1<입력2){
            System.out.println(입력2);
        }
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
 * 만약(입력1>입력2){
 *     출력(입력1);
 * }
 * 만약(입력2>입력1){
 *     출력(입력2);
 * }
 **/