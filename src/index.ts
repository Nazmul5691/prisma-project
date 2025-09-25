import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {

    // const result = await prisma.user.create({
    //     data: {
    //         name: 'sagor',
    //         email: 'sagor@gmail.com',
    //         // profilePhoto: 'http://nazmul/hero.jpg'
           
    //     }
    // })

    // console.log(result);


    // const usersData = await prisma.user.findMany({
    //     where: {
    //         id: 2
    //     }
    // })

    // console.log(usersData);

    // const findUserById = await prisma.user.findUnique({
    //     where: {
    //         id: 3
    //     }
    // })

    // console.log(findUserById);


    const findUserById = await prisma.user.findUniqueOrThrow({
        where: {
            id: 7
        }
    })

    console.log(findUserById);
}


main();