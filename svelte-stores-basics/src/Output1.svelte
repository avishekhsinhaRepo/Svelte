<script>
import valueStore from './value.store';
let _value='';
valueStore.subscribe(value =>{
    _value = value;
});
</script>
<p>OUTPUT 1:  {_value} </p>