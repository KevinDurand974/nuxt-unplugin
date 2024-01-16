// https://nuxt.com/docs/api/configuration/nuxt-config

import { readFile } from "fs/promises";
import IconResolver from "unplugin-icons/resolver";
import Component from "unplugin-vue-components/vite";

export default defineNuxtConfig({
	typescript: {
		shim: false,
	},
	runtimeConfig: {
		// Only in server
		supabaseSR: "",
		entreprise: "",

		// On both client and server
		public: {
			supabaseUrl: "",
			supabaseKey: "",
		},
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		// "@nuxtjs/supabase",
		[
			"unplugin-icons/nuxt",
			{
				customCollections: {
					hoc: {
						rigueur: () => readFile("./assets/icons/rigeur.svg", "utf-8"),
					},
				},
			},
		],
	],
	vite: {
		plugins: [Component({ resolvers: [IconResolver()] })],
	},
	routeRules: {
		"/public/**": { ssr: false },
		"/preview/**": { ssr: false },
	},
	app: {
		head: {
			bodyAttrs: {
				class: "bg-zinc-50 dark:bg-zinc-950",
			},
		},
	},
});
