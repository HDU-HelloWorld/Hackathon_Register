<template>
  <div class="wrapper">
    <div class="input-data">
      <input
      :type="type"
      required
      :rule="rule"
      v-model="content"
      >
      <div class="underline"></div>
      <label>{{label}}</label>
    </div>
</div>
</template>

<script>
export default {
  name: 'ipt',
  props: ['label', 'type', 'rule'],
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style>
  .wrapper{
    width: 450px;
    background-color: #fff;
    padding: 40px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
}
.wrapper .input-data{
    position:relative;
    width: 100%;
    height: 40px;
}
.wrapper .input-data input{
    width: 100%;
    height: 100%;
    border:none;
    outline: none;
    font-size: 17px;
    border-bottom: 2px solid #c0c0c0;
}
.wrapper .input-data input:focus ~ label,
.wrapper .input-data input:valid ~ label{
    transform: translateY(-25px);
    font-size: 15px;
    color: black;
    font-weight: bold;
}
.wrapper .input-data label{
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    pointer-events: none;
    transition: all 0.3s ease;
}
.wrapper .input-data .underline{
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    background-color: #2c6fdb;
    transform: scaleX(0);
    transition: all 0.3s ease;
}
.wrapper .input-data input:focus ~ .underline,
.wrapper .input-data input:valid ~ .underline{
    transform: scaleX(1);
}
</style>
