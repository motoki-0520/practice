import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function GET(request, context){
    try{
        const id = await context.params.id
        await connectDB()
        const singleItem = await ItemModel.findById(id)
        return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem: singleItem})
    }catch{
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"})
    }
}