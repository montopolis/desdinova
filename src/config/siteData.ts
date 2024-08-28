export interface SiteDataProps {
    url: string
    name: string
    description: string

    company: string
    companyUrl: string

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
        activeMenuClass: string
        inactiveMenuClass: string
        activeMenuIconClass: string
        inactiveMenuIconClass: string
    }
}
// Update this file with your site specific information
const siteData: SiteDataProps = {
    ////////////////////////////////////////
    // UPDATE BELOW FIRST
    ////////////////////////////////////////

    // url should be your fully qualified public URL
    url: "https://astro.build",
    // your website name
    name: "Desdinova",
    // your website description, which is also default SEO text
    description: "Built using Desdinova in Astro",

    // company/organization & url for responsible party (see Footer & Privacy)
    company: "A Company",
    companyUrl: "https://a-company.com",

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
        // tailwind classes for active menu item
        activeMenuClass:
            "flex items-center justify-center py-2 pr-4 pl-3 text-black dark:text-white lg:text-primary-700",
        // tailwind classes for inactive menu items
        inactiveMenuClass:
            "flex items-center justify-center py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:text-white dark:hover:bg-gray-800 dark:hover:text-white lg:dark:hover:bg-transparent text-gray-400 dark:text-gray-400",
        // tailwind classes for active menu item icon
        activeMenuIconClass: "mr-1 h-4 w-4 inline text-black dark:text-white",
        // tailwind classes for inactive menu item icons
        inactiveMenuIconClass:
            "mr-1 h-4 w-4 inline text-gray-400 dark:text-gray-400",
    },
}

export default siteData
