<script setup lang="ts">
const inviteCode = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const isSignUp = ref(false)

// const { signIn } = useAuth()

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
    <form @submit.prevent="() => (isSignUp ? signUp() : signIn())" action="" data-bitwarden-watching="1">
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
          type="username" placeholder="GBstreams">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-coolGray-800 font-medium" for="">Email</label>
        <input
          class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-bluer focus:ring-opacity-50"
          type="username" placeholder="name@email.com">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-coolGray-800 font-medium" for="">Password</label>
        <input
          class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-bluer focus:ring-opacity-50"
          type="password" placeholder="************">
      </div>
      <div class="flex flex-wrap items-center justify-between mb-6">
        <div class="w-full md:w-1/2">
          <label class="relative inline-flex items-center">
            <input class="appearance-none" type="checkbox">

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
        class="inline-block py-3 px-7 mb-6 w-full text-base text-black font-medium text-center leading-6 bg-yellow hover:bg-yellowf focus:ring-2 focus:ring-bluer focus:ring-opacity-50 rounded-md shadow-sm">
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
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
