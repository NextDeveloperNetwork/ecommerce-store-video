declare global {
    interface Window {
        gtag: any; // You can refine the type if you have more information about it
    }
}

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
};