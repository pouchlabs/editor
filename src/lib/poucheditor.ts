import jq from 'jquery';
import {nanoid} from "nanoid";
import Sortable from 'sortablejs';
import { checktype } from "./utils.ts";
import {genParagraph} from "./blocks/paragraph.ts";
function genHtml(){
  return `
  <div class="peditor full">
   <div class="pnav" >
    <div class="pnbtns">
    
     </div>
   </div>
   <div class='pcenter ' >
     <div class="pheader" >
     top
     </div>
     <div class="pcont">
      editor
     </div>
     <div class="pfooter" >
     foo
     </div>
   </div>
  </div>
  `
}

function appendParagraph(editor){
let p = `
  <div>
    p
  </div>
`
 editor.append(p)
}
export default class Poucheditor{
 constructor(opts:object){
  if(!opts.appid && opts.container)return;
 if(typeof opts.appid === "string" && opts.appid.length > 0 && typeof opts.container === "string" && opts.container.length > 0 && opts.container.startsWith("#")){
    if(jq(opts.container).length > 0){
      this.$element = jq(opts.container);
     
    }
     //init
      let editors = this.$element;
      editors.append(genHtml())
     
    var sortable = Sortable.create(document.querySelector('.pcont'), {
  group: "name",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
  sort: true,  // sorting inside list
  delay: 0, // time in milliseconds to define when the sorting should start
  delayOnTouchOnly: false, // only delay if user is using touch
  touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
  disabled: false, // Disables the sortable if set to true.
  store: null,  // @see Store
  animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
  easing: "cubic-bezier(1, 0, 0, 1)",
 // ghostClass: 'brand',
 dragClass: "brand",
  dragoverBubble: true,
});
      //append buttons
      let btns = [{name:'paragraph',icon:"bi-paragraph",action:editors.append('hi')}]
      btns.forEach(btn=>{
        if(editors.find('.pnbtns').length >0){
          let ed = editors.find('.pnbtns')
            switch(btn.name){
              case 'paragraph':
               let pbtn = document.createElement('button');
               pbtn.classList.add('brand');
               pbtn.classList.add('pbtn');
               pbtn.classList.add(`${btn.icon}`);
               
               ed.append(pbtn)
               //add func
               jq(pbtn).on('click',(e)=>{
                //appendParagraph(editors)
                let id = nanoid(16)
              
                editors.find('.pcont').append(genParagraph(id,jq))
               })

               break
              ;
            }

        }
      })

    
 }
 }
}