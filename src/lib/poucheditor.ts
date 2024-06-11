import jq from 'jquery';
import {nanoid} from "nanoid";
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
     
     if(document){
        import("./plugins/dragula/dragula.min.js").then(drag=>{
            dragula([document.querySelector(".pcont")],{
  //   isContainer: function (el) {
  //   return false; // only elements in drake.containers will be taken into account
  // },
  moves: function (el, source, handle, sibling) {
    console.log(el,sibling,handle)
    return true; // elements are always draggable by default
  },
   invalid: function (el, handle) {
    return false; // don't prevent any drags from initiating by default
  },
  direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
  copy: false,                       // elements are moved by default, not copied
  copySortSource: false,             // elements in copy-source containers can be reordered
  revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
  removeOnSpill: false,              // spilling will `.remove` the element, if this is true
  mirrorContainer: document.querySelector('.pcont'),    // set the element that gets mirror elements appended
  ignoreInputTextSelection: true,     // allows users to select input text, see details below
  slideFactorX: 0,               // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
  slideFactorY: 0,
            })
            console.log('dra')
        })
      
      }
  
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