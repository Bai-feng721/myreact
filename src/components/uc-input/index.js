import React from "react";
import styles from './uc-input.module.css';
import propTypes from 'prop-types';
import renderSpan from "./renderSpan";
export function UcInput ({multi,model,type,label,style}){
  function renderInput(){
    let inputEle = null;
    if (!model){
      inputEle = (
        <div className={styles.ucInput} style={style}>
          <input type={type} defaultValue="" style={{paddingLeft:label?'1.24rem':'0.24rem'}}/>
         { renderSpan(label)}
        </div>
      );
      return inputEle;
    }
    let {name,value,onChange} = model;

    inputEle = (
      <div className={styles.ucInput} style={style}>
        <input type={type}
        value={value}
        onChange={onChange}
        name={name}
        style={{paddingLeft:label?'1.24rem':'0.24rem'}}/>
        {renderSpan(label)}
      </div>
    );
    return inputEle;
  }
  function renderTextarea(){
    let multiEle = null;
    if (!model){
      multiEle = (
        <div>
          {renderSpan(label)}
          <textarea></textarea>
        </div>
      );
      return multiEle
    }
    let {name,value,onChange} = model;
    multiEle = (
      <div>
        {renderSpan(label)}
        <textarea value={value}
        onChange={onChange}
        name={name}></textarea>
      </div>
    );
    return multiEle;
  }
  return  multi ? renderTextarea():renderInput();
}

  UcInput.defaultProps ={
    type:'text',
    model:null,
    multi:false,
    label:'',
    style:{}
  };
UcInput. propsTypes={
    type:propTypes.string,
    model:propTypes.shape({
      name:propTypes.string.isRequired,
      value:propTypes.string.isRequired,
      onChange:propTypes.func.isRequired
    }),
    multi: propTypes.bool,
    label: propTypes.string,
    style:propTypes.object
  };
  