<script lang="ts">
    import {onMount} from 'svelte';
    import Editor from '$lib/index.ts';
    import "$lib/poucheditor.css";
    onMount(()=>{
        let editor = new Editor({container:'#g',appid:'hhh'})
        console.log(editor)
    

    })

</script>
<div id="g" class="g"></div>
<div  id="g" class="gj"></div>