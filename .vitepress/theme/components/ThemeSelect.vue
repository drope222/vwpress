<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "../composables/theme"
import { WDropdown, WMenu, WButton } from "vue-windi";
import { IconColorSwatch } from "./icons";

const { changeTheme } = useTheme()

</script>
<template>
  <WDropdown placement="bottom-end">
    <template #trigger="{ active }">
      <WButton variant="transparent" color="secondary" class="stroke-base-text">
        <IconColorSwatch />
      </WButton>
    </template>

    <!-- horizontal="md" -->
    <WMenu horizontal="md" compact rounded class="w-auto !bg-base-200">
      <WButton menu-item @click="changeTheme('theme-default')"
        ><span class="theme-blue rounded-[0.5rem] bg-blue-700 h-7 w-7"></span>
      </WButton>
      <WButton menu-item @click="changeTheme('theme-teal')"
        ><span
          class="theme-teal rounded-$rounded-btn bg-teal-700 h-7 w-7"
        ></span>
      </WButton>
      <WButton menu-item @click="changeTheme('theme-rose')"
        ><span
          class="theme-rose rounded-$rounded-btn bg-rose-700 h-7 w-7"
        ></span>
      </WButton>
      <WButton menu-item @click="changeTheme('theme-violet')"
        ><span
          class="theme-violet rounded-$rounded-btn bg-violet-700 h-7 w-7"
        ></span>
      </WButton>
      <WButton menu-item @click="changeTheme('theme-orange')"
        ><span
          class="theme-orange rounded-$rounded-btn bg-orange-700 h-7 w-7"
        ></span>
      </WButton>
    </WMenu>
  </WDropdown>
</template>
