export interface SiteDataProps {
    url: string
    name: string
    description: string

    company: string
    companyUrl: string

    localeDateString: string
    timezone: string

    author: {
        name: string
        email: string
        twitter: string // used for twitter cards when sharing a posts post on Twitter
    }

    defaultImage: {
        src: string
        alt: string
    }

    colors: {
        mainBackground: string
        activeTopMenuClass: string
        inactiveTopMenuClass: string
        activeBottomMenuClass: string
        inactiveBottomMenuClass: string
    }
}
// Update this file with your site specific information
const siteData: SiteDataProps = {
    ////////////////////////////////////////
    // UPDATE BELOW FIRST
    ////////////////////////////////////////

    // url should be your fully qualified public URL
    url: "https://desdinova-demo.pages.dev",
    // your website name
    name: "Desdinova",
    // your website description, which is also default SEO text
    description: "Built using Desdinova in Astro",

    // company/organization & url for responsible party (see Footer & Privacy)
    company: "A Company",
    companyUrl: "https://a-company.com",

    localeDateString: "en-us",
    // list of timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    timezone: "America/Chicago",

    ////////////////////////////////////////
    // LEAVE EVERYTHING BELOW ALONE FOR NOW
    ////////////////////////////////////////

    // NOT USED - author
    author: {
        name: "First Name",
        email: "email@organization.com",
        twitter: "@organization",
    },

    // NOT USED - default image for meta tags if the page does not have an image already
    defaultImage: {
        src: "favicon.svg",
        alt: "Desdinova Logo",
    },

    colors: {
        // mainBackground is color of canvas behind everything else
        mainBackground: "bg-white dark:bg-gray-800",
        // tailwind classes for top menu items
        activeTopMenuClass:
            "inline-flex w-full shrink-0 items-center justify-center text-center py-2 pl-3 pr-4 text-primary-700 dark:text-primary-400",
        inactiveTopMenuClass:
            "inline-flex w-full shrink-0 items-center justify-center text-center py-2 pl-3 pr-4 hover:bg-gray-100 hover:text-primary-700 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:text-white dark:hover:bg-gray-800 dark:hover:text-white lg:dark:hover:bg-transparent text-gray-500 dark:text-gray-400",
        // tailwind classes for bottom menu items
        activeBottomMenuClass:
            "flex text-primary-700 dark:text-primary-400 hover:underline",
        inactiveBottomMenuClass:
            "hover:underline lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:text-white dark:hover:bg-gray-800 dark:hover:text-white lg:dark:hover:bg-transparent text-gray-500 dark:text-gray-400",
    },
}

export default siteData
