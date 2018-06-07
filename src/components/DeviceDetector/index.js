import React from 'react';

import UAParser from 'ua-parser-js';
import parse from 'url-parse';
import get from 'lodash/get';

import Mobile from '../Mobile';
// import Tablet from '../Tablet';
import Desktop from '../Desktop';

const DeviceDetector = () => {
    const parser = new UAParser();
    const url = parse(window.location.href, true);
    const forcedDevice = get(url, 'query.device');

    const device = forcedDevice || parser.getDevice().type;
    const isMobile = device === 'mobile';

    return (
        isMobile
            ? <Mobile/>
            : <Desktop/>
    );
};

export default DeviceDetector;
