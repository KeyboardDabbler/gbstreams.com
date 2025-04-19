<script>
export default {
    data() {
        return {
            recommendedFilter: 'recommended',
            deviceTypeFilter: 'all',
            platformFilter: 'all',
            clients: [
                {
                    name: 'GBstreams Web',
                    description: 'Web Client for GBstreams.',
                    tag: "Official GBstreams",
                    deviceType: [
                        "Desktop",
                        "Mobile"
                    ],
                    platformType: "Browser",
                    recommended: true,
                    icon: "mdi:internet",
                    projectLink: 'https://gitea.keyboarddabbler.com/GBstreams/gbstreams-webPlayer',
                    projectText: 'Gitea',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://play.gbstreams.com',
                    downloadText: 'Open in Browser'
                },
                {
                    name: 'GBstreams Vue',
                    description: 'A modern web client for GBstreams on Vue.',
                    tag: "Official GBstreams Beta",
                    deviceType: [
                        "Desktop",
                        "Mobile"
                    ],
                    platformType: "Browser",
                    recommended: true,
                    icon: "mdi:internet",
                    projectLink: 'https://gitea.keyboarddabbler.com/GBstreams/gbstreams-vuePlayer',
                    projectText: 'Gitea',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://vue.gbstreams.com',
                    downloadText: 'Open in Browser'
                },
                {
                    name: 'Infuse',
                    description: 'A third-party client for iOS, iPadOS, and tvOS devices.',
                    tag: "Third Party",
                    deviceType: [
                        "Mobile",
                        "TV"
                    ],
                    platformType: [
                        "IOS",
                        "tvOS"
                    ],
                    recommended: false,
                    icon: "TvosIcon",
                    iconTwo: "mdi:apple-ios",
                    projectLink: 'https://firecore.com/infuse',
                    projectText: 'Website',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://apps.apple.com/app/id1136220934?mt=8',
                    downloadText: 'App Store'
                },
                {
                    name: 'Jellyfin for Android TV',
                    description: 'The official Jellyfin app for Android TV and Fire TV devices.',
                    tag: "Official Jellyfin",
                    deviceType: "TV",
                    platformType: [
                        "Android TV",
                        "Fire TV"
                    ],
                    recommended: false,
                    icon: "AmazonfiretvIcon",
                    iconTwo: "mdi:android",
                    projectLink: 'https://github.com/jellyfin/jellyfin-androidtv',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://www.amazon.com/gp/aw/d/B07TX7Z725',
                    downloadText: 'Amazon Appstore',
                    downloadLinkTwo: 'https://play.google.com/store/apps/details?id=org.jellyfin.androidtv',
                    downloadTextTwo: 'Play Store'
                },
                {
                    name: 'Findroid',
                    description: 'A third-party Android application for Jellyfin that provides a native user interface to browse and play movies and series.',
                    tag: "Third Party",
                    deviceType: "Mobile",
                    platformType: "Android",
                    recommended: false,
                    icon: "mdi:android",
                    projectLink: 'https://github.com/jarnedemeulemeester/findroid',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://apps.apple.com/app/id1136220934?mt=8https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin',
                    downloadText: 'Play Store',
                    downloadLinkTwo: 'https://apt.izzysoft.de/fdroid/index/apk/dev.jdtech.jellyfin',
                    downloadTextTwo: 'IzzyOnDroid'
                },
                {
                    name: 'Jellyfin for Roku',
                    description: 'The official Jellyfin app for Roku devices.',
                    tag: "Official Jellyfin",
                    deviceType: "TV",
                    platformType: "Roku",
                    recommended: false,
                    icon: "simple-icons:roku",
                    projectLink: 'https://github.com/jellyfin/jellyfin-roku',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://channelstore.roku.com/details/592369/jellyfin',
                    downloadText: 'Channel Store'
                },
                {
                    name: 'Swiftfin',
                    description: 'Swiftfin is a modern video client for Jellyfin. Redesigned in Swift to maximize direct play with the power of VLC and look native on all classes of Apple devices.',
                    tag: "Official Jellyfin",
                    deviceType: [
                        "TV",
                        "Mobile"
                    ],
                    platformType: [
                        "IOS",
                        "tvOS"
                    ],
                    recommended: false,
                    icon: "TvosIcon",
                    iconTwo: "mdi:apple-ios",
                    projectLink: 'https://github.com/jellyfin/swiftfin',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://apps.apple.com/ca/app/swiftfin/id1604098728',
                    downloadText: 'App Store'
                },
                {
                    name: 'Jellyfin Mobile for IOS',
                    description: 'The official Jellyfin app for iOS and iPadOS devices.',
                    tag: "Official Jellyfin",
                    deviceType: "Mobile",
                    platformType: "IOS",
                    recommended: false,
                    icon: "mdi:apple-ios",
                    projectLink: 'https://github.com/jellyfin/jellyfin-expo',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://apps.apple.com/us/app/jellyfin-mobile/id1480192618?mt=8',
                    downloadText: 'App Store'
                },
                {
                    name: 'Jellyfin for Android',
                    description: 'The official Jellyfin app for Android devices.',
                    tag: "Official Jellyfin",
                    deviceType: "Mobile",
                    platformType: "Android",
                    recommended: false,
                    icon: "mdi:android",
                    projectLink: 'https://github.com/jellyfin/jellyfin-android',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://play.google.com/store/apps/details?id=org.jellyfin.mobile',
                    downloadText: 'Play Store',
                    downloadLinkTwo: 'https://www.amazon.com/gp/aw/d/B081RFTTQ9',
                    downloadTextTwo: 'Amazon Appstore',
                    downloadLinkThree: 'https://f-droid.org/en/packages/org.jellyfin.mobile/',
                    downloadTextThree: 'F-Droid'
                },
                {
                    name: 'Jellyfin Media Player',
                    description: 'The official Jellyfin desktop client.',
                    tag: "Official Jellyfin",
                    deviceType: "Desktop",
                    platformType: "Desktop",
                    recommended: false,
                    icon: "ic:outline-desktop-windows",
                    projectLink: 'https://github.com/jellyfin/jellyfin-media-player',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://github.com/jellyfin/jellyfin-media-player',
                    downloadText: 'Github Downloads'
                },
                {
                    name: 'Jellyfin MPV Shim',
                    description: 'A cross-platform cast client for Jellyfin.',
                    tag: "Official Jellyfin",
                    deviceType: "Desktop",
                    platformType: "Desktop",
                    recommended: false,
                    icon: "ic:outline-desktop-windows",
                    projectLink: 'https://github.com/jellyfin/jellyfin-mpv-shim',
                    projectText: 'Github',
                    installLink: '',
                    installText: 'Guide',
                    downloadLink: 'https://github.com/jellyfin/jellyfin-mpv-shim/releases',
                    downloadText: 'Github Downloads'
                },
            ]
        }
    },
    computed: {
        filteredClients() {
            return this.clients.filter(client =>
                [this.recommendedFilter === 'recommended' ? client.recommended === true : true,
                this.deviceTypeFilter === 'all' || client.deviceType.includes(this.deviceTypeFilter),
                this.platformFilter === 'all' || client.platformType.includes(this.platformFilter)]
                    .every(Boolean)
            );
        },
    },
    methods: {
        setSelectedFilter(recommendedFilter) {
            this.recommendedFilter = recommendedFilter;
        },
        setDeviceTypeFilter(deviceType) {
            this.deviceTypeFilter = deviceType;
        },
        setPlatformFilter(platformType) {
            this.platformFilter = platformType;
        },
        getTagColor(tag) {
            const colorMap = {
                'Official GBstreams': 'yellow',
                'Official Jellyfin': 'blue',
                'Third Party': 'green',
                'Official GBstreams Beta': 'amber',
            };
            return colorMap[tag] || 'primary';
        },
        getTagVariant(tag) {
            return 'solid';
        },
    }
}
</script>

