<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'
import { LucideInspectionPanel } from 'lucide-vue-next'
import { GithubLogoIcon } from '@radix-icons/vue'
import { ref } from 'vue'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email">
            Email
          </Label>
          <Input
            id="username"
            placeholder="username"
            type="username"
            auto-capitalize="none"
            auto-complete="username"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-1">
          <Label class="sr-only" for="email">
            Password
          </Label>
          <Input
            id="password"
            placeholder="password"
            type="password"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <LucideInspectionPanel v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
          Sign In
        </Button>
      </div>
    </form>
  </div>
</template>