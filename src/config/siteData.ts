export interface SiteDataProps {
    url: string
    name: string

    company: string
    companyUrl: string

    seo: string
    title: string
    description: string

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
    }
}
// Update this file with your site specific information
const siteData: SiteDataProps = {
    url: "https://astro.build",
    name: "Desdinova",

    company: "A Company",
    companyUrl: "https://a-company.com",

    // Your website's title and description (meta fields)
    seo: "seo text",
    title: "Desdinova",
    description: "Built using Desdinova in Astro",

    // author not used
    author: {
        name: "First Name",
        email: "email@organization.com",
        twitter: "@organization",
    },

    // default image for meta tags if the page does not have an image already
    defaultImage: {
        src: "favicon.svg",
        alt: "Desdinova Logo",
    },

    colors: {
        // mainBackground is color of canvas behind everything else
        mainBackground: "bg-white dark:bg-gray-800",
        activeMenuClass:
            "flex items-center justify-center py-2 pr-4 pl-3 text-black dark:text-white lg:text-primary-700",
        inactiveMenuClass:
            "flex items-center justify-center py-2 pr-4 pl-3 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:text-white dark:hover:bg-gray-800 dark:hover:text-white lg:dark:hover:bg-transparent text-gray-400 dark:text-gray-400",
    },
}

export default siteData
