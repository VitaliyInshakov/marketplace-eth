declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_TARGET_CHAIN_ID: number;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}