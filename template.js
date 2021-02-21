import locations from './locations';
import styles from './styles';

function getDisplayName(country) {
    const displayName = new Intl.DisplayNames(['en'], {type: 'region'});
    return displayName.of(country);
}

function getNearbyLocations(country) {
    return locations.filter(location => location.includes(country));
}

function getLocationsAsString(sortedLocations) {
    let markup = '';
    
    sortedLocations.forEach(location => {
        const city = location.split(', ')[0];
        markup += `<li>${city}</li>`;
    });

    return markup;
}

const template = (cf) => {
    const country = getDisplayName(cf.country);
    const nearbyLocations = getNearbyLocations(cf.country);
    const locationsHTML = getLocationsAsString(nearbyLocations);

    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nearby Concert Locations for ${country}</title>
            <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
            <style>${styles}</style>
        </head>
        <body>
            <main role="main" class="flow">
                <h1>Concert location finder</h1>
                <h2>${nearbyLocations.length || 0} upcoming events close to <span> ${country} <span></h2>
                <ul class="locations" role="list">${locationsHTML}</ul>
                <p>This page was part of an egghead.io project brief. My task was to create and deploy a Cloudflare Worker that will examine the request for location data, and render HTML featuring information for the closest concert taking place based on the nearest regional Cloudflare Location.</p>
            </main>
            <footer role="contentinfo" class="footer">
                <ul role="list">
                    <li>
                        <img width="150" src="https://raw.githubusercontent.com/eggheadio/egghead-brand/25a02cfa2f6907aaa4a71b36a6366aa1f407c144/Egghead-Logo-Dark.svg" alt="egghead logo">
                    </li>
                    <li>
                        <img width="150" src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg" alt="Cloudflare logo">
                    </li>
                </ul>
            </footer>
        </body>
    </html>`;
}

export default template;