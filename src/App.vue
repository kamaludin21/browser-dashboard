<script setup lang="ts">
import { IconLayoutSidebarLeftCollapse, IconFolder, IconNote, IconPlus, IconUserCircle } from '@tabler/icons-vue';
</script>

<template>
	<div class="flex gap-4 w-full">

		<!-- Sidebar Container -->
		<div class="flex-0 w-1/5 border-r border-slate-200 h-screen">
			<!-- Navbar Wrapper -->
			<nav class="space-y-4">
				<!-- Header -->
				<div class="flex p-4 justify-between border-b border-slate-200">
					<div class="">
						<p class="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-slate-700">
							Dashboard</p>
					</div>
					<div class="flex">
						<button class="px-1 hover:bg-slate-200 ring-1 ring-slate-200 rounded group">
							<IconLayoutSidebarLeftCollapse class="w-5 h-5 text-cyan-900 group-hover:text-cyan-800" stroke="1.8" />
						</button>
					</div>
				</div>
				<!-- Header -->

				<div class="p-2 space-y-4">
					<div class="space-y-1">
						<div class="px-2">
							<p class="text-sm tracking-wide font-bold text-slate-400">Menu</p>
						</div>
						<div class="space-y-2">
							<div
								class="text-cyan-800 rounded-md items-center flex gap-x-2 p-2 ring-1 ring-cyan-900/30 hover:shadow-md bg-cyan-900/10 cursor-pointer duration-200">
								<IconFolder class="w-5 h-5 fill-cyan-800" stroke="2.0" />
								<div>
									<p class="text-sm font-bold">Home</p>
								</div>
							</div>
							<div
								class="text-slate-600 hover:bg-cyan-900/5 duration-200 opacity-80 hover:opacity-100 rounded-md items-center flex gap-x-2 p-2 cursor-pointer">
								<IconNote class="w-5 h-5" stroke="2.0" />
								<div>
									<p class="text-sm font-bold">Notes</p>
								</div>
							</div>
							<div
								class="text-slate-600 hover:bg-cyan-900/5 duration-200 opacity-80 hover:opacity-100 rounded-md items-center flex gap-x-2 p-2 cursor-pointer">
								<IconUserCircle class="w-5 h-5" stroke="2.0" />
								<div>
									<p class="text-sm font-bold">Profile</p>
								</div>
							</div>
						</div>
					</div>

					<div class="px-2 border-b">
					</div>

					<div class="space-y-1">
						<div class="w-full px-2 flex justify-between items-center text-slate-400">
							<p class="text-sm tracking-wide font-bold ">Bookmarks</p>
							<button class="hover:text-cyan-600">
								<IconPlus class="w-4 h-4 fill-cyan-800" stroke="2.5" />
							</button>
						</div>
						<div class="space-y-2">
							<div
								class="text-cyan-800 rounded-md items-center flex gap-x-2 p-2 ring-1 ring-cyan-900/30 hover:shadow-md bg-cyan-900/10 cursor-pointer duration-200">
								<IconFolder class="w-5 h-5 fill-cyan-800" stroke="2.0" />
								<div>
									<p class="text-sm font-bold">Home</p>
								</div>
							</div>
							<div
								class="text-slate-600 hover:bg-cyan-900/5 duration-200 opacity-80 hover:opacity-100 rounded-md items-center flex gap-x-2 p-2 cursor-pointer">
								<IconNote class="w-5 h-5" stroke="2.0" />
								<div>
									<p class="text-sm font-bold">Notes</p>
								</div>
							</div>
							<div
								class="text-slate-600 hover:bg-cyan-900/5 duration-200 opacity-80 hover:opacity-100 rounded-md items-center flex gap-x-2 p-2 cursor-pointer">
								<IconUserCircle class="w-5 h-5" stroke="2.0" />
								<div>
									<p class="text-sm font-bold">Profile</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--  -->


			</nav>
			<!-- Navbar Wrapper -->
		</div>
		<!-- Sidebar Container -->

		<div class="flex-1 p-10 text-2xl ">
			<div class="font-black">This text is black.</div>
			<div class="font-bold">This text is bold.</div>
			<div class="font-medium">This text is medium.</div>
			<div class="font-normal">This text is normal.</div>
			<div class="font-light">This text is light.</div>
		</div>
	</div>
</template>

<style scoped></style>
