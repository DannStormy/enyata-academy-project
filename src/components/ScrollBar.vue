<template>
  <div class="scrollbar"></div>
</template>

<script>
export default {
  name: "ScrollBar",
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #cdcfd6;
  margin-top: 85px;
  margin-bottom: 85px;
  border-radius: 17px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #031131;
  height: 66.42px;
  border-radius: 17px;
  opacity: 0.7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>