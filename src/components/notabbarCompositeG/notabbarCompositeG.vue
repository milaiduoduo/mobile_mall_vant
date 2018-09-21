<template>
<v-notabbar-group>
    <v-field-group>
        <slot></slot>
 </v-field-group>
</v-notabbar-group>
</template>

<script type="text/ecmascript-6">
import vNoTabbarGroup from "@/components/notabbarGroup/notabbarGroup";
import vFieldGroup from "@/components/fieldGroup/fieldGroup";
export default {
  name: "v-notabbar-composite-g",
  components: {
    [vNoTabbarGroup.name]: vNoTabbarGroup,
    [vFieldGroup.name]: vFieldGroup
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>
