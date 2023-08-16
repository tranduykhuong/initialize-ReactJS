import React from "react";
import { LoadingDonut } from "../loading/Loading";
import "./ButtonCT.css";

const ButtonCT = (props) => {
  const {
    content,
    iconLeft,
    iconRight,
    loading,

    disabled,
    block,
    large,
    medium,
    small,

    borderRadius,
    outlineBtn,

    primary,
    redLinear,
    greenLinear,

    className,

    ...passProps
  } = props;

  const classProps = Object.keys(props)
    .map((el) => (props[el] === true ? el : ""))
    .join(" ");

  return (
    <button
      className={`
      my-btn 
      ${classProps}
      ${className}
    `}
      {...passProps}
    >
      {loading ? (
        <div className="my-btn__loading">
          <LoadingDonut small />
        </div>
      ) : (
        <>
          {iconLeft && <img className='icon-left' src={iconLeft} alt='iconLeft' />}
          <span className={"my-btn__content"}>{props.children || content}</span>
          {iconRight && <img className='icon-right' src={iconRight} alt='iconRight' />}
        </>
      )}
    </button>
  );
};

export default ButtonCT;