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
          tag: 'Official GBstreams',
          deviceType: [
            'Desktop',
            'Mobile'
          ],
          platformType: 'Browser',
          recommended: true,
          icon: 'mdi:internet',
          projectLink: 'https://github.com/KeyboardDabbler/gbs-webPlayer',
          projectText: 'Github',
          installLink: '',
          installText: 'Guide',
          downloadLink: 'https://play.gbstreams.com',
          downloadText: 'Open in Browser'
        },
        {
          name: 'GBstreams Vue',
          description: 'A modern web client for GBstreams on Vue.',
          tag: 'Official GBstreams Beta',
          deviceType: [
            'Desktop',
            'Mobile'
          ],
          platformType: 'Browser',
          recommended: false,
          icon: 'mdi:internet',
          projectLink: 'https://github.com/KeyboardDabbler/gbs-vuePlayer',
          projectText: 'Github',
          installLink: '',
          installText: 'Guide',
          downloadLink: 'https://vue.gbstreams.com',
          downloadText: 'Open in Browser'
        },
        {
          name: 'Infuse',
          description: 'A third-party client for iOS, iPadOS, and tvOS devices.',
          tag: 'Third Party',
          deviceType: [
            'Mobile',
            'TV'
          ],
          platformType: [
            'IOS',
            'tvOS'
          ],
          recommended: true,
          icon: 'TvosIcon',
          iconTwo: 'mdi:apple-ios',
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
          tag: 'Official Jellyfin',
          deviceType: 'TV',
          platformType: [
            'Android TV',
            'Fire TV'
          ],
          recommended: true,
          icon: 'AmazonfiretvIcon',
          iconTwo: 'mdi:android',
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
          tag: 'Third Party',
          deviceType: 'Mobile',
          platformType: 'Android',
          recommended: false,
          icon: 'mdi:android',
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
          tag: 'Official Jellyfin',
          deviceType: 'TV',
          platformType: 'Roku',
          recommended: false,
          icon: 'simple-icons:roku',
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
          tag: 'Official Jellyfin',
          deviceType: [
            'TV',
            'Mobile'
          ],
          platformType: [
            'IOS',
            'tvOS'
          ],
          recommended: false,
          icon: 'TvosIcon',
          iconTwo: 'mdi:apple-ios',
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
          tag: 'Official Jellyfin',
          deviceType: 'Mobile',
          platformType: 'IOS',
          recommended: false,
          icon: 'mdi:apple-ios',
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
          tag: 'Official GBstreams',
          deviceType: 'Mobile',
          platformType: 'Android',
          recommended: true,
          icon: 'mdi:android',
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
          tag: 'Official Jellyfin',
          deviceType: 'Desktop',
          platformType: 'Desktop',
          recommended: false,
          icon: 'ic:outline-desktop-windows',
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
          tag: 'Official Jellyfin',
          deviceType: 'Desktop',
          platformType: 'Desktop',
          recommended: false,
          icon: 'ic:outline-desktop-windows',
          projectLink: 'https://github.com/jellyfin/jellyfin-mpv-shim',
          projectText: 'Github',
          installLink: '',
          installText: 'Guide',
          downloadLink: 'https://github.com/jellyfin/jellyfin-mpv-shim/releases',
          downloadText: 'Github Downloads'
        }
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
      )
    }
  },
  methods: {
    setSelectedFilter(recommendedFilter) {
      this.recommendedFilter = recommendedFilter
    },
    setDeviceTypeFilter(deviceType) {
      this.deviceTypeFilter = deviceType
    },
    setPlatformFilter(platformType) {
      this.platformFilter = platformType
    },
    tagClass(tag) {
      if (tag === 'Official GBstreams') {
        return 'official-tag'
      } else if (tag === 'Official Jellyfin') {
        return 'jellyfin-tag'
      } else if (tag === 'Third Party') {
        return 'thirdParty-tag'
      } else if (tag === 'Official GBstreams Beta') {
        return 'beta-tag'
      } else {
        return 'Open Source'
      }
    }
  }
}
</script>

