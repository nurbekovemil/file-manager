<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import UserAuthForm from '@/components/AuthForm.vue'
</script>

<template>
  <div class="md:hidden">
    <VPImage
      alt="Authentication"
      width="1280"
      height="1214" class="block" :image="{
        dark: '/examples/authentication-dark.png',
        light: '/examples/authentication-light.png',
      }"
    />
  </div>

  <div class="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="mr-2 h-6 w-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        File manager
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            The project was created as part of my training and practice in development. The file manager is designed to efficiently manage files and folders, with a focus on simplicity and convenience.          </p>
          <footer class="text-sm">
            <a
            href="https://github.com/nurbekovemil"
            target="_blank"
            class="underline underline-offset-4"
          >
            GitHub: @nurbekovemil
          </a> 
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            Sign in to your account
          </h1>
          <p class="text-sm text-muted-foreground">
            Enter your username and password below to log in to your account</p>
        </div>
        <UserAuthForm />
        <p class="px-8 text-center text-sm text-muted-foreground">
            Demo username: Bob, password: Bob_09
        </p>
      </div>
    </div>
  </div>
</template>