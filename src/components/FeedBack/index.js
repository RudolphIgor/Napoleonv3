import React from 'react';
import clsx from "clsx";
import style from "./index.module.css"
const Index = () => {
    return (
        <div className={clsx(style.wrapper)}>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
        </div>
    );
};

export default Index;