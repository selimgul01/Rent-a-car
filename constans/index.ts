import { FaFacebookF , FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


export interface HeaderDataProps{
    label: string
    href: string
}

export const HeaderData : HeaderDataProps[] =[
    {
        label: 'Home',
        href: '#'
    },
    {
        label: 'About',
        href: '#'
    },
    {
        label: 'Service',
        href: '#'
    },
    {
        label: 'Cars',
        href: '#'
    },
    {
        label: 'Contact',
        href: '#'
    },


]


export interface FooterItemDataProps {
    title: string
    items: { label: string , href: string }[]
}


export const footerData: FooterItemDataProps[] = [
    {
        title:"About",
        items: [
            { label: "How it works", href: "#" },
            { label: "Featured", href: "#" },
            { label: "Partnership", href: "#" },
            { label: "Business Relation", href: "#" }
        ]
    },
    {
        title:"Commınity",
        items: [
            { label: "Events", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Podcast", href: "#" },
            { label: "Invate a friend", href: "#" }
        ]
    },
]


export interface SocialMediaType  {
    icon: React.ElementType
    label: string
}


export const SocialMediaData:SocialMediaType[] = [
    {
        icon: FaFacebookF,
        label: "Facebook"
    },
    {
        icon: FaTwitter,
        label: "Facebook"
    },
    {
        icon: FaInstagram,
        label: "Facebook"
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn"
    }
]