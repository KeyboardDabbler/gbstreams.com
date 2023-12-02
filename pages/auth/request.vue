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
    <NuxtLayout pageMessgae="Request to join GBstreams">
        <section>
            <AuthRequestCard />
        </section>
    </NuxtLayout>
</template>
