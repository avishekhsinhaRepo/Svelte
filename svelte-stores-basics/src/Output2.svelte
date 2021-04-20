<script>
import valueStore from './value.store';
let _value=''
valueStore.subscribe(value =>{
    _value = value;
});
</script>
<p>OUTPUT 2: {_value} </p>