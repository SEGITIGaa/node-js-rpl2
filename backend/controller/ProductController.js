import product  from "../models/ProductModels.js";
import path from "path";

export const getProducts = async(req, res)=> {
    try { 
        const response = await product.findAll();
        res.json(response)
    } catch (error){
        console.log(error.message);
    }
}

export const getProductById = async(req, res)=> {
    try{
        const express = await product.findOne({
            where:{
                id: req.params.id
            }
        });
    } catch (error){
        console.log(error.message);
    }
}

export const saveProducts = (req, res)=> {
    if(req === null ) return res.status(400).json({msg:"No file upload"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg:"product created succesfully"});

    file.mv(`./public/images/${fileName}/`, async(err)=>{
        if (err) return res.status(500).json({msg: err.message});
        try{
            await product.create({name: name, image:fileName, url:url})
            res.status(201).json({msg:"product created succesfully"})
        } catch (error){
            console.log(error.message);
        }
    })
}
export const updateProducts = (req, res)=> {

}
export const deleteProducts = (req, res)=> {

}

