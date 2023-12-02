<script>
definePageMeta({
    layout: "card",
    auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/dashboard/profile",
  },
});
</script>

<template>
    <NuxtLayout pageMessgae="Login with your account">
        <section>
            <AuthLoginCard />
        </section>
    </NuxtLayout>
</template>
