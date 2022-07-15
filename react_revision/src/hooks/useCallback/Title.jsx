import { React } from "react";
const Title = () => {
    console.log("TITLE")
    return <h1>Use CAllBack</h1>
}

export default React.memo(Title);