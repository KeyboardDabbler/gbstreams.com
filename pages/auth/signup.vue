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
    <NuxtLayout pageMessgae="Join the GBstreams Server">
        <section>
            <AuthSignupCard />
        </section>
    </NuxtLayout>
</template>
