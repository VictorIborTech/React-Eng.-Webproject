import {SiOpenaigym} from 'react-icons/si'
import { FaLinkedin, FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"




export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Teams",
        path: '/teams'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        images: require("./assets/images/istockphoto-471134551-612x612.jpg"),
        title: "Architecture",
        info: "We give the best drawing and blueprint of your dream building",
        path: "/services/111"
    },
    {
        id: 2,
        images: require("./assets/images/istockphoto-1352414667-612x612.jpg"),
        title: "Wood & Furnitures",
        info: "Get the best home furnitures to beautify your interior",
        path: "/services/222"
    },
    {
        id: 3,
        images: require("./assets/images/istockphoto-1384317531-612x612.jpg"),
        title: "Painting",
        info: "We offer the  best paint and painting designs both interior and exterior",
        path: "/services/333"
    },
    {
        id: 4,
        images: require("./assets/images/istockphoto-1441225869-612x612.jpg"),
        title: "Plumbing",
        info: "Get your pipes and water closet fixed and mounted as we build and fix",
        path: "/services/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How can i start a project?",
        answer: "You just have to get a picture or insight of what you want your building or structure to look like and the funding to start the project, Then you are good to go"
    },
    {
        id: 2,
        question: "What time of year is best for building?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta."
    },
    {
        id: 3,
        question: "How long will my project last?",
        answer: "In publishing and graphic design, based on the project requirements and designs, A standard period is between six months to one years."
    },
    {
        id: 4,
        question: "Do I need a contract to start a structure?",
        answer: "Yes! You can visit our plans page to see more plans, which are affordable."
    },
    {
        id: 5,
        question: "Can I Hire an Architect?",
        answer: "You can hire your Architect to get a blueprint of your building and we can start the project once you contact and sign a contract with us."
    },
    {
        id: 6,
        question: "How can I get a discount price?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./assets/images/istockphoto-1372309567-612x612.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae.",
        job: "Software Engineer",
        avatar: require("./assets/images/istockphoto-1387051560-612x612.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./assets/images/istockphoto-1358965099-612x612.jpg")
    },
    {
        id: 4,
        name: "Elizabeth Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Enterpreneur",
        avatar: require("./assets/images/istockphoto-1440964476-612x612.jpg")
    },
    {
        id: 5,
        name: "Grace Tallman",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a!mina josgbegeg.",
        job: "Pharmacist",
        avatar: require("./assets/images/istockphoto-1373258655-612x612.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help and plans throughout the project',
        price: 29.99,
        features: [
            {feature: 'First Tier', available: true},
            {feature: 'Second Tier', available: true},
            {feature: 'Third Tier', available: true},
           
            
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for client with plans and vision',
        price: 49.99,
        features: [
            {feature: 'First Tier', available: true},
            {feature: 'Second Tier', available: false},
            {feature: 'Third Tier', available: true},
            
            
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service and special home facility repair',
        price: 89.99,
        features: [
            {feature: 'First Tier', available: true},
            {feature: 'Second Tier', available: false},
            {feature: 'Third Tier', available: true},
            
            
        ]
    }
]









const Trainer1 = require('./assets/images/istockphoto-1358842558-612x612.jpg')
const Trainer2 = require('./assets/images/istockphoto-1363637797-612x612.jpg')
const Trainer3 = require('./assets/images/istockphoto-1440964476-612x612.jpg')
const Trainer4 = require('./assets/images/istockphoto-1395912312-612x612.jpg')
const Trainer5 = require('./assets/images/istockphoto-1458817653-612x612.jpg')
const Trainer6 = require('./assets/images/istockphoto-1396840742-612x612.jpg')




export const teams = [
    {
        id: 1,
        image: Trainer1,
        name: 'Mathius Josh',
        job: 'Electrician',
        socials: [
            {icon: <AiOutlineInstagram/>, link:'https://instagram.com/'},
            {icon: <AiOutlineTwitter/>, link:'https://twitter.com/'},
            {icon: < FaFacebook/>, link:'https://facebook.com/'},
            {icon: < FaLinkedin/>, link:'https://linkedin.com/'},
          
            
        ]
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Lizzy John',
        job: 'Project Manager',
        socials: [
            {icon: <AiOutlineInstagram/>, link:'https://instagram.com/'},
            {icon: <AiOutlineTwitter/>, link:'https://twitter.com/'},
            {icon: < FaFacebook/>, link:'https://facebook.com/'},
            {icon: < FaLinkedin/>, link:'https://linkedin.com/'},
          
            
        ]
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Xu Quist',
        job: 'Architecture (Asia)',
        socials: [
            {icon: <AiOutlineInstagram/>, link:'https://instagram.com/'},
            {icon: <AiOutlineTwitter/>, link:'https://twitter.com/'},
            {icon: < FaFacebook/>, link:'https://facebook.com/'},
            {icon: < FaLinkedin/>, link:'https://linkedin.com/'},
          
            
        ]
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Linda Florent',
        job: 'Metal/Factory Manager',
        socials: [
            {icon: <AiOutlineInstagram/>, link:'https://instagram.com/'},
            {icon: <AiOutlineTwitter/>, link:'https://twitter.com/'},
            {icon: < FaFacebook/>, link:'https://facebook.com/'},
            {icon: < FaLinkedin/>, link:'https://linkedin.com/'},
          
            
        ]
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Daniel Elisha',
        job: 'Head Architecture',
        socials: [
            {icon: <AiOutlineInstagram/>, link:'https://instagram.com/'},
            {icon: <AiOutlineTwitter/>, link:'https://twitter.com/'},
            {icon: < FaFacebook/>, link:'https://facebook.com/'},
            {icon: < FaLinkedin/>, link:'https://linkedin.com/'},
          
            
        ]
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Project Manager/  Workers Recruitment Officer',
        socials: [
            {icon: <AiOutlineInstagram/>, link:'https://instagram.com/'},
            {icon: <AiOutlineTwitter/>, link:'https://twitter.com/'},
            {icon: < FaFacebook/>, link:'https://facebook.com/'},
            {icon: < FaLinkedin/>, link:'https://linkedin.com/'},
          
            
        ]
    }
]