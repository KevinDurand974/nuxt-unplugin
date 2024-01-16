// https://nuxt.com/docs/api/configuration/nuxt-config

import { readFile } from "fs/promises";

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
