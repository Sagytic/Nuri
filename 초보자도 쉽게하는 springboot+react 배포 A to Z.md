# 초보자도 쉽게하는 SpringBoot + React 배포 A to Z

## 이거 하나만 따라하면 당신도 SSAFY 수동배포 마스터!

> 목차
> 
> 1. pem 키 사용방법 
> 
> 2. 우분투 기초설정
> 
> 3. DB(mysql) 설치 및 Mysql Workbench에서 실행
> 
> 4. 백엔드 연동 및 실행 방법
> 
> 5. 프론트엔드 연동 및 실행 방법
> 
> 6. http to https 바꾸기(작성중)

### 1. pem 키 사용방법

![](C:\Users\sevct\ssafy\2th\free\S06P31S202\README\세션%20세팅.png)

1. 지급받은 pem 키를 MobaXterm에서 새 세션을 열어 private key에 넣는다.
2. 다른 설정은 건드리지 말고 Remote host에 `ubuntu@k6s202.p.ssafy.io`를 입력한다.(k6s202는 발급받은 pem키 파일명과 똑같이 바꿈)
3. 접속 성공!

### 2. 우분투 기초설정

1. date를 입력하여 타임존을 확인한다. 날짜가 맞지 않을 경우
   
   ```
   sudo ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
   ```
   
   를 입력하여 날짜를 한국으로 맞춘다.

2. java를 설치한다
   
   ```
   sudo apt update
   
   sudo apt-cache search jdk | grep 11
   
   sudo apt install openjdk-11-jdk
   ```

3. npm을 설치한다
   
   ```
   sudo apt install npm
   
   # 만약 npm이 이미 설치되어 있다면 오류가 나올 수 있 이럴땐
   
   npm -v 
   
   # 를 입력하여 npm이 설치되어있는지, 버전을 확인한다.
   ```

4. nginx를 설치한다.

```
sudo apt-get isntall nginx -y
```

5. 만약 프로젝트에서 개별적으로 사용한 추가 파일이 있을 경우 개별적으로 설치한다. (readme에선 기초 설정만 다룸)

### 3. DB(Mysql) 설치 및 Mysql Workbench에서 실행

1. 우분투 서버를 업데이트하고 Mysql 서버를 설치한다
   
   ```
   sudo apt-get update
   sudo apt-get install mysql-server
   ```

2. 설치한 Mysql에 접속한다.
   
   ```
   sudo mysql -u root -p
   ```

3. 프로젝트에 쓸 database를 생성한다.
   
   ```
   create database nuri;
   
   # nuri는 프로젝트에 쓸 db명
   
   show databases; 
   
   # 생성한 db 목록을 확인할 수 있음
   ```

4. root를 사용하는건 보안에 취약할 수 있으니 새로 사용할 유저를 생성한다.
   
   ```
   create user 'nuri'@'%' identified by '{비밀번호}';
   
   # 짧은 비밀번호는 보안상 거부될 수 있으니 8자리 이상으로 설정해야함
   ```

5. 생성한 유저에게 db 사용 권한을 부여한다.
   
   ```
   grant all on nuri.* to 'nuri'@'%';
   ```

6. mysql workbench나 로컬에서 작업에 사용하기 위해 외부 접속을 허용한다.
   
   ```
   vi /etc/mysql/mysql.conf.d/mysqld.cnf
   ```
   
   vim으로 파일이 실행되며 s를 누르면 현재 있는 칸에서부터 수정이 가능함.
   
   bind-address 값을 127.0.0.1에서 0.0.0.0으로 변경한다.
   
   수정을 다 했을 경우 esc를 누르고 :wq를 누르면 저장 후 종료, :q!을 누르면 저장하지 않고 종료된다.

7. mysql workbench에서 connections 세팅을 선택한다.

![](C:\Users\sevct\ssafy\2th\free\S06P31S202\README\mysql.png)

8. 새로 커넥션을 생성하고 connection name은 아무거나, hostname은 remote host 에 입력한 주소를 적고 port는 3306을 사용한다.

