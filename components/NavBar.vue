<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed" class="nav-bar">
    Drag me! I
  </div>
</template>

<style>
.nav-bar {
  height: 40px;
  overflow: hidden;
  pointer-events: auto;
  cursor: pointer;
  background: linear-gradient(180deg, #13151A 0%, rgba(19, 21, 26, 0.88) 100%);
  border: 1px solid #343841;
  border-radius: 9999px;
}

.nav-bar:hover{
  box-shadow: 0px 0px 0px 0px rgba(19, 21, 26, 0.30), 0px 1px 2px 0px rgba(19, 21, 26, 0.29), 0px 4px 4px 0px rgba(19, 21, 26, 0.26), 0px 10px 6px 0px rgba(19, 21, 26, 0.15), 0px 17px 7px 0px rgba(19, 21, 26, 0.04), 0px 26px 7px 0px rgba(19, 21, 26, 0.01);

}
</style>
