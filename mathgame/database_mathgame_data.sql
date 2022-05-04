use nuri;
-- 개행문자 처리 방법 : https://www.phpschool.com/gnuboard4/bbs/board.php?bo_table=qna_db&wr_id=136432
alter database nuri default character set = utf8;
ALTER TABLE mathgame
    COLLATE='utf8mb4_general_ci',
    CONVERT TO CHARSET utf8mb4;
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (1, "길이가 7m인 통나무를 똑같이 9도막으로 잘랐습니다.\n두 개의 변수를 이용하여 자른 도막의 한 길이를 구하는 코드를 작성하세요.", null, "임시이미지1", "임시이미지1", "통나무 자르기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (2, "원주가 50.24cm, 지름의 길이가 16cm일 때 원주율을 구하는 코드를 작성하세요.", "원의 둘레를 원둘레 또는 원주라고 합니다.\n원의 크기와 관계없이 원주와 지름의 비는 일정하고, 이 비의 값을 원주율이라고 합니다.
-- \n(원주율) = (원주)/(지름)", "임시이미지2", "임시이미지2", "원주율 구하기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (3, "반지름이 9cm인 원의 원주를 구하는 코드를 작성 하세요.\n(원주율 값은 3.14로 계산합니다)", "원주의 길이는 2*원주율*반지름길이로 구할 수 있습니다.", "임시이미지3", "임시이미지3", "원의 원주 구하기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (4, "반지름이 9인 원의 넓이를 구하는 코드를 작성하세요.\n(원주율 값은 3.14로 계산합니다)", "원주의 길이는 원주율*반지름길이*반지름길이로 구할 수 있습니다.", "임시이미지4", "임시이미지4", "원의 넓이 구하기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (5, "아래 그림은 중학교 1학년 어느 반 학생들의 통학시간을 나타낸 것이다.\n통학시간이 30분 이상인 학생은 전체의 몇 %(백분율)인지 구하는 코드를 작성하세요.", "백분율(%) = (사건 A가 일어날 경우의 수)/(모든 경우의 수)*100", "임시이미지5", "임시이미지5", "백분율 구하기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (6, "안녕하세요를 출력하는 코드를 작성하세요.", null, "임시이미지6", "임시이미지6", "출력해보기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (7, "두 개의 숫자(정수)를 입력 받아 더하는 코드를 작성하세요.", null, "임시이미지7", "임시이미지7", "덧셈 프로그램 만들기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (8, "두 개의 숫자(정수)를 입력받아 더 큰 숫자를 출력하는 코드를 작성하세요.\n(단, 입력 시 같은 숫자는 입력하지 않는다.)", null, "임시이미지8", "임시이미지8", "더 큰 숫자 구하기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (9, "1부터 100까지 숫자를 출력하는 코드를 작성하세요.\n(*반복문을 활용하세요!)", null, "임시이미지9", "임시이미지9", "반복문 활용하기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (10, "1부터 100까지 숫자 중 무작위로 한개에 숫자를 선택하는 코드를 작성하세요.", "무작위로 숫자를 뽑는 방법?\n무작위()*숫자 : 0~숫자범위내에 무작위로 한 개 뽑기\n무작위()*숫자+1 : 1~숫자+1 범위내에 무작위로 한 개 뽑기", "임시이미지10", "임시이미지10", "숫자 뽑기", 1, 0);
-- insert into mathgame(mathgame_id, content, help, image, thumbnail, title, type, views)
-- values (11, "누리가 중간고사 과목 국어, 영어, 수학, 과학, 사회, 예체능에서 각각 80점, 90점, 95점, 95점, 70점, 80점을 받았다. 누리는 이 성적들의 평균을 내고 싶다. 누리의 과목평균을 낼 수 있는 코드를 작성해주세요.", null, "임시이미지11", "임시이미지11", "과목 평균 구하기", 1, 0);

ALTER TABLE mathgamecode
    COLLATE='utf8mb4_general_ci',
    CONVERT TO CHARSET utf8mb4;
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (1, '소수 통나무길이 = 7.0;\n소수 도막길이 = 9.0;\n출력(통나무길이/도막길이 + "m");', now(), 1, 1, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (2, '소수 원주 = 7.0;\n소수 지름 = 9.0;\n출력(원주/지름+"m");', now(), 1, 2, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (3, '소수 원주 = 2*3.14*9;\n출력(원주 + "cm");', now(), 1, 3, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (4, '소수 원의넓이 = 3.14*9*9;\n출력(원의넓이 + "cm^2");', now(), 1, 4, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (5, '소수 총합 = 30;/n소수 학생 = 9;\n출력(학생/총합*100+"%");', now(), 1, 5, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (6, '출력("안녕하세요");', now(), 1, 6, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (7, '출력("입력1");\n정수 입력1 = 입력;\n출력("입력2");\n정수 입력2 = 입력;\n\n출력("결과");출력(입력1+입력2);', now(), 1, 7, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (8, '출력("입력1");\n정수 입력1 = 입력;\n출력("입력2");\n정수 입력2 = 입력;\n\n출력("결과");\n만약(입력1>입력2){\n\t출력(입력1);\n}\n만약(입력2>입력1){\n\t출력(입력2);\n}', now(), 1, 8, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (9, '[for문 활용]\n구간반복(숫자=1,100){\n\t출력(숫자);\n}\n\n[while문 활용]\n조건반복(숫자>=1 && 숫자<=100){\n\t출력(숫자);\n}', now(), 1, 9, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (10, '정수 숫자 = 무작위()*99 + 1;\n출력(숫자);', now(), 1, 10, 1);
insert into mathgamecode(mathgamecode_id, code, created_at, status, mathgame_id, user_id)
values (11, '정수 국어 = 80;\n정수 영어 = 90;\n정수 수학 = 95;\n정수 과학 = 95;\n정수 사회 = 70;\n정수 예체능 = 80;\n\n소수 평균 = (국어+영어+수학+과학+사회+예체능)/6;\n출력(평균+"점");', now(), 1, 11, 1);
