import { NUM_OF_RETRIES_TO_FETCH } from './constants'
export const Fetcher = {
    async load(url, numOfRetries = NUM_OF_RETRIES_TO_FETCH){
        try {
            const res = await fetch(url);
            const resAsJSON = await res.json();
            if (!resAsJSON?.list?.length && numOfRetries) {
                console.log(`Empty Data numOfRetries = ${numOfRetries}`);
                return this.load(url, --numOfRetries);
            }
            return resAsJSON.list;
        } catch(e) {
            console.log(`Failed to load numOfRetries = ${numOfRetries}`, e);
            if (numOfRetries) {
                return this.load(url, --numOfRetries);
            }
        }
    }
};