import jq from 'jquery';
import { checktype } from "./utils.ts";
function genHtml(){
  return `
  <div class="peditor full">
   <div class="pnav" >
     <button class="bi-paragraph pbtn brand" >
     <span class="hint--rigt" aria-label="Thank you!">paragraph</span>
     </button>
   </div>
   <div class='pcenter ' >
     <div class="pheader" >
     top
     </div>
     <div class="pcont" contenteditable >
      editor
     </div>
     <div class="pfooter" >
     foo
     </div>
   </div>
  </div>
  `
}
export default class Poucheditor{
 constructor(opts:object){
 if(opts.container){
    if(jq(opts.container).length > 0){
      this.$elements = jq(opts.container);
      //init
      let editors = this.$elements;
      editors.append(genHtml())
      //append buttons
      let btns = [{name:'paragraph',icon:"ba"}]
      

    }
 }
 }
}