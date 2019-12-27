<template>
  <div class="cate-page">
    <!-- 搜索框 -->
    <div class="search-bar">
      <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
        @cancel="onCancel"
      />
    </div>
    <div class="cate-content">
      <div class="cate-title"></div>
      <div class="cate-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    onCancel() {
      this.searchValue = ''
    },
    onSearch() {
      console.log('search')
    }
  }
}
</script>

<style lang="scss">


</style>