import React, { useState, useEffect } from "react";
import Chips from "./Chips";
import styles from "./Input.module.css";
// import styles from './chipfilter.module.css'

export default function ChipFilter(props) {
  const [chipclicked, setChipClicked] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);

  const clickeve = function (e) {
    if (e.target.checked == true) {
      setCheckedItems({});
    }
  };
  useEffect(() => {
    // 여기에 필터 넣어야됨

    // 객체의 키값의 value를 찾아내고 그 value가 true가 하나도 없을 경우에 전체를 클릭할 수 잇도록 제작
    const find = Object.keys(checkedItems).find(
      (key) => checkedItems[key] == true
    );

    if (find == undefined) {
      setChipClicked(true);
    }
    // 객체의 키값의 value를 찾아내고 어레이형태로 배출
    const filter = Object.keys(checkedItems).filter(
      (key) => checkedItems[key] == true
    );

    //정렬된 필터를 업로드 할 수 있는 함수를 제작하여 부모 컴포넌트로 전송
    props.updateFilter(filter);
    console.log(filter);

    // console.log(data);
    // console.log(checkedItems);
  }, [checkedItems]);

  const handleCheckboxChange = (item) => {
    setCheckedItems((items) => ({
      ...items,
      [item]: !items[item],
    }));
  };

  const list = props.data.map((item) => {
    return (
      <Chips
        key={item}
        name={props.name}
        text={item}
        value={item}
        checked={checkedItems[item]}
        onChange={(e) => {
          // console.log(e.target.checked);
          setChipClicked(false);
          handleCheckboxChange(item);
        }}
      ></Chips>
    );
  });

  return (
    <div className={styles.chiplists}>
      <span> {props.title}</span>
      <Chips
        checked={chipclicked}
        text={"전체"}
        name={props.name}
        value={"all"}
        onChange={(e) => {
          setChipClicked(!chipclicked);
          clickeve(e);
          // console.log(e.target.checked);
        }}
      />
      {list}
    </div>
  );
}
