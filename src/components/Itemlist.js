import React from "react";
import "./itemlist.css";
const Itemlist = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="items-list" key={item.id}>
          <div className="item-lt">
            <div>제목: {item.title}</div>
            <div>가격: {item.price} 원</div>
            <div>유형: {item.type}</div>
          </div>

          <div className="item-rt">
            <div>날짜: {item.date.toLocaleDateString()}</div>
            <div>메모: {item.memo}</div>
            <div>재구매 여부: {item.rebuy ? "예" : "아니오"}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Itemlist;
