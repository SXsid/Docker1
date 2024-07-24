FROM node:16-alpine 

WORKDIR /app

COPY ./prisma . 
COPY package* .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node","dist/index.js" ] 


# layering will optimize the build of docker file tha's why we copy packages before and run install command before so we can chagne the src code  and we can still chace the exp operations