<template>
    <UCard class="mb-5 font-bold" :ui="{ background: 'dark:bg-gray-800' }">
        <div class="flex flex-row flex-wrap py-2 ">
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': recommendedFilter === 'recommended' }"
                @click="setSelectedFilter('recommended')">Recommended</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': recommendedFilter === 'false' }"
                @click="setSelectedFilter('false')">
                All</div>
        </div>
        <div class="flex flex-row flex-wrap py-2">
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': deviceTypeFilter === 'all' }"
                @click="setDeviceTypeFilter('all')">
                All Device Types</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': deviceTypeFilter === 'Desktop' }"
                @click="setDeviceTypeFilter('Desktop')">Desktop</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': deviceTypeFilter === 'Mobile' }"
                @click="setDeviceTypeFilter('Mobile')">Mobile</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': deviceTypeFilter === 'TV' }"
                @click="setDeviceTypeFilter('TV')">TV
            </div>
        </div>
        <div class="flex flex-row flex-wrap py-2">
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'all' }"
                @click="setPlatformFilter('all')">All
                Platforms</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'Android' }"
                @click="setPlatformFilter('Android')">Android</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'Android TV' }"
                @click="setPlatformFilter('Android TV')">Android TV</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'Desktop' }"
                @click="setPlatformFilter('Desktop')">Desktop</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'Fire TV' }"
                @click="setPlatformFilter('Fire TV')">Fire TV</div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'IOS' }"
                @click="setPlatformFilter('IOS')">iOS
            </div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'Kodi' }"
                @click="setPlatformFilter('Kodi')">Kodi
            </div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'Roku' }"
                @click="setPlatformFilter('Roku')">Roku
            </div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'tvOS' }"
                @click="setPlatformFilter('tvOS')">tvOS
            </div>
            <div class="px-4 cursor-pointer" :class="{ 'text-primary': platformFilter === 'webos' }"
                @click="setPlatformFilter('webos')">
                webOS</div>
        </div>
    </UCard>


    <div v-for="client in filteredClients" :key="client.name">
        <UCard class="p-4 mb-4 text-gray-200">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <h2 class="text-xl font-bold mr-2">{{ client.name }}</h2>
                    <UBadge :label="client.tag" :color="getTagColor(client.tag)" variant="solid"
                        :ui="{ font: 'font-semibold' }" />
                </div>
                <div class="flex items-center space-x-1">
                    <UIcon v-if="client.hasOwnProperty('iconTwo')" :name="client.iconTwo" size="36px" />
                    <UIcon :name="client.icon" size="36px" />
                </div>
            </div>

            <p class="text-gray-500 mb-4">{{ client.description }} </p>

            <div class="flex justify-between items-center">
                <UButton color="cyan" variant="outline" :label="client.projectText" :to="client.projectLink"
                    :ui="{ rounded: 'rounded-full' }" />

                <div class="flex space-x-1 items-center">
                    <UButton v-if="client.hasOwnProperty('downloadLinkThree')" color="gray" variant="solid"
                        :label="client.downloadTextThree" :to="client.downloadLinkThree"
                        :ui="{ rounded: 'rounded-full' }" />
                    <UButton v-if="client.hasOwnProperty('downloadLinkTwo')" color="gray" variant="solid"
                        :label="client.downloadTextTwo" :to="client.downloadLinkTwo" :ui="{ rounded: 'rounded-full' }" />
                    <UButton color="gray" variant="solid" :label="client.downloadText" :to="client.downloadLink"
                        :ui="{ rounded: 'rounded-full' }" />
                    <UButton color="gray" variant="solid" :label="client.installText" :to="client.installLink"
                        :ui="{ rounded: 'rounded-full' }" />
                </div>
            </div>
        </UCard>
    </div>
</template>
 