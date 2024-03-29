const express = require('express')
const Product = require('../models/product')

// Route 1: getAllProducts 
const getAllProducts = async (req, res) => {
    const { company, name, featured, sort,select } = req.query
    const queryObject = {};

    // search functionality using name
    if (company) {
        queryObject.company = company;
    }

    // search functionality using name 
    // const namee = await Product.findOne({name})
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
        // queryObject.name=name
    }

    // search product using featured functionality
    if (featured) {
        queryObject.featured = featured
    }

    let apiData = Product.find(queryObject)


    // sorting the data 
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix)
    }


    // select the data 
    if (select) {
        // console.log(select);
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }

    // Pagination 
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip= (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit)

    const AllData = await apiData;
    res.status(200).send({AllData,myHits:AllData.length})
}


// Route 2: getAllProductsTesting
const getAllProductsTesting = async (req, res) => {
    // const { company } = req.query

    const AllData = await Product.find(req.query).select('name company')
    res.status(200).send(AllData)
}

module.exports = { getAllProducts, getAllProductsTesting }