9. user와 password엔 방금 생성한 유저, 비밀번호 입력 후 테스트시 접속 성공!

### 4. 백엔드 연동 방법(spring boot)

1. application.properties를 실행한 후 아래의 코드를 입력한다.(기존에 해당 코드가 있을 경우 주소를 바꿔넣음)
   
   ```
   server.address=0.0.0.0
   
   spring.datasource.url=jdbc:mysql://k6s202.p.ssafy.io/nuri?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Seoul&zeroDateTimeBehavior=convertToNull&rewriteBatchedStatements=true
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   spring.datasource.hikari.username=nuri
   spring.datasource.hikari.password='비밀번호'
   ```

2. gradle - build로 jar 파일을 생성한다. (파일 생성 위치는 설정에 따라 다르나 스켈레톤 코드의 경우 build/libs 폴더 안에 생성된다.)

3. 생성한 코드를 MobaXterm을 통해 우분투 서버의 /home/ubuntu/ 폴더에 넣는다.

4. 하단의 코드를 입력하여 빌드된 백엔드를 실행해본다.
   
   ```
   java -jar '{jar 파일이름}'.jar
   ```

5. http://k6s202.p.ssafy.io:8080/ 에 접속해본다.(주소는 각자 설정하고 뒤에 포트번호 8080 위치에는 application.properties에서 개별적으로 설정한 port 번호를 입력한다.)

6. dist/index.html이 없을 경우 'There was an error completing the action.' 이 출력되고 있을 경우 index 파일이 출력된다.

7. 접속 성공!

8. 만약 ubuntu 터미널을 꺼도 계속 실행되게 하고싶다면
   
   ```
   nohup java -jar '{jar 파일이름}'.jar
   ```
   
   을 입력하여 실행하면 터미널을 꺼도 계속 유지된다.(위의 코드에선 터미널을 끄면 백엔드는 함께 꺼진다.)
   
   ```
   ps -ef | grep java
   ```
   
   잘 실행되고 있는지 확인하고 싶다면 위 코드 입력시 현재 실행중인 java 파일들을 확인할 수 있다.

9. 백그라운드에서 실행되고있는 자바 파일을 끄고 싶다면
   
   ```
   kill -9 processID
   ```
   
   를 입력하여 강제종료할 수 있다. (processID는 프로세스 목록이 나왔을때 왼쪽에서 두번째 있는 5자리 숫자가 ID이다.)

### 5. 프론트엔드 연동 방법

1. 프론트엔드 폴더에서 아래의 코드를 입력하여 빌드한다.
   
   ```
   npm run build
   ```

2. 생성된 코드를 MobaXterm을 통해 우분투 서버의 /home/ubuntu/ 폴더에 넣는다.

3. react 프로젝트의 빌드 결과물을 배포할 설정 파일을 생성한다.
   
   ```
   sudo touch /etc/nginx/sites-available/myapp.conf
   
   vi /etc/nginx/sites-available/myapp.conf
   ```

4. vim으로 실행시 비어있을텐데 하단의 코드를 입력하고 저장한다.
   
   ```
   server {
     listen 80;
     location / {
       root   /home/ubuntu/build;
       index  index.html index.htm;
       try_files $uri /index.html;
     }
   }
   ```

5. 심볼릭 링크를 생성한다.
   
   ```
   sudo ln -s /etc/nginx/sites-available/myapp.conf
   ```

6. nginx를 재시작한 후 상태를 확인한다.
   
   ```
   sudo systemctl restart nginx
   sudo systemctl status nginx
   ```
   
   ![](C:\Users\sevct\ssafy\2th\free\S06P31S202\README\nginx.png)

7. 외부 접근을 위해 방화벽엣 80 포트를 허가해둔다.
   
   ```
   sudo iptables -I INPUT 1 -p tcp --dport 80-j ACCEPT
   ```

8. [React를 Nginx웹 서버에 배포하기 | Hanumoka, IT Blog](https://www.hanumoka.net/2019/12/29/react-20191229-react-nginx-deploy/) 위 링크를 참조하여 작성함.
