import { MongoClient } from "mongodb";

export default async function handler(req, res){
    if(req.method=="POST"){
        const data=req.body;
        const client=await MongoClient.connect('mongodb+srv://szrot:zaq12wsx@cluster0.nzzrsfn.mongodb.net/meetups?retryWrites=true&w=majority')

        const db=client.db();

        const meetupsCollection=db.collection('meetups')

        const result= await meetupsCollection.insertOne(data);

        client.close();

         res.status(201).json({message:"Meetup inserted!"})
    }
}
// mongodb+srv://szrot:zaq1@WSX@cluster0.nzzrsfn.mongodb.net/?retryWrites=true&w=majority