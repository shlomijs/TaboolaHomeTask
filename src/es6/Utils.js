import {headerTMPL, itemSponsoredTMPL, itemOrganicTMPL} from './templates';
import { itemPartsPlaceholder, RECOMMENDATIONS_TYPES_ENUM } from './constants';

export const Utils = {
    buildUrl(url, urlPrams) {
        for (const [k, v] of Object.entries(urlPrams)) {
            // encodeURIComponent needed for param value
            url += `&${k}=${v}`;
        }
        return url;
    },

    getHeader() {
        return headerTMPL;
    },
    
    getTmpl(origin) {
        switch(origin) {
            case RECOMMENDATIONS_TYPES_ENUM.ORGANIC:
                return itemOrganicTMPL;
            case RECOMMENDATIONS_TYPES_ENUM.SPONSORED:
                return itemSponsoredTMPL;
            default: 
                return itemSponsoredTMPL;
        }
    },
    

    getTargetByOrigin(origin) {
        switch(origin) {
            case RECOMMENDATIONS_TYPES_ENUM.ORGANIC:
                return 'self';
            case RECOMMENDATIONS_TYPES_ENUM.SPONSORED:
                return '_blank';
            default: 
                return '_blank';
        }
    },

    getItemContent({thumbnail, description, name, branding, url, origin}) {        
        let tmpl = this.getTmpl(origin);
        let desc = (description ?? name).split(' ').splice(0, 10).join(' ');
        if (!desc.includes('...')) {
            desc += '...';
        }
        tmpl = tmpl.replace(itemPartsPlaceholder.img, thumbnail?.at(0)?.url);
        // tmpl = tmpl.replace(itemPartsPlaceholder.imgAlt, name);
        tmpl = tmpl.replace(itemPartsPlaceholder.desc, desc);
        tmpl = tmpl.replace(itemPartsPlaceholder.sponsored, branding);
        tmpl = tmpl.replaceAll(itemPartsPlaceholder.href, url);
        tmpl = tmpl.replaceAll(itemPartsPlaceholder.hrefTarget, this.getTargetByOrigin(origin));
        return tmpl;
    },

    getContent(items) {
        return `
            <div class="recommendation-widget-body" >
                ${items.map(item => this.getItemContent(item)).join('')}
            </div>
        `;
    }
}