import React from "react";
import styled from "@emotion/styled";

function SelectImg({ 
  tempImg, 
  selectProfileImg, 
  profileImgRef, 
  changeProfileImg,
  imgWidth,
  imgHeight,
  imgBorderRadius,
  buttonFlexDirection,
}) {

  const SelectImg = styled.li`
    width: 100%;
    height: 200px;
    border-style: none none solid;
    border-width: 1px;
    border-color: rgb(219, 219, 219);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 20px;
  `

  const Img = styled.img`
    width: ${imgWidth};
    height: ${imgHeight};
    border-radius: ${imgBorderRadius};
    border-style: solid;
    border-width: 2px;
    border-color: rgb(219, 219, 219);
  `

  const ButtonGroup = styled.div`
    display: flex;
    flex-direction: ${buttonFlexDirection};
    column-gap: 20px;
    row-gap: 5px;
  `

  const Button = styled.button`
    font-weight: 500;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    border-style: solid;
    border-width: 2px;
    border-color: rgb(219, 219, 219);
    font-family: 'Noto Sans KR', sans-serif;
    &:hover {
      cursor: pointer;
      color: #FFD644;
      border-color: #FFD644;
    }
  `

  return (
    <SelectImg>
      <Img 
        src={typeof(tempImg) === "string" ? tempImg : URL.createObjectURL(tempImg)}
        alt="프로필 이미지" 
      />
      <ButtonGroup>
        <Button>
          기본 이미지에서 고르기
        </Button>
        <Button onClick={() => selectProfileImg()}>
          내 컴퓨터에서 고르기
        </Button>
        <input 
          ref={profileImgRef}
          onChange={(event) => changeProfileImg(event)}
          type="file" 
          accept="image/*" 
          style={{ display: "none" }}
        />
      </ButtonGroup>
    </SelectImg>
  )
}

export default SelectImg;