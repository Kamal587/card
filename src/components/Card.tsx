import React from "react";
import card from "./../assets/card.png";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.wrap}>
      <img src={card} alt="" />
      <div className={style.textCard}>
        <div className={style.price}>$100</div>
        <div className={style.title}>Zebronics head phone</div>
        <div className={style.text}>
          A portable headphone with a battery life of 20 hours and IP67 rating.
          Comes with a 3 years warranty.
        </div>
        <div className={style.color}>Choose your colour</div>
        <div className={style.col}>
          <div className={style.col1}></div>
          <div className={style.col2}></div>
          <div className={style.col3}></div>
        </div>
        <div className={style.btn}>
          <button className={style.add}>Add to cart</button>
          <button className={style.buy}>Buy now</button>
        </div>
        <div className={style.reviews}>
          <a href="">Read reviews</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
