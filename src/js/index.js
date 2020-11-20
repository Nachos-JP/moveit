"use strict";

import "../scss/style.scss";

export default class {
  constructor(element, options){
    this.options = {};

    if(this.initializeElement(element)){
      this.initializeOptions(options ?? {});
      this._setup();
    }
  }

  defaultOptions = {
    handle: false,
    handleText: "",
    handleWidth: "50px",
    handleHeight: "30px",
    handleBackground: "silver",
    handleTextColor: "black",
    handleCursor: "move",
    handleTextAlign: "center",
    handleFontSize: "15px",
  };

  initializeElement(element){
    if(typeof HTMLElement !== "undefined" && element instanceof HTMLElement){
      this.element = element;
      return true;
    }else if(typeof element === "string"){
      this.element = document.querySelector(element);

      if(this.element){
        return true;
      }else{
        console.error("Moveit Error - there are no element: ", element);
        return false;
      }
    }else{
      console.error("Moveit Error - invalid element: ", element);
      return false;
    }
  }

  initializeOptions(options){
    const keys = Object.keys(options);
    const defaultKeys = Object.keys(this.defaultOptions);

    keys.forEach(key=>{
      if(!defaultKeys.includes(key)){
        console.warn("Moveit Warn - invalid option: ", key);
      }
    })

    defaultKeys.forEach(key=>{
      if(keys.includes(key)){
        this.options[key] = options[key];
      }else{
        this.options[key] = this.defaultOptions[key];
      }
    })
  }

  _setup(){
    this.handleElem = this.options.handle ? this._createHandle() : this.element;
    this.target = this.options.handle ? this.handleElem.parentNode : this.element;
    this.handleElem.addEventListener("mousedown", this._mouseDown.bind(this), false);
  }

  _createHandle(){
    const handle = document.createElement("div");
    handle.textContent = this.options.handleText;
    handle.classList.add("moveit-handle");
    const handleStyle = {
      width: this.options.handleWidth,
      height: this.options.handleHeight,
      background: this.options.handleBackground,
      color: this.options.handleTextColor,
      cursor: this.options.handleCursor,
      "text-align": this.options.handleTextAlign,
      "font-size": this.options.handleFontSize,
      "line-height": this.options.handleHeight,
    };
    this._styleEditor(handle, handleStyle);
    this.element.appendChild(handle);

    return handle;
  }

  _mouseDown(e){
    this.x = e.clientX - (this.target.offsetLeft - this.target.offsetWidth/2);
    this.y = e.clientY - (this.target.offsetTop - this.target.offsetHeight/2);

    this.mouseMoveHandler = this._mouseMove.bind(this);
    this.mouseUpHandler = this._mouseUp.bind(this);
    document.body.addEventListener("mousemove", this.mouseMoveHandler, false);
    document.body.addEventListener("mouseup", this.mouseUpHandler, false);
    document.body.addEventListener("mouseleave", this.mouseUpHandler, false);
  }

  _mouseMove(e){
    const newStyle = {
      top: `${e.clientY - this.y + this.target.offsetHeight/2}px`,
      left: `${e.clientX - this.x + this.target.offsetWidth/2}px`,
    };
    this._styleEditor(this.target, newStyle);
  }

  _mouseUp(){
    document.body.removeEventListener("mousemove", this.mouseMoveHandler, false);
    document.body.removeEventListener("mouseup", this.mouseUpHandler, false);
    document.body.removeEventListener("mouseleave", this.mouseUpHandler, false);
  }

  _styleEditor(target, obj){
    Object.keys(obj).forEach(key=>{
      target.style[key] = obj[key];
    })
  }
};

