import express from "express"
import names from './names.json'
import {Names} from "./interfaces";


const routes = express.Router()

let data: Names[] = []


routes.get('/', (_req, res) => {

    loadData()

    res.send("CTM")
})

export  default  routes



export const getNames = () => names

export const readFile = () => {
    for (const name in names) {
        // @ts-ignore
        let num = names[name]
        data.push({name: name, time:num})
    }
}

export const loadData =  () =>{
    readFile()

}