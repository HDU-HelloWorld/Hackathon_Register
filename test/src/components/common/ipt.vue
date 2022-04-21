<template>
    <div :class="selection">
      <input
      :type="type"
      required
      :rule="rule"
      v-model="content"
      @click="SendContent"
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
      selection: 'input-data',
      ipType: this.type
    }
  },
  methods: {
    iptrad () {
      if (this.ipType === 'checkbox') {
        this.selection = 'checkst'
      }
    },
    SendContent () {
      this.$bus.$emit('chaocao', !this.content)
    }
  },
  mounted: function () {
    this.iptrad()
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
    bottom: -2px;
    height: 2px;
    width: 100%;
    background-color:   #2c6fdb;
    transform: scaleX(0);
    transition: all 0.3s ease;
}
.input-data input:focus ~ .underline,
.input-data input:valid ~ .underline{
    transform: scaleX(1);
}

.checkst{
    position:relative;
    left: 50px ;
    width: 100%;
    height: 40px;
}
.checkst input{
    margin: 10px 10px 0px 60px;
    height: 15px;
    zoom:120%;
}
.checkst label{
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    pointer-events: none;
    transition: all 0.3s ease;
}
.checkst input:valid ~ label{
    font-size: 15px;
    color: black;
    font-weight: bold;
}
</style>
