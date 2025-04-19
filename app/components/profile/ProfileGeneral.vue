<template>
    <div class="mt-10 pb-6 text-white border-b-1 border-gray-400 border-opacity-40">
        <div class="mb-6">
            <h3 class="text-2xl font-bold">General Settings</h3>
        </div>
        <form action="#" class="section">
            <div class="form-row">
                <label class="text-label">Account Type</label>
                <div class="mb-1 text-sm font-medium leading-5 text-gray-400 sm:mt-2">
                    <div class="flex max-w-lg items-center">
                        <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap cursor-default bg-indigo-500 bg-opacity-80 border border-indigo-500 !text-indigo-100">GBstreams
                            User</span>
                    </div>
                </div>
            </div>
            <div class="form-row"><label for="displayName" class="text-label">Display Name</label>
                <div class="form-input-area">
                    <div class="form-input-field"><input name="displayName" id="displayName" type="text"
                            placeholder="gbstreams" value=""></div>
                </div>
            </div>
            <div class="form-row"><label for="email" class="text-label">Email</label>
                <div class="form-input-area">
                    <div class="form-input-field"><input name="email" id="email" type="text"
                            placeholder="example@domain.com" class="" value="gbstreams"></div>
                </div>
            </div>

            <div class="actions">
                <div class="flex justify-end">
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button
                            class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white border border-indigo-500 bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 hover:border-indigo-500 focus:border-indigo-700 focus:ring-indigo active:bg-opacity-100 active:border-indigo-700 px-4 py-2 text-sm button-md "
                            type="submit">
                            <span class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25">
                                    </path>
                                </svg>
                                <span>Save Changes</span>
                            </span>
                        </button>
                    </span>
                </div>
            </div>
        </form>
    </div>
    <div class="mt-10 text-white">
        <div class="mb-6">
            <h3 class="text-2xl font-bold">Change Password</h3>
        </div>
        <form action="#" class="section">
            <div class="form-row"><label for="displayName" class="text-label">Old Password</label>
                <div class="form-input-area">
                    <div class="form-input-field"><input name="displayName" id="displayName" type="text"
                            placeholder="gbstreams" value=""></div>
                </div>
            </div>
            <div class="form-row"><label for="email" class="text-label">New Password</label>
                <div class="form-input-area">
                    <div class="form-input-field"><input name="email" id="email" type="text"
                            placeholder="example@domain.com" class="" value="gbstreams"></div>
                </div>
            </div>
            <div class="form-row"><label for="email" class="text-label">Re-enter Password</label>
                <div class="form-input-area">
                    <div class="form-input-field"><input name="email" id="email" type="text"
                            placeholder="example@domain.com" class="" value="gbstreams"></div>
                </div>
            </div>

            <div class="actions">
                <div class="flex justify-end">
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button
                            class="inline-flex items-center justify-center border leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer disabled:opacity-50 whitespace-nowrap text-white border border-indigo-500 bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 hover:border-indigo-500 focus:border-indigo-700 focus:ring-indigo active:bg-opacity-100 active:border-indigo-700 px-4 py-2 text-sm button-md "
                            type="submit">
                            <span class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25">
                                    </path>
                                </svg>
                                <span>Save Changes</span>
                            </span>
                        </button>
                    </span>
                </div>
            </div>
        </form>
    </div>
</template>