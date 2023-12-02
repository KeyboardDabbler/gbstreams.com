<script>
export default {
    data() {
        return {
            currentStep: 1,
            steps: [
                {
                    title: "Thanks for Joining GBstreams",
                    instructions: "Great news! You now have access to our server's media collection. Let's make sure you know how to use it on you're device.",
                    link: "/dashboard/clients",
                    linkText: "Download"
                },
                {
                    title: "The Best Way to Discover Media",
                    instructions: "We are excited to offer you a wide selection of media to choose from. If you're having trouble finding something you like, dont worry! We have a user-friendly Request & Repot system that can automatically search for the media you're looking for. You will find yourself deeper and deeper in a rabbit hole of content you never knew you just had to watch.",
                    bulletPoints: [
                        "Request any available Movie or TV Show",
                        "Report issues with content, such as playback problems.",
                        "If enabled, recieve notification once ready to watch."
                    ],
                    link: "https://request.gbstreams.com",
                    linkText: "Check it Out"
                },
                {
                    title: "Eh, So, What is GBstreams Exactly",
                    instructions: "At GBstreams, we provide access to an extensive library. Our platform is built on Jellyfin, a volunteer-built media solution that puts you in control of your media. However, we have made unique modifications to the core code to add new features and branding changes that make GBstreams stand out from the crowd.",
                    subTitle: "Right, So How Do I Watch Stuff?",
                    subInstructions: "It couldn't be simpler! GBstreams is available on a wide varietyof devices including PC's, tablets, smartphones and TV's. All you need to do is download the app on your device, sign in with your account, and you're ready to start streaming. It's that easy!",
                    link: "https://play.gbstreams.com",
                    linkText: "Open GBstreams Web Player"
                },
            ],
        };
    },
    methods: {
        nextStep() {
            this.currentStep++;
        },
        prevStep() {
            this.currentStep--;
        },
    },
};
</script>

<template>
    <section class="p-6 sm:p-8">
        <div class="mb-2 text-center">
            <a class="inline-block mb-2" href="#">
                <NuxtImg provider="cloudinary" src="/branding/banner-light_xgac6g.png" alt="GBstreams logo" class="h-16" />
            </a>
        </div>
        <div class="">
            <h2 class="mb-4 text-gray-200 text-2xl md:text-3xl font-bold">{{ steps[currentStep - 1].title }}</h2>
            <p class="text-coolGray-500 ">{{ steps[currentStep - 1].instructions }}</p>
            <div v-if="currentStep === 3">
                <h2 class="my-4 text-gray-200 text-2xl md:text-3xl font-bold">{{ steps[currentStep - 1].subTitle }}</h2>
                <p class="text-coolGray-500 ">{{ steps[currentStep - 1].subInstructions }}</p>
            </div>
            <div class="">
                <ul class="mt-2 space-y-4 text-left text-gray-500 dark:text-gray-400" v-if="currentStep === 2">
                    <li class="flex items-center space-x-3" v-for="bullet in steps[currentStep - 1].bulletPoints">
                        <Icon class="mr-1 text-green-400" name="mdi:check" /> {{ bullet }}
                    </li>
                </ul>
            </div>
            <div class="flex justify-center">
                <a class="py-2 px-4 my-4 text-base text-black font-medium text-center leading-6 bg-yellow focus:ring-2 focus:ring-bluer focus:ring-opacity-50 rounded-md shadow-sm"
                    :href="steps[currentStep - 1].link" target="_blank">{{ steps[currentStep - 1].linkText }}
                    <Icon class="ml-1" v-if="currentStep === 1" name="material-symbols:download" />
                    <Icon class="ml-1" v-if="currentStep === 2" name="material-symbols:open-in-new" />
                    <Icon class="ml-1" v-if="currentStep === 3" name="material-symbols:open-in-new" />
                </a>
            </div>
            <div class="flex justify-between">
                <button
                    class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white bg-transparent border-gray-600 hover:border-gray-200 focus:border-gray-100 active:border-gray-100 px-4 py-2 text-sm button-md"
                    v-if="currentStep > 1" @click="prevStep()">Prev</button>
                <button
                    class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white border border-indigo-500 bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 hover:border-indigo-500 focus:border-indigo-700 focus:ring-indigo active:bg-opacity-100 active:border-indigo-700 px-4 py-2 text-sm button-md"
                    v-if="currentStep < steps.length" @click="nextStep()">Next</button>
            </div>
        </div>
    </section>
</template>
