import React from "react";
import "./Modal.css";
import CommentInput from "../component/Comment/CommentInput";
import CommentList from "../component/Comment/CommentList";

export default function Modal(props) {
  return (
    <div className="ModalBackground">
      <div className="Modal_Wrapper">
        <div className="contentWrapper">
          <div className="contenthead">
            <div className="img"></div>

            <div className="textcon">
              <span className="title">{props.title}</span>
              <span className="studentinfo">
                {props.type === "Now" ? props.studentinfo : ""}
              </span>
            </div>
          </div>

          <img src={props.imgsrc} alt="" />

          <div className="comment_Container">
            <CommentList comments={props.comments} />
            <CommentInput
              value={props.value}
              onChange={props.onChange}
              reply={props.reply}
            />
          </div>
        </div>

        <div className="floatBtncon"></div>
      </div>
      <div className="Modalfull" onClick={props.onClick}></div>
    </div>
  );
}
