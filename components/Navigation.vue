<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app dark color="primary" :right="setting.rightNav">
         <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app  dark color="primary">
      <v-app-bar-nav-icon v-if="!setting.rightNav" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-app-bar-nav-icon v-if="setting.rightNav" @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting:{
        rightNav:false
      },
      drawer: false,
      items: [
        {
          icon: "mdi-account-tie",
          title: "Profile",
          to: "/student/",
        },
        {
          icon: "mdi-pencil",
          title: "Tests",
          to: "/student/test",
        },
        {
          icon: "mdi-text-box-check",
          title: "Results",
          to: "/student/results",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Resources",
          to: "/student/resources",
        },
        {
          icon: "mdi-cog",
          title: "Settings",
          to: "/student/settings",
        },
      ],
      title: "examProject",
    }
  },
};
</script>

<style>
</style>