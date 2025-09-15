import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ route }) {
	if (route.id === '/') {
			redirect(301, '/examples/overview');
	}
}

export const ssr = false
export const prerender = true
