import { ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export type NextPageWithLayout = NextPage & {
	Layout?: ({children}: {children: ReactNode}) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
}

const Noop = ({ children }: { children: ReactNode; }) => <>{children}</>

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? Noop

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp;
