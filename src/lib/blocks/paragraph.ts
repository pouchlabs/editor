
export function genParagraph(id,jq){
	//let c = import('')
	let p = document.createElement('div')
	p.classList.add('block')
	p.classList.add('paragraph')
    let pr = jq(p)
    pr.html(`
       <div class="block-head" dragable="true" >
         <button class="hint-bottom" aria-label="hi">
            b
         </button>
       </div>
       <p contenteditable="true">p</p>
       <div class="block-foot" >foot</div>
         
		`)
    pr.attr("type","paragraph")
    console.log(pr)


return p
}