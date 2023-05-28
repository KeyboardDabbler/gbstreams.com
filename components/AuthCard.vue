<script setup lang="ts">
const inviteCode = ref('')
const userName = ref('')
const email = ref('')
const password = ref('')
const rememberMe = ref(false);
const isSignUp = ref(false)
const isLoading = ref(false);

</script>

<template>
  <section>
    <div class="mb-6 text-center">
      <a class="inline-block mb-6" href="#">
        <NuxtImg provider="cloudinary" src="/branding/banner-light_xgac6g.png" alt="GBstreams logo" class="h-16" />
      </a>
      <div v-if="!isSignUp">
        <h3 class="mb-4 text-gray-200 text-2xl md:text-3xl font-bold">Sign in to your account</h3>
      </div>
      <div v-if="isSignUp">
        <h3 class="mb-4 text-gray-200 text-2xl md:text-3xl font-bold">Join our community</h3>
        <p class="text-lg text-coolGray-500 font-medium">Start your demo version</p>
      </div>
    </div>
    <form @submit.prevent="() => (isSignUp ? signUp() : handleLogin())" action="" data-bitwarden-watching="1">
      <div v-if="isSignUp" class="mb-4">
        <label class="block mb-2 text-coolGray-800 font-medium" for="">Invite Code</label>
        <input
          class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-bluer focus:ring-opacity-50"
          type="inviteCode" placeholder="HGB34">
      </div>
      <div v-if="isSignUp" class="mb-4">
        <label class="block mb-2 text-coolGray-800 font-medium" for="">Username</label>
        <input
          class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-bluer focus:ring-opacity-50"
          type="username" placeholder="GBstreams" v-model="username" name="username">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-coolGray-800 font-medium" for="">Email</label>
        <input
          class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-bluer focus:ring-opacity-50"
          type="text" placeholder="user name" v-model="userName" name="userName">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-coolGray-800 font-medium" for="">Password</label>
        <input
          class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-bluer focus:ring-opacity-50"
          type="password" placeholder="************" v-model="password" name="password">
      </div>
      <div class="flex flex-wrap items-center justify-between mb-6">
        <div class="w-full md:w-1/2">
          <label class="relative inline-flex items-center">
            <input class="appearance-none" type="checkbox" v-model="rememberMe">

            <div class="absolute top-1/2 transform -translate-y-1/2 left-0">
              <Icon name="ic:round-radio-button-unchecked" size="25px" />
            </div>
            <span class="ml-7 text-xs text-coolGray-800 font-medium">Remember me</span>
          </label>
        </div>
        <div class="w-full md:w-auto mt-1"><a class="inline-block text-xs font-medium text-yellow hover:text-yellowf"
            href="#">Forgot your
            password?</a></div>
      </div>
      <button type="submit"
        class="inline-block py-3 px-7 mb-6 w-full text-base text-black font-medium text-center leading-6 bg-yellow hover:bg-yellowf focus:ring-2 focus:ring-bluer focus:ring-opacity-50 rounded-md shadow-sm flex justify-center"
        :disabled="isLoading">
        <span v-if="!isLoading && isSignUp"> Sign up </span>
        <span v-if="!isLoading && !isSignUp"> Log in </span>
        <span v-if="isLoading">
          <svg class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 018-8h-4a4 4 0 00-8 0H0a8 8 0 018 8v4a4 4 0 008 0h4a8 8 0 01-8 8v-4z">
            </path>
          </svg>

        </span>
      </button>
      <a href="#" class="text-center" @click.prevent="isSignUp = !isSignUp">
        <div v-if="isSignUp">
          <span class="text-xs font-medium">Already have an account?</span>
        </div>
        <div v-else>
          <span class="text-xs font-medium">Don’t have an account? </span>
          <span class="inline-block text-xs font-medium text-yellow">Sign up</span>
        </div>
      </a>
    </form>
  </section>
</template>
