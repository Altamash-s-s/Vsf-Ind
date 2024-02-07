<template>
    <div id="new">
        <div>
            <h2 class="heading">Hello World</h2>
        </div>


        <div class="form-testing">
                 <CareerForm />
        </div>

        


    </div>

   

</template>
<script>
import CareerForm from '../forms/CareerForm.vue';
export default {
    name:'New',
    components:{
        CareerForm,
    }
}


</script>

<style scoped>

.heading{
    padding-top: 150px;
}
</style>