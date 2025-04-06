import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

export async function POST(request){
    const reqBody = await request.json()
    
    try{
        await connectDB()
        await ItemModel.create(reqBody)
        return NextResponse.json({message: "アイテム作成成功"})
    }catch{
        return NextResponse.json({message: "アイテム作成失敗"})
    }
    
}

//mongodb+srv://castle:<db_password>@cluster0.jbzar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0