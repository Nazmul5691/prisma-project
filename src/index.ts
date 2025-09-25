import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {

    const result = await prisma.user.create({
        data: {
            name: 'sagor',
            email: 'sagor@gmail.com',
            // profilePhoto: 'http://nazmul/hero.jpg'
           
        }
    })

    console.log(result);
}


main();