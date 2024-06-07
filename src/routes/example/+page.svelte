<script lang="ts">
    import {onMount} from 'svelte';
    import Editor from '$lib/index.ts';
    import "$lib/poucheditor.css";
    onMount(()=>{
        let editor = new Editor({container:'.g'})
        console.log(editor)
    })

</script>
<div class="g"></div>
<div class="g"></div>