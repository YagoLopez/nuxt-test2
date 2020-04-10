<template>
  <div>
    hola: {{test}}<br>
    <client-only>
      <vue-json-pretty :data="mydata"/>
    </client-only>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class Vjsonpretty extends Vue {
    test = 'test';
    mydata = [1, 2, 3];
  }
</script>