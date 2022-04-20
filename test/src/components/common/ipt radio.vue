<template>
    <div class="input-data">
      <input
      type="radio"
      required
      v-model="content"
      >
      <div class="underline"></div>
      <label>{{label}}</label>
    </div>
</template>

<script>
export default {
  name: 'ipt-i',
  props: ['label',  'rule'],
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style>
  /* .wrapper{
    width: 250px;
    background-color: #fff;
    padding: 25px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
} */
.input-data{
    position:relative;
    width: 100%;
    height: 40px;
}
.input-data input{
    width: 100%;
    height: 100%;
    border:none;
    outline: none;
    font-size: 17px;
    border-bottom: 2px solid #c0c0c0;
}
.input-data input:focus ~ label,
.input-data input:valid ~ label{
    transform: translateY(-25px);
    font-size: 15px;
    color: black;
    font-weight: bold;
}
.input-data label{
    position: absolute;
    bottom: 15px;
    left: 0px;
    color: #808080;
    pointer-events: none;
    transition: all 0.3s ease;
}
.input-data .underline{
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    background-color: #2c6fdb;
    transform: scaleX(0);
    transition: all 0.3s ease;
}
.input-data input:focus ~ .underline,
.input-data input:valid ~ .underline{
    transform: scaleX(1);
}
</style>
