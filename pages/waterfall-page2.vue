<template>
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
      &lt;!&ndash;
        your component
      &ndash;&gt;
      <h1>hola</h1>
    </waterfall-slot>
  </waterfall>
-->
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  // import Waterfall from 'vue-waterfall/lib/waterfall';
  // import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';
  // import { Waterfall, WaterfallSlot } from 'vue-waterfall';


  @Component({components: {}})
  export default class WaterfallComponent extends Vue {
    items = [
      {width: 10, height: 10, id: 1}
    ];
  }
</script>