"use strict";

const Moveit = class {
  constructor(element, options){
    this.options = {};

    if(this.initializeElement(element)){
      this.initializeOptions(options ?? {});
    }
  }

  defaultOptions = {

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

    keys.forEach(key=>{
      if(typeof this.defaultOptions[key] === "undefined"){
        console.warn("Moveit Warn - invalid option: ", key);
      }
    })

    Object.keys(this.defaultOptions).forEach(key=>{
      if(keys.includes(key)){
        this.options[key] = options[key];
      }else{
        this.options[key] = this.defaultOptions[key];
      }
    })
  }
};

export {Moveit as default, Moveit}
