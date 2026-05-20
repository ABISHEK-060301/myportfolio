import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import antd from "../assets/stack_logo/antd.png";
import aws from "../assets/stack_logo/aws.png";
import bootstrap from "../assets/stack_logo/bootstrap.png";
import css from "../assets/stack_logo/css.png";
import express from "../assets/stack_logo/express.png";
import github from "../assets/stack_logo/github.png";
import html from "../assets/stack_logo/html.png";
import jest from "../assets/stack_logo/jest.png";
import js from "../assets/stack_logo/js.png";
import jwt from "../assets/stack_logo/jwt.png";
import mongodb from "../assets/stack_logo/mongodb.png";
import mui from "../assets/stack_logo/mui.png";
import mysql from "../assets/stack_logo/mysql.png";
import next from "../assets/stack_logo/next.png";
import node from "../assets/stack_logo/node.png";
import oauth from "../assets/stack_logo/oauth.png";
import postgre from "../assets/stack_logo/postgres.png";
import postman from "../assets/stack_logo/postman.png";
import react from "../assets/stack_logo/react.png";
import redux from "../assets/stack_logo/redux.png";
import shadcn from "../assets/stack_logo/shadcn.png";
import svelte from "../assets/stack_logo/svelte.png";
import tailwind from "../assets/stack_logo/tailwind.png";
import typescript from "../assets/stack_logo/typescript.png";

// Tabs
export const HOME = "home";
export const ABOUT = "about";
export const EXPERIENCE = "experience";
export const STACKS = "stacks";
export const CONTACT = "contact";

// Month finder
export const tellMeMonth = (monthNumber) => {
    switch (monthNumber) {
        case 0:
            return "JAN";
        case 1:
            return "FEB";
        case 2:
            return "MAR";
        case 3:
            return "APR";
        case 4:
            return "MAY";
        case 5:
            return "JUN";
        case 6:
            return "JUL";
        case 7:
            return "AUG";
        case 8:
            return "SEP";
        case 9:
            return "OCT";
        case 10:
            return "NOV";
        case 11:
            return "DEC";
        default:
            break;
    }
};

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const AllStacks = [
    antd,
    aws,
    bootstrap,
    css,
    express,
    github,
    html,
    jest,
    js,
    jwt,
    mongodb,
    mui,
    mysql,
    next,
    node,
    oauth,
    postman,
    postgre,
    react,
    redux,
    shadcn,
    svelte,
    tailwind,
    typescript,
    // vscode,
];

export const FrontEndStacks = [
    antd,
    bootstrap,
    css,
    js,
    mui,
    next,
    react,
    shadcn,
    svelte,
    tailwind,
    typescript,
];

export const BackEndStacks = [
    node,
    express,
    mongodb,
    mysql,
    postgre,
    jwt,
    oauth,
];