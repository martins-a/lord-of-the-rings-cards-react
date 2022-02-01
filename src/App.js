import React, { useContext, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

import AttributeSphere from "./AttributeSphere";
import "./styles.css";

const imageUrl =
  "https://quintacapa.com.br/wp-content/uploads/2019/08/SauronTheBrightLordMissionImage-destaque.png";

export default function App() {
  return (
    <div className="App">
      <Card name="Sauron" maxHealth="20" title="Keeper of the One Ring" />
    </div>
  );
}

const ManaAndHealthRegion = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: flex-end;
`;

const CardWrapper = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  background-image: url("https://www.transparenttextures.com/patterns/old-wall.png");
  background-color: rgb(18 3 3);
  border: 1px solid gray;
  border-radius: 4px;
`;

const AlignLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ContentRegion = styled.div`
  padding: 0px 20px;
`;

const CustomCardBorder = styled.div`
  padding: 15px;
  width: 320px;
  height: 420px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    242deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(33, 16, 16, 1) 94%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 4px;
`;

const CardDescription = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

const CardName = styled.div`
  color: rgb(255 219 164);
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  margin-right: 5px;
`;

const CardTitle = styled.div`
  color: rgb(255 219 164);
  font-weight: 300;
  display: inline-block;
`;

const CardInfo = styled.div`
  background-color: rgb(12 12 12 / 75%);
  height: 70px;
  color: white;
  padding: 10px;
  text-align: left;
  font-size: 12px;
`;

function Card(props) {
  const { maxHealth, maxMana, name = "", title = "" } = props;

  const [currentHealth, setCurrentHealth] = useState(maxHealth);

  return (
    <CustomCardBorder>
      <CardWrapper>
        <CardDescription>
          <CardName>{name}</CardName>
          <CardTitle>( {title} )</CardTitle>
        </CardDescription>

        <div className="image">
          <img alt="card_image" src={imageUrl} />
        </div>
        <ContentRegion>
          <AlignLeft>
            <ManaAndHealthRegion>
              <Counter waveColor="red" maxValue={maxHealth} color="#ff7272" />
              <Counter waveColor="cyan" maxValue={maxMana} color="#6fc3ff" />
            </ManaAndHealthRegion>
          </AlignLeft>
          <CardInfo>
            Sauron (Quenya: IPA [ˈsaʊron] or [ˈθaʊron]), the eponymous Lord of
            the Rings, originally Mairon, was a fallen Maia, creator of the One
            Ring, a gifted student of Vala Aulë the Smith and lieutenant of
            Morgoth
          </CardInfo>
        </ContentRegion>
      </CardWrapper>
    </CustomCardBorder>
  );
}

const CounterWraper = styled.div`
  display: flex;
  font-weight: 600;
  color: ${(props) => props.color || "black"};
  div {
    margin-left: 2px;
  }
`;

const ArrowDecreaseIncrease = styled.div``;

const arrowSharedStyle = css`
  filter: invert(1);
  width: 13px;
  height: 13px;
  background-image: url("https://cdn-icons-png.flaticon.com/512/57/57055.png");
  background-repeat: no-repeat;
  border: none;
  background-size: cover;
`;

const ArrowDown = styled.img`
  ${arrowSharedStyle}
`;

const ArrowUp = styled.img`
  ${arrowSharedStyle}
  transform: rotate(180deg);
`;

const SphereShape = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: flex-end;
`;

const SvgSpherePath = styled.path`
  stroke: none;
  fill: red;
`;

function Sphere(props) {
  return (
    <SphereShape>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMaxYMid slice">
        <SvgSpherePath d="M0,32L80,69.3C160,107,320,181,480,186.7C640,192,800,128,960,128C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></SvgSpherePath>
      </svg>
    </SphereShape>
  );
}

function Counter(props) {
  const { maxValue, color, waveColor } = props;

  const [currentValue, setCurrentValue] = useState(maxValue);

  const decreaseValue = () => {
    if (currentValue) {
      setCurrentValue(currentValue - 1);
    }
  };

  const increaseValue = () => {
    if (currentValue < maxValue) {
      setCurrentValue(currentValue + 1);
    }
  };

  return (
    <CounterWraper color={color}>
      <ArrowDecreaseIncrease>
        <ArrowUp onClick={increaseValue} />
        <ArrowDown onClick={decreaseValue} />
      </ArrowDecreaseIncrease>
      <div>{currentValue ? currentValue : "0"}</div>
      <div>/ {maxValue ? maxValue : "0"} </div>
      <AttributeSphere waveColor={waveColor} />
    </CounterWraper>
  );
}
