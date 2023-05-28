import React from "react";
import styles from "./CommentInput.module.css";


function CommentInput(props) {
    return (
      <div className={styles.Input_Wrapper}>
      <form
      className={styles.CommentInput}>
      <textarea
        
        style={{ height: props.height + 'px' }}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder || 'Placeholder'} 
      />
      <button></button>
      </form>
      </div>
      
    );
  }


  
export default CommentInput
 