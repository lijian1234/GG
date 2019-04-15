<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <!-- {{item.content}} -->
        <!-- <router-view name="homeComponent" v-if="item.name==='1'"></router-view> -->
        <router-view name="_1" v-if="item.name==='1'"></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import homeComponent from '../HomeComponent'; 
  import _1 from './tabs/_1.vue';
  export default {
    components: {
      // homeComponent,
      _1
    },
    data() {
      return {
        editableTabsValue: '1',
        editableTabs: [{
          title: '1',
          name: '1',
          content: 'Tab 1 content'
        }],
        tabIndex: 1
      }
    },
    watch: {
      '$route' (to, from) {
        let path = _.split(to.path, '/', 3)[2];
        this.editableTabsValue = path;
        if(_.findIndex(this.editableTabs, o=>o.name===path) === -1) {
          this.addTab(_.split(to.path, '/', 3)[2], _.split(to.path, '/', 3)[2]);
        } 
      }
    },
    methods: {
      addTab(targetName, title='1') {
        // let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: title,
          name: title,
          content: 'New'+ title +'content'
        });
        this.editableTabsValue = title;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>