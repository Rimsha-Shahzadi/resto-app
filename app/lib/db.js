// const {username,password} = process.env
// export const connectinStr="mongodb+srv://"+username+":"+password+"@cluster0.y2gfapn.mongodb.net/?appName=Cluster0"

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export const connectionStr =
  `mongodb+srv://${username}:${password}@cluster0.y2gfapn.mongodb.net/restodb?retryWrites=true&w=majority`;