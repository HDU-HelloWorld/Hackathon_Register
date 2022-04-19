<template>
    <div :class="selection">
      <input
      :type="type"
      required
      :rule="rule"
      v-model="content"
      @click="iptrad"
      >
      <div class="underline"></div>
      <label>{{label}}</label>
    </div>
</template>

<script>
export default {
  name: 'ipt',
  props: ['label', 'type', 'rule'],
  data () {
    return {
      content: '',
      selection: 'input-data'
    }
  },
  methods: {
    iptrad () {
      if (this.type === 'checkbox') {
        this.selection = 'checkst'
      }
    }
  }
}
</script>

<style>
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
    bottom: 10px;
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
.checkst{
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: #fff;
  border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
  margin-right: 22px;
  cursor: pointer;
}
.checkst input:checked+label::after{
    display: inline-block;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    bottom: 4px;
    background-color: rgba(56, 85, 127, 1);
}
</style>
