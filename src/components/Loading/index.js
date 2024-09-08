import React from "react";
import { ClipLoader } from 'react-spinners';
import * as C from "./styles";

const Loading = () => {
    return (
        <C.Container>
            <ClipLoader color="#123abc" loading={true} size={150} />
        </C.Container>
    );
};

export default Loading;