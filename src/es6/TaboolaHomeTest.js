import { Fetcher } from './Fetcher';
import { Utils } from './Utils';
import { API_BASE_URL, API_DEFAULT_PARAMS, NUM_OF_RETRIES_TO_FETCH} from './constants';

export const TaboolaHomeTest = (function initTaboolaHomeTest() {
    const apiUrl = Utils.buildUrl(API_BASE_URL, API_DEFAULT_PARAMS);
    const container = document.getElementById('root');
    return {
        async init(){
           const items = await Fetcher.load(apiUrl, NUM_OF_RETRIES_TO_FETCH);
           if (items?.length) {
            console.log(items.at(0));
            const html = `
                    <div class="recommendation-widget">
                        ${Utils.getHeader()}
                        ${Utils.getContent(items)}
                    </div>
            `;
            container.innerHTML = html;
           }
            
        }
    }
})();