import { Fetcher } from './Fetcher';
import { Utils } from './Utils';
import { API_BASE_URL, API_DEFAULT_PARAMS, NUM_OF_RETRIES_TO_FETCH, NUM_OF_ITEMS} from './constants';

test('Test Fetcher load', async () => {
    const fakeData = await Fetcher.load('fakeUrl', 1);
    expect(fakeData).toBeUndefined();

    const apiUrl = Utils.buildUrl(API_BASE_URL, API_DEFAULT_PARAMS);
    const items = await Fetcher.load(apiUrl, NUM_OF_RETRIES_TO_FETCH);
    expect(items?.length).toEqual(NUM_OF_ITEMS);
});


