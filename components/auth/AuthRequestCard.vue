<template>
    <section class="p-6 sm:p-8">
        <FormKit type="text" label="Username" name="username" placeholder="username"
            validation="required:trim|alphanumeric|lowercase" required autocomplete="off" />
        <FormKit type="password" label="Password" name="password" placeholder="••••••••" validation="required:trim" required
            autocomplete="new-password" />
    </section>
</template>