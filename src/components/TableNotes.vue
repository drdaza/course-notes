<script setup>
import { computed } from 'vue';
const props = defineProps({
    name: {
        type: String,
        default: null,
    },
    courses: {
        type: String,
        default: null,
    },
    note: {
        type: Number,
        default: null,
    }
})
const rank = computed(() =>{
    /* return{
        /* hola! dejo esto comentado porque quiero preguntar,
        ¿por qué no me funciona el retorno?
        en este caso retorna un bojeto 
        'Muy deficiente' :  props.note <= 3,
        'Insuficiente' : props.note > 3 && props.note <= 5,
        'Suficiente' : props.note > 5 && props.note <= 6,
        'Bien' : props.note > 6 && props.note <= 7,
        'Notable' : props.note > 7 && props.note <= 9,
        'Sobresaliente' : props.note > 9 && props.note <= 10
    } */
    if(props.note <= 3){
        return 'Muy deficiente';
    }
    if(props.note > 3 && props.note <= 5){
        return 'Insuficiente';
    }
    if(props.note > 5 && props.note <= 6){
        return 'Suficiente';
    }
    if(props.note > 6 && props.note <= 7){
        return 'Bien';
    }
    if(props.note > 7 && props.note <= 9){
        return 'Notable';
    }
    if(props.note > 9 && props.note <= 10){
        return 'Sobresaliente';
    }
});
</script>
<template >
    
    <tr>
        <th>{{ name }}</th>
        <td>{{ courses }}</td>
        <td>{{ rank }}</td>
    </tr>
</template>
<style lang="scss" scoped>
@use "../assets/sass/main" as *;
td{
    text-align: center;
    border: solid $third-color;
}
th{
    border: solid $third-color;
}

</style>