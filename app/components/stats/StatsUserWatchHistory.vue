<template>
    <div class="flex pb-4 items-center">
        <span class="text-2xl text-white truncate">Watch History
            <Icon name="line-md:arrow-right-circle" size="24px" class="ml-2 text-white" />
        </span>
    </div>
    <div class="relative" data-testid="media-slider">
        <div class="absolute right-0 -mt-10 flex text-gray-400"><button class="text-gray-800" disabled="" type="button"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg></button><button class="hover:text-white" type="button"><svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                    class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg></button></div>
        <div
            class="hide-scrollbar relative -my-2 -ml-4 -mr-4 overflow-y-auto overflow-x-scroll overscroll-x-contain whitespace-nowrap px-2 py-2">
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/vd8YdaH7dzeIMGTNwQinlSiA1gV.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/zn6VNUOHGWKvSGRL6KiMtAe9ELy.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                                <div class="pointer-events-none z-40 flex items-center">
                                    <div
                                        class="relative inline-flex whitespace-nowrap rounded-full border-gray-700 text-xs font-semibold leading-5 ring-gray-700 ">
                                        <div
                                            class="rounded-full bg-opacity-80 shadow-md w-4 sm:w-5 border p-0 bg-green-500 border-green-400 ring-green-400 text-green-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/4lls2JCt9g1YiusX3xLVSdSZ6cO.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                                <div class="pointer-events-none z-40 flex items-center">
                                    <div
                                        class="relative inline-flex whitespace-nowrap rounded-full border-gray-700 text-xs font-semibold leading-5 ring-gray-700 ">
                                        <div
                                            class="rounded-full bg-opacity-80 shadow-md w-4 sm:w-5 border p-0 bg-green-500 border-green-400 ring-green-400 text-green-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                                <div class="pointer-events-none z-40 flex items-center">
                                    <div
                                        class="relative inline-flex whitespace-nowrap rounded-full border-gray-700 text-xs font-semibold leading-5 ring-gray-700 ">
                                        <div
                                            class="rounded-full bg-opacity-80 shadow-md w-4 sm:w-5 border p-0 bg-indigo-500 border-indigo-400 ring-indigo-400 text-indigo-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/wUvUcLTxc83k4l8psyO2pDYHHB3.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/gMemig5evTQDFgYNnypemEnfekL.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/jeyTQrNEpyE1LZIgVlswYh3sc34.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                                <div class="pointer-events-none z-40 flex items-center">
                                    <div
                                        class="relative inline-flex whitespace-nowrap rounded-full border-gray-700 text-xs font-semibold leading-5 ring-gray-700 ">
                                        <div
                                            class="rounded-full bg-opacity-80 shadow-md w-4 sm:w-5 border p-0 bg-green-500 border-green-400 ring-green-400 text-green-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="https://image.tmdb.org/t/p/w300_and_h450_face/kdPMUMJzyYAc4roD52qavX0nLIC.jpg"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-purple-600 bg-purple-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Series</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div class="w-36 sm:w-36 md:w-44" data-testid="title-card">
                    <div class="relative transform-gpu cursor-default overflow-hidden rounded-xl bg-gray-800 bg-cover outline-none ring-1 transition duration-300 scale-100 shadow ring-gray-700"
                        role="link" tabindex="0" style="padding-bottom: 150%;">
                        <div class="absolute inset-0 h-full w-full overflow-hidden"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt=""
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fill" class="absolute inset-0 h-full w-full"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"><noscript></noscript></span>
                            <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                                <div
                                    class="pointer-events-none z-40 rounded-full border bg-opacity-80 shadow-md border-blue-500 bg-blue-600">
                                    <div
                                        class="flex h-4 items-center px-2 py-2 text-center text-xs font-medium uppercase tracking-wider text-white sm:h-5">
                                        Movie</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inline-block px-2 align-top">
                <div>
                    <div class="relative animate-pulse rounded-xl bg-gray-700 w-36 sm:w-36 md:w-44">
                        <div class="w-full" style="padding-bottom: 150%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
