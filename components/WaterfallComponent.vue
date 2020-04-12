<template>
  <waterfall :line-gap="200" :watch="items">
    <!-- each component is wrapped by a waterfall slot -->
    <waterfall-slot
      v-for="(item, index) in items"
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="item.id"
    >
      <!--
        your component
      -->
      <h1>hola</h1>
    </waterfall-slot>
  </waterfall>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  // import Waterfall from 'vue-waterfall/lib/waterfall';
  // import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';
  // import { Waterfall, WaterfallSlot } from 'vue-waterfall';


  // @Component({components: {Waterfall, WaterfallSlot}})
  export default class WaterfallComponent extends Vue {
    @Prop() items: any;
  }
</script>