<template>
  <section class="container p-6 mx-auto md:max-w-4xl">
    <div class="px-4 py-2 md:max-w-4xl mb-4 mx-auto text-center">
      <span
        class="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-1 bg-forg font-medium uppercase rounded-full shadow-sm"
      >Apps</span>
      <h1 class="mb-4 text-gray-200 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
        Client Apps
      </h1>
      <p class="text-lg md:text-xl font-medium">
        Follow the simple instructions and you'll be able to start
        watching on <span class="text-yellow-1 font-bold">GBstreams</span>
      </p>
    </div>

    <div class="mb-4 ring-1 ring-blueBorder ring-opacity-50 text-gray-200 font-bold">
      <div class="flex flex-row flex-wrap py-2 ">
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': recommendedFilter === 'recommended' }"
          @click="setSelectedFilter('recommended')"
        >
          Recommended
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': recommendedFilter === 'false' }"
          @click="setSelectedFilter('false')"
        >
          All
        </div>
      </div>
      <div class="flex flex-row flex-wrap py-2">
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': deviceTypeFilter === 'all' }"
          @click="setDeviceTypeFilter('all')"
        >
          All Device Types
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': deviceTypeFilter === 'Desktop' }"
          @click="setDeviceTypeFilter('Desktop')"
        >
          Desktop
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': deviceTypeFilter === 'Mobile' }"
          @click="setDeviceTypeFilter('Mobile')"
        >
          Mobile
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': deviceTypeFilter === 'TV' }"
          @click="setDeviceTypeFilter('TV')"
        >
          TV
        </div>
      </div>
      <div class="flex flex-row flex-wrap py-2">
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'all' }"
          @click="setPlatformFilter('all')"
        >
          All
          Platforms
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'Android' }"
          @click="setPlatformFilter('Android')"
        >
          Android
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'Android TV' }"
          @click="setPlatformFilter('Android TV')"
        >
          Android TV
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'Desktop' }"
          @click="setPlatformFilter('Desktop')"
        >
          Desktop
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'Fire TV' }"
          @click="setPlatformFilter('Fire TV')"
        >
          Fire TV
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'IOS' }"
          @click="setPlatformFilter('IOS')"
        >
          iOS
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'Kodi' }"
          @click="setPlatformFilter('Kodi')"
        >
          Kodi
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'Roku' }"
          @click="setPlatformFilter('Roku')"
        >
          Roku
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'tvOS' }"
          @click="setPlatformFilter('tvOS')"
        >
          tvOS
        </div>
        <div
          class="px-4 cursor-pointer"
          :class="{ 'text-yellow-1': platformFilter === 'webos' }"
          @click="setPlatformFilter('webos')"
        >
          webOS
        </div>
      </div>
    </div>

    <div>
      <div
        v-for="client in filteredClients"
        :key="client.name"
      >
        <div class="card p-4 mb-4 text-gray-200">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <h2 class="text-xl font-bold mb-2 mr-2">
                {{ client.name }}
              </h2>
              <span
                :class="tagClass(client.tag)"
                class="text-gray-200 rounded-md px-2 py-1 text-xs font-semibold"
              >{{
                client.tag }}</span>
            </div>
            <div class="flex">
              <Icon
                v-if="client.hasOwnProperty('iconTwo')"
                :name="client.iconTwo"
                size="36px"
                class="mr-2"
              />
              <Icon
                :name="client.icon"
                size="36px"
              />
            </div>
          </div>

          <p class="text-gray-500 mb-4">
            {{ client.description }}
          </p>

          <div class="card-col flex justify-between items-center">
            <button class="button px-4 py-1 rounded-full ring-1 ring-blueBorder text-blueBorder">
              <a :href="client.projectLink">{{ client.projectText }}</a>
            </button>

            <div class="card-col flex items-center">
              <button
                v-if="client.hasOwnProperty('downloadLinkThree')"
                class="button px-4 py-1 rounded-full ring-1 ring-blueBorder text-white mr-2"
              >
                <a :href="client.downloadLinkThree">{{ client.downloadTextThree }}</a>
              </button>
              <button
                v-if="client.hasOwnProperty('downloadLinkTwo')"
                class="button px-4 py-1 rounded-full ring-1 ring-blueBorder text-white mr-2"
              >
                <a :href="client.downloadLinkTwo">{{ client.downloadTextTwo }}</a>
              </button>
              <button class="button px-4 py-1 rounded-full ring-1 ring-blueBorder text-white mr-2">
                <a :href="client.downloadLink">{{ client.downloadText }}</a>
              </button>
              <button class="button px-4 py-1 rounded-full ring-1 ring-blueBorder text-white">
                <a :href="client.installLink">{{ client.installText }}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.official-tag {
  background-color: #f4cf44;
  color: black;
}

.jellyfin-tag {
  background-color: #007ca6;
  color: white;
}

.beta-tag {
  background-color: #ffba00;
  color: black;
}

.thirdParty-tag {
  background-color: #00a400;
  color: white;
}

.card {
  background: rgba(30, 40, 54, 0.7);
  border-radius: 1em;
  backdrop-filter: blur(5px);
  box-sizing: border-box;
}

@media (max-width: 630px) {
  .button {
    width: 100%;
    margin: 1rem 0 0;
  }
  .card-col {
    flex-direction: column;
    width: 100%;
  }
}
</style>
