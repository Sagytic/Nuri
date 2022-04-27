import React, { useState } from 'react';
import Input from '../../components/user/Input';
import Button from '../../components/user/Button';
import './User.css';

function SignUp() {

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  async function emailValidation() {
    if (email === "") {
      setEmailMessage("이메일을 입력해 주세요")
    } else if (!email.includes("@")) {
      setEmailMessage("이메일 양식에 맞게 입력해 주세요")
    } else {
      setEmailMessage("")
      return true
    }
  }
  
  async function nickNameValidation() {
    const nickNameCheck = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){2,20}$/;
    if (nickName === "") {
      setNickNameMessage("닉네임을 입력해 주세요")
    } else if (!nickNameCheck.test(nickName)) {
      setNickNameMessage("영문, 숫자, 한글로 이루어진 2~20자 사이로 입력해 주세요")
    } else {
      setNickNameMessage("")
      return true
    }
  }
  
  async function passwordValidation() {
    const passwordCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]){4,20}$/;
    if (password === "") {
      setPasswordMessage("비밀번호를 입력해 주세요")
    } else if (!passwordCheck.test(password)) {
      setPasswordMessage("비밀번호는 4~20자 사이의 영문/숫자를 조합해 주세요")
    } else {
      setPasswordMessage("")
      return true
    }
  }
  
  async function passwordConfrimValidation() {
    if (password !== passwordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다")
    } else {
      setPasswordConfirmMessage("")
      return true
    }
  }

  function deleteAll(event) {
    event.preventDefault();
    console.log("모두 지우기")
    setEmail("");
    setNickName("");
    setPassword("");
    setPasswordConfirm("");
    setEmailMessage("");
    setNickNameMessage("");
    setPasswordMessage("");
    setPasswordConfirmMessage("");
  }
  
  async function checkAll(event) {
    event.preventDefault();
    const emailCheck = await emailValidation();
    const nickNameCheck = await nickNameValidation();
    const passwordCheck = await passwordValidation();
    const passwordConfirmCheck = await passwordConfrimValidation();
    if (emailCheck && nickNameCheck && passwordCheck && passwordConfirmCheck) {
      console.log("회원가입 완료")
    } else {
      console.log("회원가입 실패")
    }
  }
  
  return (
    <div className="User">
      <div style={{ fontSize: "30px", fontWeight: "500" }}>회원가입</div>
      <form>
        <Input 
          type="email" 
          title="이메일(필수)" 
          setInput={setEmail} 
          value={email} 
          message={emailMessage}
          placeholder="이메일을 입력해 주세요" 
        />
        <Input 
          type="text" 
          title="닉네임(필수)" 
          setInput={setNickName} 
          value={nickName}
          message={nickNameMessage}
          placeholder="2~20자로 입력해 주세요" 
        />
        <Input 
          type="password" 
          title="비밀번호(필수)" 
          setInput={setPassword} 
          value={password}
          message={passwordMessage}
          placeholder="4~20자의 영문/숫자를 조합해 주세요" 
        />
        <Input 
          type="password" 
          title="비밀번호 확인(필수)" 
          setInput={setPasswordConfirm} 
          value={passwordConfirm}
          message={passwordConfirmMessage}
          placeholder="비밀번호를 한 번 더 입력해 주세요"  
        />
        <div className="User-button-group">
          <Button clickFunction={deleteAll} title="모두 지우기" type="cancel" />
          <Button clickFunction={checkAll} title="회원가입 하기" type="success" />
        </div>
      </form>
    </div>
  )
}

export default SignUp