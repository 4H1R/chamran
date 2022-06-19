<div class="space-y-4">
    <h1 class="text-3xl font-bold">داشبورد</h1>
    <div class="p-2 space-y-2 bg-white shadow rounded-xl dark:border-gray-600 dark:bg-gray-800">
        <div class="space-y-2">
            <div class="px-4 py-2 space-y-4">
                <div class="flex items-center h-12 space-x-4 rtl:space-x-reverse">
                    <div class="w-10 h-10 bg-gray-200 bg-center bg-cover rounded-full"
                        style="background-image: url('https://ui-avatars.com/api/?name={{ auth()->user()->name }}&amp;color=FFFFFF&amp;background=111827')">
                    </div>

                    <div>
                        <h2 class="text-lg font-bold tracking-tight sm:text-xl">
                            {{ auth()->user()->name }} خوش آمدید.
                        </h2>

                        <form action="{{ route('auth.logout') }}" method="post" class="text-sm">
                            @csrf
                            <button type="submit"
                                class="text-gray-600 hover:text-primary-500 focus:outline-none focus:underline dark:text-gray-300 dark:hover:text-primary-500">
                                خروج
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>