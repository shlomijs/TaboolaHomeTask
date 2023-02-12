export const API_BASE_URL = 'https://api.taboola.com/1.0/json/taboola-templates/recommendations.get?';
export const NUM_OF_ITEMS = 6;
export const API_DEFAULT_PARAMS = {
    'app.type': 'desktop',
    'app.apikey': 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
    'count': NUM_OF_ITEMS,
    'source.type': 'video',
    'source.id': '214321562187',
    'source.url': 'http://www.site.com/videos/214321562187.html'

};

export const NUM_OF_RETRIES_TO_FETCH = 10;

export const RECOMMENDATIONS_TYPES_ENUM = {
    ORGANIC: 'organic',
    SPONSORED: 'sponsored'
};

export const itemPartsPlaceholder = {
    img: '__SRC__',
    imgAlt: '__ALT__',
    desc: '__DESC__',
    sponsored: '__SPONSORED__',
    href: '__HREF__',
    hrefTarget: '__HREF_TRAGET__'
}