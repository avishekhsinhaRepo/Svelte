import Input from './Input.svelte';
import Output from './Output.svelte';
const inputApp = new Input({
	target: document.querySelector("#inputData")
	
});

 

document.querySelectorAll(".outputData").forEach(element => {
    if (!element.hasChildNodes()) {
      new Output({
        target: element
      });
    }
  });

