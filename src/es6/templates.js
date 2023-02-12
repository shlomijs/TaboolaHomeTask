import { itemPartsPlaceholder, NUM_OF_ITEMS} from './constants';

export const headerTMPL = `
<div class="recommendation-widget-header" >
    <header>
        <div class="header-content" >
            <div class="more" >MORE FOR YOU</div>
            <a class="goto" target="_blank" href="https://popup.taboola.com/he/?template=colorbox&utm_source=ynet-ynet-&utm_medium=referral&utm_content=thumbs-feed-01-a:Below%20Home%20Page%20ND%20|%20Card%201:">
                <span>Promoted Links By Taboola</span>&nbsp;&nbsp;
                <span class="goto-icon"></span>
            </a>
        </div>
        <hr />
    </header>
</div>`;

const flexSize = (96/(NUM_OF_ITEMS / 2));
const sponsoredTMPL = `
    <div class="sponsored" >
        <a href="${itemPartsPlaceholder.href}" target="${itemPartsPlaceholder.hrefTarget}" >
            <span>${itemPartsPlaceholder.sponsored}</span>
        </a>
    </div>
`;
export const itemSponsoredTMPL = createTmpl(sponsoredTMPL);

export const itemOrganicTMPL = createTmpl('');

function createTmpl(sponsoredTMPL) {
    return `
        <div class="recommendation-widget-item" style="flex: 0 0 ${flexSize}%">
            <div class="img" >
                <a href="${itemPartsPlaceholder.href}" target="${itemPartsPlaceholder.hrefTarget}" >
                    <img src="${itemPartsPlaceholder.img}" xalt="${itemPartsPlaceholder.imgAlt}" onerror="this.style.visibility = 'hidden'"/>
                </a>
            </div>
            <div class="desc" >
                <a href="${itemPartsPlaceholder.href}" target="${itemPartsPlaceholder.hrefTarget}" >
                    <span>"${itemPartsPlaceholder.desc}</span>
                </a>
            </div>
            ${sponsoredTMPL}
        </div>
    `;
}