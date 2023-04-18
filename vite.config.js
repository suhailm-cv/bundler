import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	test: {
		globals: false,
		environment: "jsdom",
	},
	build: {
		lib: 
			{
				entry: path.resolve(__dirname, "src/lib/index.tsx"),
				name: "My Component",
				fileName: (format) => `my-component.${format}.ts`,
			},
		
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
	plugins: [react(), dts()],
});

// Path: src/lib/index.tsx
// This is the component that will be exported

// Path: src/index.tsx
// This is the function that will be exported

// export both components

