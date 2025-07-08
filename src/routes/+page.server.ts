import {redirect} from '@sveltejs/kit'

export const load = async () => {
    if(import.meta.env.VITE_MAINTENANCE_MODE === 'true') {
        throw redirect(307, '/maintenance');
    }
}