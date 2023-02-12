import { Utils } from './Utils';
import {headerTMPL, itemSponsoredTMPL, itemOrganicTMPL} from './templates';
import { RECOMMENDATIONS_TYPES_ENUM } from './constants';

test('Test buildUrl method', () => {
    const url = 'test.com?';
    const urlParams = {a:1,b:2};
    const result = Utils.buildUrl(url, urlParams);
    expect(result).toEqual("test.com?&a=1&b=2");
});

test('Test getHeader method', () => {
    const result = Utils.getHeader();
    expect(result).toEqual(headerTMPL);
});

test('Test getTmpl method', () => {
    const resultORGANIC = Utils.getTmpl(RECOMMENDATIONS_TYPES_ENUM.ORGANIC);
    expect(resultORGANIC).toEqual(itemOrganicTMPL);

    const resultSPONSORED = Utils.getTmpl(RECOMMENDATIONS_TYPES_ENUM.SPONSORED);
    expect(resultSPONSORED).toEqual(itemSponsoredTMPL);

    const resultDefault = Utils.getTmpl('notExist');
    expect(resultDefault).toEqual(itemSponsoredTMPL);
});

test('Test getTargetByOrigin method', () => {
    const resultORGANIC = Utils.getTargetByOrigin(RECOMMENDATIONS_TYPES_ENUM.ORGANIC);
    expect(resultORGANIC).toEqual('self');

    const resultSPONSORED = Utils.getTargetByOrigin(RECOMMENDATIONS_TYPES_ENUM.SPONSORED);
    expect(resultSPONSORED).toEqual('_blank');

    const resultDefault = Utils.getTargetByOrigin('notExist');
    expect(resultDefault).toEqual('_blank');
});

test('Test getItemContent method', () => {
    const item = {
        thumbnail: 'thumbnail', 
        description: 'description', 
        name: 'name',
        branding: 'branding',
        url: 'branding',
        origin: RECOMMENDATIONS_TYPES_ENUM.SPONSORED
    };
    
    const result = Utils.getItemContent(item).replaceAll('\n', '').replaceAll('\t', '').replaceAll('  ', '').trim();
    expect(result).toEqual(`<div class="recommendation-widget-item" style="flex: 0 0 32%">
    <div class="img" >
        <a href="branding" target="_blank" >
            <img src="undefined" xalt="__ALT__" onerror="this.style.visibility = 'hidden'"/>
        </a>
    </div>
    <div class="desc" >
        <a href="branding" target="_blank" >
            <span>"description...</span>
        </a>
    </div>
    
<div class="sponsored" >
<a href="branding" target="_blank" >
    <span>branding</span>
</a>
</div>

</div>`.replaceAll('\n', '').replaceAll('\t', '').replaceAll('  ', '').trim());
});