<script setup lang="ts">
const links = [{
    label: 'Clients',
    icon: 'i-heroicons-book-open',
    to: '/dashboard/clients'
}, {
    label: 'Documentation',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/docs/introduction'
}, {
    label: 'Request',
    icon: 'i-heroicons-rocket-launch',
    to: 'https://request.gbstreams.com',
    target: '_blank',
}, {
    label: 'Web App',
    icon: 'i-heroicons-rocket-launch',
    to: 'https://play.gbstreams.com',
    target: '_blank',
}]

const items = [
    [{
        label: 'ben@example.com',
        slot: 'account',
        disabled: true
    }], [{
        label: 'Settings',
        icon: 'i-heroicons-cog-8-tooth'
    }], [{
        label: 'Documentation',
        icon: 'i-heroicons-book-open'
    }, {
        label: 'Changelog',
        icon: 'i-heroicons-megaphone'
    }, {
        label: 'Status',
        icon: 'i-heroicons-signal'
    }], [{
        label: 'Sign out',
        icon: 'i-heroicons-arrow-left-on-rectangle'
    }]
]
</script>

<template>
    <UHeader :links="links">
        <template #logo>
            <NavLogo image-class="h-9 w-auto" />
        </template>

        <template #right>
            <UDocsSearchButton label="" />
            <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
                :popper="{ placement: 'bottom-start' }">
                <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

                <template #account="{ item }">
                    <div class="text-left">
                        <p>
                            Signed in as
                        </p>
                        <p class="truncate font-medium text-gray-900 dark:text-white">
                            {{ item.label }}
                        </p>
                    </div>
                </template>

                <template #item="{ item }">
                    <span class="truncate">{{ item.label }}</span>

                    <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                </template>
            </UDropdown>
        </template>

        <template #panel>
            <UNavigationTree :links="links" />
        </template>
    </UHeader>
</template>
