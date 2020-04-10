<style scoped>
  .cell {
    background: aquamarine;
    height: 500px;
  }
</style>
<template>
  <client-only>
<!--
    <waterfall :line-gap="200" :watch="items">
      &lt;!&ndash; each component is wrapped by a waterfall slot &ndash;&gt;
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
      >
        <div class="cell">hola</div>
      </waterfall-slot>
    </waterfall>
-->
    <waterfall
      line="h"
      line-gap="100"
      min-line-gap="10"
      max-line-gap="220"
      :watch="items"
      ref="waterfall"
      align="center"
    >
      <waterfall-slot
        v-for="(item, index) in items"
        width="50"
        height="50"
        :order="item.id"
        :key="item.id"
        >
        <div class="cell">hola</div>
      </waterfall-slot>
    </waterfall>
  </client-only>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class WaterfallPage2 extends Vue {
    items = [
      {width: 100, height: 100, id: 1},
      {width: 100, height: 100, id: 2},
      {width: 100, height: 100, id: 3},
    ];
  }
</script>