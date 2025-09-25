import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function others() {

    // const insertMany = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: 'Mir',
    //             email: 'mir@mail.com'
    //         },
    //         {
    //             name: 'Hasan',
    //             email: 'hasan@mail.com'
    //         },
    //         {
    //             name: 'malek',
    //             email: 'malek@mail.com'
    //         },
    //         {
    //             name: 'Rahim',
    //             email: 'rahim@mail.com'
    //         },

    //     ]
    // })

    // console.log(insertMany);


    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers);


    // const allUsers = await prisma.user.findMany({
    //     orderBy: {
    //         id: 'asc'
    //     }
    // })

    // const allUsers = await prisma.user.findMany({
    //     orderBy: {
    //         id: 'desc'
    //         name: 'desc'
    //     }
    // })

    // console.log(allUsers);



    const allUsers = await prisma.user.findMany({
        where: {
            name: 'mir'
        },
        orderBy: {
            id: 'desc'
        }
    })

    console.log(allUsers);
    








}

others();