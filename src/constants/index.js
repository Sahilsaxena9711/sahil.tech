import { OrderedMap } from "immutable";

export const POSSIBLE_TABS = new OrderedMap({
    skills: {
        label: "Skills",
    },
    professional_work: {
        label: "Professional Work",
    },
    side_projects: {
        label: "Side Projects",
    },
    github: {
        label: "Github",
    },
    linkedin: {
        label: "LinkedIn",
    },
    blog: {
        label: "Blog",
    },
    setting: {
        label: "Change Background"
    },
    all: {
        label: "Search"
    }
});

export const WORK_EXPERIENCE = new OrderedMap({
    "tc": {
        label: "Turning Cloud",
        url: "https://media.glassdoor.com/sqll/977563/turningcloud-solutions-squarelogo-1554894137024.png",
        subText: "Jan 2018 - Jul 2019"
    },
    "progcap": {
        label: "PROGCAP",
        url: "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/nkvkupmkx1g2bdurxvpx",
        subText: "Aug 2019 - Present"
    }
});

export const GIT_PICTURE = "https://avatars1.githubusercontent.com/u/29303089?s=460&u=025018fd3c068f49d53c613569a3799f87c070ae&v=4";

export const AUTHOR_NICKNAME = "Sahil";

export const side_projects = new OrderedMap({
    "covid": {
        label: "Covid19 vs India",
        url: require("../assets/covid.png"),
        page: "https://covid19vsindia.in/"
    },
    "expensify": {
        label: "Expensify",
        url: require("../assets/expensify.png"),
        page: "https://expensify-me.web.app/"
    },
    "calendar": {
        label: "Calendar",
        url: require("../assets/calendar.png"),
        page: "https://calendar-pi.vercel.app/"
    },
    "weather": {
        label: "Weather Forecast",
        url: require("../assets/weather.jpg"),
        page: "https://react-weather-condition.herokuapp.com"
    },
    "blacked": {
        label: "Blacked",
        url: require("../assets/blacked.png"),
        page: "https://www.npmjs.com/blacked"
    },
    "htmlviewer": {
        label: "HTML Viewer",
        url: require("../assets/htmlviewer.jpg"),
        page: "https://htmlviewer.surge.sh/"
    },
    "underreacted": {
        label: "Underreacted",
        url: require("../assets/underreacted.png"),
        page: "https://underreacted.surge.sh/"
    },
});

export const setting = new OrderedMap({
    "gradient1": {
        label: "Gradient 1",
        // url: require("../assets/back1.jpg"),
        name: "linear-gradient(to bottom, #4b6cb7, #182848)"
    },
    "gradient2": {
        label: "Gradient 2",
        // url: require("../assets/back1.jpg"),
        name: "linear-gradient(to bottom, #870000, #271008)"
    },
    "gradient3": {
        label: "Gradient 3",
        // url: require("../assets/back1.jpg"),
        name: "linear-gradient(to right, #061161, #780206)"
    },
    "gradient4": {
        label: "Gradient 4",
        // url: require("../assets/back1.jpg"),
        name: "linear-gradient(to bottom, #6E48AA, #9D50BB)"
    },
    "gradient5": {
        label: "Gradient 5",
        // url: require("../assets/back1.jpg"),
        name: "linear-gradient(0deg, rgba(28,45,83,1) 0%, rgb(44, 49, 51) 100%, rgba(0,212,255,1) 100%)"
    }
});

export const professional_work = new OrderedMap({
    "supplymint": {
        label: "Supplymint",
        url: require("../assets/supplymint.png"),
        page: "https://www.supplymint.com"
    },
    "easemygst": {
        label: "EaseMYGST",
        url: require("../assets/easemygst.jpg"),
        page: "https://www.easemygst.com/"
    },
    "los": {
        label: "LOS",
        url: require("../assets/los.jpg"),
        page: "https://los.progcap.com"
    },
    "lms": {
        label: "S2LM",
        url: require("../assets/lms.jpg"),
        page: "https://s2lm.progcap.com"
    },
    "akko": {
        label: "Akko",
        url: require("../assets/akko.png"),
        page: "https://www.akko.io/"
    },
    "clouve": {
        label: "Clouve",
        url: require("../assets/clouve.jpg"),
        page: "https://www.clouve.com/"
    },
    "sales_app": {
        label: "Progcap Internal",
        url: "https://lh3.googleusercontent.com/80YUiL9Si_5rPnHliuw_qSfjReVyiH3K0pn492Mq3Ls5ZR1GERjIY39o0Ve-Ryr9H6Y=s360-rw",
        page: "https://play.google.com/store/apps/details?id=com.progcapSalesApp"
    },
    "distributor_app": {
        label: "Progcap Distributor",
        url: "https://lh3.googleusercontent.com/Az1jwqUv7m-9Vk-4JDZxxNcHDpJdpMigy8adkQp5NTe123XJiCiUTt2G_f5KNIPa-hc=s360-rw",
        page: "https://play.google.com/store/apps/details?id=com.progcap.erp"
    }
});

export const skills = new OrderedMap({
    "javascript": {
        label: "Vanilla JS",
        url: "https://img.icons8.com/color/96/000000/javascript.png"
    },
    "node": {
        label: "Node JS",
        url: "https://pluspng.com/img-png/nodejs-logo-png-node-js-on-dark-background-1843.png"
    },
    "react": {
        label: "React JS",
        url: "https://img.icons8.com/dusk/96/000000/react.png"
    },
    "react_native": {
        label: "React Native",
        url: "https://img.icons8.com/plasticine/100/000000/react.png"
    },
    "redux": {
        label: "Redux",
        url: "https://img.icons8.com/color/96/000000/redux.png"
    },
    "html": {
        label: "HTML",
        url: "https://img.icons8.com/color/96/000000/html-5.png"
    },
    "css": {
        label: "CSS",
        url: "https://coryrylan.com/assets/images/posts/types/css.svg"
    },
    "postgres": {
        label: "Postgre SQL",
        url: "https://img.icons8.com/color/96/000000/postgreesql.png"
    },
    "git": {
        label: "Git",
        url: "https://img.icons8.com/color/96/000000/git.png"
    },
    "electron": {
        label: "Electron JS",
        url: "https://img.icons8.com/dotty/80/000000/react.png"
    }
});

export const mapper = new OrderedMap({
    "skills": skills,
    "professional_work": professional_work,
    "side_projects": side_projects,
    "setting": setting,
    "all": professional_work.merge(skills).merge(side_projects)
});

export const TABS = new OrderedMap({
    skills: {
        label: "Skills",
        url: "https://img.icons8.com/dusk/64/000000/processor.png"
    },
    professional_work: {
        label: "Professional Work",
        url: "https://img.icons8.com/plasticine/100/000000/work.png"
    },
    side_projects: {
        label: "Side Projects",
        url: "https://img.icons8.com/bubbles/100/000000/code-fork.png"
    },
    github: {
        label: "Github",
        url: "https://img.icons8.com/fluent/96/000000/github.png",
        page: "https://github.com/Sahilsaxena9711"
    },
    linkedin: {
        label: "LinkedIn",
        url: "https://img.icons8.com/color/96/000000/linkedin-circled.png",
        page: "https://www.linkedin.com/in/sahil-saxena-b65595a6/"
    },
    blog: {
        label: "Blog",
        url: "https://img.icons8.com/dusk/64/000000/edit-file.png",
        page: "https://underreacted.surge.sh/"
    }
});