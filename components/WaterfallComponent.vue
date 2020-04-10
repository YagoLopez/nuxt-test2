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
    </waterfall-slot>
  </waterfall>
</template>

<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import Waterfall from 'vue-waterfall/lib/waterfall';
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';

  @Component({components: {Waterfall, WaterfallSlot}})
  export default class WaterfallPage extends Vue {
    @Prop() items;
  }
</script>