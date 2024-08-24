import app from "./app"
import {PORT} from "./configs/envs"

app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`);
    
})